// Use the ngrok API origin when provided; otherwise use the local Vite proxy.
const apiUrl = import.meta.env.VITE_API_URL
const API_BASE = apiUrl
  ? `${apiUrl.replace(/\/$/, '')}/api/v1`
  : import.meta.env.VITE_API_BASE || '/api/v1'

export function resolveMediaUrl(url) {
  if (!url || typeof url !== 'string' || url.trim() === '') return null

  try {
    const parsedUrl = new URL(url, window.location.origin)
    const isLocalBackend = ['localhost', '127.0.0.1', '[::1]'].includes(parsedUrl.hostname)

    if (isLocalBackend) {
      return `${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`
    }

    return parsedUrl.href
  } catch {
    return null
  }
}

async function request(path, options = {}) {
  const headers = { ...(options.headers || {}) }

  if (window.location.hostname.endsWith('.ngrok-free.dev') || window.location.hostname.endsWith('.ngrok.app')) {
    headers['ngrok-skip-browser-warning'] = '1'
  }

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

export function getHeroCarouselItems() {
  return request('/content/hero-carousel/')
}

export function getEventItems() {
  return request('/content/events/')
}

export function getGalleryItems() {
  return request('/content/gallery/')
}

export function getStaffMembers() {
  return request('/content/staff/')
}

export function submitContactMessage(payload) {
  return request('/contacts/messages/', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}
