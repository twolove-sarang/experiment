import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import MenuSection from "./component/MenuSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserContextProvider } from "./firebaseData/firebaseUserContext/userContext";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
