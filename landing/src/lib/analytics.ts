export const track = (event: string, payload?: Record<string, unknown>) => {
  // placeholder for future analytics; no-op for now
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log('[track]', event, payload)
  }
}