import "./App.css";
import { About } from "./Components/About";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { Banner } from "./Components/Banner";
import { Services } from "./Components/Services";
import { Supplier } from "./Components/Supplier";
import { Logo } from "./Components/Logo";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      {/* <Banner /> */}
      <Supplier />
      <Services />
      <About />
      <Logo />
    </>
  );
}

export default App;
