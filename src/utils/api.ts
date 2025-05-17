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

    const text = await response.text()

    if (!text) {
      return { data: null, error: 'Empty response body from server' }
    }

    const data = JSON.parse(text)
    return { data, error: null }
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
