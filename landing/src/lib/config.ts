export const getConfig = () => ({
  appUrl: import.meta.env.VITE_APP_URL ?? 'https://app.example.com/login',
  backendUrl: import.meta.env.VITE_BACKEND_URL ?? '',
})