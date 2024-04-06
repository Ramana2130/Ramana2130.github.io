import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div>
        {loading ? (
          <ClipLoader color={"#f46e69"} loading={loading} size={150} />
        ) : (
          <>
            <Navbar />
            <Hero />
            <Skills />
            <About />
            <Work />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
