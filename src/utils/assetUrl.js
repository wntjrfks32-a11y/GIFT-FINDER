export function assetUrl(path) {
  const relativePath = path.replace(/^\/+/, '')
  return `${import.meta.env.BASE_URL}${relativePath}`
}

export function appUrl(path = '/') {
  const relativePath = path.replace(/^\/+/, '')
  return `${import.meta.env.BASE_URL}${relativePath}`
}

export function appRouteUrl(route = '/') {
  const normalizedRoute = route.startsWith('/') ? route : `/${route}`
  return `${import.meta.env.BASE_URL}#${normalizedRoute}`
}
