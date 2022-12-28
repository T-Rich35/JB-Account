import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";
import Section from "./section";

export default function app() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Section />
      <Footer />
    </div>
  );
}
