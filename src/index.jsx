import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CounterContextProvider } from "./CounterContext";
import { UserContextProvider } from "./UserContext";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 10 * (30 * 1000),
      refetchOnWindowFocus: false,
    },
  },
});
root.render(
  <UserContextProvider>
    <CounterContextProvider>
      <QueryClientProvider client={queryClient}>
      <Toaster />
        <App />
       
      </QueryClientProvider>
    </CounterContextProvider>
  </UserContextProvider>
);


reportWebVitals();
