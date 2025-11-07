export const BOOK_API_CONFIG = {
    BASE_URL: 'https://jsonplaceholder.typicode.com',
    header: {
        accept: 'application/json'
    }
}

export const fetchBooks = async ({ query }: { query: string }) => {
    const endpoint = query ? `${BOOK_API_CONFIG.BASE_URL}/posts?${encodeURIComponent(query)}` : `${BOOK_API_CONFIG.BASE_URL}/posts`
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: BOOK_API_CONFIG.header
    })

    if (!response.ok) {
        // @ts-ignore
        throw new Error('Failed to fetch books', response.statusText)
    }

    const data = await response.json();

    return data;
}