const APP_KEY = 'coffee-delivery-storage'

export function getStorageItem(key: string) {
  const data = localStorage.getItem(`@${APP_KEY}_${key}`)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return JSON.parse(data!)
}

export function setStorageItem(key: string, value: any) {
  const data = JSON.stringify(value)
  return localStorage.setItem(`@${APP_KEY}-${key}`, data)
}
