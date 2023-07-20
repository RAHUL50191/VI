import React from "react";
import Categories from "./components/categories/Categories";
import NavigationBar from "./components/navbar/NavigationBar";
import HomeScreen from "./components/home/Home";
import AboutSection from "./components/about/About";
import ContactScreen from "./components/contact/Contact";
const App = () => {
  return (
    <>
      <NavigationBar />
      <HomeScreen />
      <AboutSection />
      <Categories />
      <ContactScreen />
    </>
  );
};

export default App;
