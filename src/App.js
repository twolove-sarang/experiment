import "./App.css";
import MenuSection from "./component/MenuSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MenuSection />
      </QueryClientProvider>
    </>
  );
}

export default App;
