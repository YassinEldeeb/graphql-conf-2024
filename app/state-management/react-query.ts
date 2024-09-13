import { QueryCache, QueryClient } from 'react-query'


const queryCache = new QueryCache({
    onError: (error) => {
        console.log(error)
    },
    onSuccess: (data) => {
        console.log(data)
    },
})


const QUERY_CACHE = 1000 * 60 * 24
const STALE_TIME = 1000 * 5

export const reactQueryClient = new QueryClient({
    queryCache,
    defaultOptions: { queries: { cacheTime: QUERY_CACHE, staleTime: STALE_TIME } }
})