import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";

export default function app() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}
