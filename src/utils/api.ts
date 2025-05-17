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
      return { data: null, error: `API error: ${response.status} - ${errorText}` }
    }

    // ✅ Проверка на пустой ответ
    const contentLength = response.headers.get('content-length')
    if (contentLength === '0') {
      return { data: null, error: 'Empty response from server' }
    }

    const text = await response.text()
    if (!text) {
      return { data: null, error: 'No content received from API' }
    }

    const data = JSON.parse(text)
    return { data, error: null }
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : String(err),
    }
  }
}
