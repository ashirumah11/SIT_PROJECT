// Use Vite's development proxy by default so browser requests stay same-origin.
// Set VITE_API_BASE when deploying the frontend separately from the API.
const API_BASE = import.meta.env.VITE_API_BASE || '/api/v1'

async function request(path, options = {}) {
  const headers = { ...(options.headers || {}) }

  // A Content-Type header on a body-less GET triggers an unnecessary CORS
  // preflight request. Only declare JSON when this request actually has a body.
  if (options.body && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json'
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  })

  const text = await response.text()
  const data = text ? JSON.parse(text) : null

  if (!response.ok) {
    throw new Error(data?.detail || data?.message || response.statusText)
  }

  return data
}

export function getAnnouncements() {
  return request('/content/announcements/')
}

export function getNewsArticles() {
  return request('/news/')
}

export function getTestimonials() {
  return request('/content/testimonials/')
}

export function getEventItems() {
  return request('/content/events/')
}

export function getGalleryItems() {
  return request('/content/gallery/')
}

export function submitContactMessage(payload) {
  return request('/contacts/messages/', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}
