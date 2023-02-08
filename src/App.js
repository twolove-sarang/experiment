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
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <div className="md:flex items-start">
          <div className="md:flex-col items-start">
            <MenuSection />
          </div>
          <UserContextProvider value>
            <Outlet />
            {/* <ReactQueryDevtools initialIsOpen={true} /> */}
          </UserContextProvider>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
