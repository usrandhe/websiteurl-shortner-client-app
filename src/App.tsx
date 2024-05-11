import * as React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Container/>
      <Footer/>
    </div>
  );
};

export default App;
