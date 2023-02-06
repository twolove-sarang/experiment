import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import MenuSection from "./component/MenuSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserContextProvider } from "./firebaseData/firebaseUserContext/userContext";
// import Footer from "./component/Footer";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <div className="flex">
          <div className="w-80 h-screen p-2 ">
            <MenuSection />
          </div>
          <div className="p-4 ml-4">
            <UserContextProvider value>
              <Outlet />
              {/* <ReactQueryDevtools initialIsOpen={true} /> */}
            </UserContextProvider>
          </div>
        </div>
      </QueryClientProvider>
      {/* <Footer /> */}
    </>
  );
}

export default App;
