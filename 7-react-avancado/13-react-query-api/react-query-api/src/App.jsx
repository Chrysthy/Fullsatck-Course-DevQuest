import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const queryClient = new QueryClient();

  return (
    <>

      <QueryClientProvider client={queryClient} >

      </QueryClientProvider>

    </>
  )
}

export default App