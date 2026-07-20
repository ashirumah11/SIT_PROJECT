import { createFileRoute, Link } from "@tanstack/react-router";
import heroWorkshop from "@/assets/hero-workshop.jpg";
import courseCulinary from "@/assets/course-culinary.jpg";
import courseElectrical from "@/assets/course-electrical.jpg";
import courseFashion from "@/assets/course-fashion.jpg";
import productionCarpentry from "@/assets/production-carpentry.jpg";
import productionProcessing from "@/assets/production-processing.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const courses = [
  {
    img: courseCulinary,
    tag: "Hospitality",
    title: "Hospitality & Catering",
    blurb: "Master culinary techniques, pastry arts, and professional kitchen management for international careers.",
    duration: "2 Years",
    employment: "98% Placement",
    fee: "$1,200",
    badge: "Top Rated",
  },
  {
    img: courseElectrical,
    tag: "Engineering",
    title: "Electrical Technology",
    blurb: "Specialized training in residential wiring, industrial automation, and renewable energy systems.",
    duration: "3 Years",
    employment: "92% Placement",
    fee: "$1,450",
  },
  {
    img: courseFashion,
    tag: "Design",
    title: "Fashion & Textiles",
    blurb: "Integrating traditional craftsmanship with modern garment construction and sustainable fashion.",
    duration: "2 Years",
    employment: "89% Placement",
    fee: "$1,100",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-surface text-foreground font-sans selection:bg-brand/10">
      {/* Announcement */}
      <div className="bg-brand text-brand-foreground py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-4 text-xs font-medium tracking-wide">
          <span>ADMISSIONS OPEN FOR SEPTEMBER 2026 INTAKE</span>
          <span className="w-1 h-1 rounded-full bg-brand-foreground/40" />
          <a href="#apply" className="underline underline-offset-4 decoration-brand-foreground/30 hover:decoration-brand-foreground">
            Download Prospectus
          </a>
        </div>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl tracking-tight text-brand">St. Martha Institute</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Technical &amp; Vocational</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <a href="#courses" className="hover:text-brand transition-colors">Academics</a>
              <Link to="/about" className="hover:text-brand transition-colors">About</Link>
              <a href="#production" className="hover:text-brand transition-colors">Production</a>
              <a href="#life" className="hover:text-brand transition-colors">Campus Life</a>
              <a href="#contact" className="hover:text-brand transition-colors">Contact</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-sm font-medium px-4 py-2 hover:text-brand transition-colors">Portal</button>
            <a href="#apply" className="bg-brand text-brand-foreground text-sm font-medium py-2 px-4 flex items-center gap-1.5 rounded ring-1 ring-brand">
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="font-serif text-5xl md:text-7xl leading-tight text-brand text-balance max-w-[20ch]">
                Forming Skilled Hands and Compassionate Hearts.
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-[48ch]">
                A legacy of the Sisters of St. Martha, providing world-class technical education grounded in Christian values for over fifty years.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <a href="#courses" className="bg-brand text-brand-foreground text-sm font-medium h-10 px-6 inline-flex items-center rounded ring-1 ring-brand">
                  Explore Courses
                </a>
                <a href="#heritage" className="bg-transparent text-foreground text-sm font-medium h-10 px-6 inline-flex items-center rounded ring-1 ring-border hover:bg-foreground/5">
                  Institutional Profile
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroWorkshop}
                alt="Sisters of St. Martha supervising students in a textile workshop"
                width={1200}
                height={1400}
                className="w-full aspect-[4/5] object-cover rounded-xl ring-1 ring-border"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-border bg-surface-muted">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              ["94%", "Graduate Employment"],
              ["1,200+", "Current Students"],
              ["12", "Vocational Depts"],
              ["50+", "Years of Service"],
            ].map(([n, l]) => (
              <div key={l} className="flex flex-col">
                <span className="text-3xl font-serif text-brand">{n}</span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{l}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-brand-accent uppercase tracking-[0.2em]">Academics</span>
                <h2 className="font-serif text-4xl text-brand text-balance max-w-[35ch]">Professional Certifications</h2>
              </div>
              <a href="#courses" className="text-sm font-medium text-muted-foreground underline underline-offset-4 decoration-border hover:decoration-brand">
                All Departments
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {courses.map((c) => (
                <article key={c.title} className="group flex flex-col bg-surface-muted/60 rounded-xl ring-1 ring-border overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" width={800} height={500} className="w-full aspect-[16/10] object-cover" />
                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex justify-between items-start gap-3">
                      <h3 className="font-serif text-2xl text-brand leading-tight">{c.title}</h3>
                      {c.badge && (
                        <span className="text-xs font-semibold px-2 py-1 bg-emerald-100 text-emerald-800 rounded shrink-0">{c.badge}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground text-pretty">{c.blurb}</p>
                    <div className="pt-4 border-t border-border grid grid-cols-2 gap-y-3">
                      <div>
                        <span className="block text-[10px] uppercase text-muted-foreground/70 font-bold">Duration</span>
                        <span className="text-sm font-medium">{c.duration}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase text-muted-foreground/70 font-bold">Employment</span>
                        <span className="text-sm font-medium text-emerald-700">{c.employment}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase text-muted-foreground/70 font-bold">Annual Fee</span>
                        <span className="text-sm font-medium">{c.fee}</span>
                      </div>
                      <div className="flex items-end">
                        <a href="#courses" className="text-xs font-semibold text-brand-accent group-hover:translate-x-1 transition-transform">
                          Details &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Production */}
        <section id="production" className="py-24 px-6 bg-brand text-brand-foreground">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-brand-accent uppercase tracking-widest">Our Production House</span>
                <h2 className="font-serif text-4xl leading-tight text-balance max-w-[35ch]">
                  Building self-reliance through practical excellence.
                </h2>
              </div>
              <p className="text-brand-foreground/70 text-pretty max-w-[56ch]">
                Our production units serve two purposes: providing hands-on training for our students and generating revenue
                to subsidize tuition fees. We manufacture high-quality furniture, textiles, and processed goods for the local market.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2">Institutional Credibility</h4>
                  <p className="text-xs text-brand-foreground/60">Accredited by the Ministry of Education and National Vocational Authority since 1982.</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Industry Partners</h4>
                  <p className="text-xs text-brand-foreground/60">Official training partner for 15+ national manufacturing and hospitality firms.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={productionCarpentry} alt="Handcrafted furniture" loading="lazy" width={600} height={600} className="w-full aspect-square object-cover rounded-lg ring-1 ring-brand-foreground/10" />
              <img src={productionProcessing} alt="Artisanal products" loading="lazy" width={600} height={600} className="w-full aspect-square object-cover rounded-lg ring-1 ring-brand-foreground/10 mt-8" />
            </div>
          </div>
        </section>

        {/* Heritage */}
        <section id="heritage" className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
            <span className="text-xs font-semibold text-brand-accent uppercase tracking-[0.2em]">Our Heritage</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand text-balance">
              Fifty years of the Sisters' quiet, steady work.
            </h2>
            <p className="text-muted-foreground text-pretty max-w-[62ch] mx-auto">
              From humble beginnings, the Sisters of St. Martha have shepherded generations of skilled technicians,
              nurses, and artisans into dignified employment. Our five departments carry forward that mission today
              with modern facilities and industry-aligned curricula.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                ["History", "Founded 1974 by the Sisters of St. Martha."],
                ["Governance", "Board of Governors with academic and industry leaders."],
                ["Accreditation", "Recognized by national and international bodies."],
              ].map(([t, d]) => (
                <div key={t} className="p-6 rounded-xl ring-1 ring-border bg-surface-muted/50 text-left">
                  <h4 className="font-serif text-xl text-brand mb-2">{t}</h4>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="apply" className="py-24 px-6 text-center bg-surface-muted border-y border-border">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
            <h2 className="font-serif text-4xl text-brand leading-tight text-balance">
              Take the first step toward a dignified career.
            </h2>
            <p className="text-muted-foreground text-pretty max-w-[56ch]">
              Applications for our specialized diploma and certificate programs are currently processed through our secure online portal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#apply" className="bg-brand text-brand-foreground text-sm font-medium h-10 px-8 inline-flex items-center rounded ring-1 ring-brand">
                Begin Application
              </a>
              <a href="#contact" className="bg-transparent text-foreground text-sm font-medium h-10 px-8 inline-flex items-center rounded ring-1 ring-border hover:bg-foreground/5">
                Contact Admissions
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-surface-muted border-t border-border py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[2fr_1fr_1.5fr] gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl tracking-tight text-brand">St. Martha Institute</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Technical &amp; Vocational</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-[35ch]">
              Dedicated to the holistic formation of technical professionals through excellence, integrity, and faith-based values.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#courses" className="hover:text-brand">Fee Structure</a>
              <a href="#courses" className="hover:text-brand">Scholarships</a>
              <a href="#life" className="hover:text-brand">Student Council</a>
              <a href="#heritage" className="hover:text-brand">Alumni Network</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider">Contact Information</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Plot 124, Saint Martha Road</span>
              <span>Entebbe, Uganda</span>
              <span className="mt-2">+256 414 555 0192</span>
              <span>admissions@stmartha.edu</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex justify-between items-center text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
          <span>&copy; 2026 Sisters of Saint Martha</span>
          <span>Managed by the Sisters of St. Martha</span>
        </div>
      </footer>
    </div>
  );
}
