import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import AOS from "aos";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Service from "./components/service";
import Card from "./components/Card";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* <Card /> */}
      <Header />
      <main>
        <Hero />
        <Service />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
