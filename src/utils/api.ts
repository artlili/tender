// src/utils/api.ts

export type ApiResult<T> = {
  data: T | null
  error: string | null
}

export async function fetchData<T>(url: string, options: RequestInit = {}): Promise<ApiResult<T>> {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      const errorText = await response.text()
      return {
        data: null,
        error: `API error: ${response.status} ${response.statusText} - ${errorText}`,
      }
    }

    const data = await response.json()
    return { data, error: null }
  } catch (err) {
    console.error('Fetch error:', err)
    return {
      data: null,
      error: err instanceof Error ? err.message : String(err),
    }
  }
}
