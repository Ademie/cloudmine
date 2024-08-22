import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./screens/Header";
import Hero from "./screens/Hero";
import Info from "./screens/Info";
import SecuritySection from "./screens/Security";
import Started from "./screens/Started";
import Join from "./screens/Join";
import Features from "./screens/Features";
import Footer from "./screens/Footer";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Header />
      <Hero />
      <Info />
      <SecuritySection />
      
      <Started />
      <Features />
      <Join />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
