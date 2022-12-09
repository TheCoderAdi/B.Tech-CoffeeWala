import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Review from "./Components/Review";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
//Styles
import "./Styles/app.scss";
import "./Styles/header.scss";
import "./Styles/home.scss";
import "./Styles/about.scss";
import "./Styles/menu.scss";
import "./Styles/review.scss";
import "./Styles/contact.scss";
import "./Styles/footer.scss";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Menu />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
