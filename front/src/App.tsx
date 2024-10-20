import { QueryClientProvider, useQueryClient } from "@tanstack/react-query"
import HomePage from "./pages/homePage"

function App() {
  const queryClient = useQueryClient()

  return (
    <div className="w-full min-h-screen p-10">
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </div>
  )
}

export default App
