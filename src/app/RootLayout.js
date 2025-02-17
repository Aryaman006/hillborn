"use client";

import { Provider } from "react-redux";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import  { persistor, store } from "@/redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}
