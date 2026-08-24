import csv
from io import BytesIO, StringIO

from django.contrib import admin
from django.http import HttpResponse
from django.urls import path
from openpyxl import Workbook
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Paragraph, SimpleDocTemplate, Table, TableStyle

from .models import Admission


@admin.register(Admission)
class AdmissionAdmin(admin.ModelAdmin):
	list_display = (
		'applicant_name',
		'phone',
		'email',
		'course',
		'status_badge',
		'applied_at',
	)
	list_filter = ('status', 'course__department', 'course', 'applied_at')
	search_fields = (
		'first_name',
		'last_name',
		'email',
		'phone',
		'course__title',
	)
	autocomplete_fields = ('course',)
	readonly_fields = ('applied_at',)
	ordering = ('-applied_at',)
	date_hierarchy = 'applied_at'

	def get_urls(self):
		urls = super().get_urls()
		custom_urls = [
			path('export/csv/', self.admin_site.admin_view(self.export_csv), name='admission_export_csv'),
			path('export/excel/', self.admin_site.admin_view(self.export_excel), name='admission_export_excel'),
			path('export/pdf/', self.admin_site.admin_view(self.export_pdf), name='admission_export_pdf'),
		]
		return custom_urls + urls

	def _export_rows(self):
		return Admission.objects.select_related('course', 'course__department').order_by('-applied_at')

	def export_csv(self, request):
		output = StringIO()
		writer = csv.writer(output)
		writer.writerow(('Applicant', 'Phone', 'Email', 'Course', 'Department', 'Status', 'Applied'))
		for admission in self._export_rows():
			writer.writerow(self._row_values(admission))
		response = HttpResponse(output.getvalue(), content_type='text/csv')
		response['Content-Disposition'] = 'attachment; filename="ptvti-admissions.csv"'
		return response

	def export_excel(self, request):
		workbook = Workbook()
		worksheet = workbook.active
		worksheet.title = 'Admissions'
		worksheet.append(('Applicant', 'Phone', 'Email', 'Course', 'Department', 'Status', 'Applied'))
		for admission in self._export_rows():
			worksheet.append(self._row_values(admission))
		for column in worksheet.columns:
			worksheet.column_dimensions[column[0].column_letter].width = 20
		output = BytesIO()
		workbook.save(output)
		response = HttpResponse(
			output.getvalue(),
			content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		)
		response['Content-Disposition'] = 'attachment; filename="ptvti-admissions.xlsx"'
		return response

	def export_pdf(self, request):
		output = BytesIO()
		document = SimpleDocTemplate(output, pagesize=landscape(A4), rightMargin=24, leftMargin=24, topMargin=24, bottomMargin=24)
		styles = getSampleStyleSheet()
		data = [['Applicant', 'Phone', 'Email', 'Course', 'Department', 'Status', 'Applied']]
		data.extend(self._row_values(admission) for admission in self._export_rows())
		table = Table(data, repeatRows=1)
		table.setStyle(TableStyle([
			('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#102a43')),
			('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
			('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
			('FONTSIZE', (0, 0), (-1, -1), 8),
			('GRID', (0, 0), (-1, -1), 0.25, colors.HexColor('#d9e2ec')),
			('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor('#f0f4f8')]),
			('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
		]))
		document.build([Paragraph('PTVTI Admissions', styles['Title']), table])
		response = HttpResponse(output.getvalue(), content_type='application/pdf')
		response['Content-Disposition'] = 'attachment; filename="ptvti-admissions.pdf"'
		return response

	def _row_values(self, admission):
		return (
			f'{admission.first_name} {admission.last_name}',
			admission.phone,
			admission.email,
			admission.course.title if admission.course else '',
			admission.course.department.name if admission.course and admission.course.department else '',
			admission.get_status_display(),
			admission.applied_at.strftime('%Y-%m-%d %H:%M'),
		)

	@admin.display(description='Applicant', ordering='last_name')
	def applicant_name(self, obj):
		return f'{obj.first_name} {obj.last_name}'

	@admin.display(description='Status', ordering='status')
	def status_badge(self, obj):
		colors = {
			'pending': '#b45309',
			'accepted': '#15803d',
			'rejected': '#b91c1c',
		}
		color = colors.get(obj.status, '#475569')
		return f'<span style="color: {color}; font-weight: 700;">{obj.get_status_display()}</span>'

	status_badge.allow_tags = True
