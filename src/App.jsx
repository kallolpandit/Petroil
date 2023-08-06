import "./App.css";
import { About } from "./Components/About";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { Services } from "./Components/Services";
import { Supplier } from "./Components/Supplier";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      {/* <Banner /> */}
      <Supplier />
      <Services />
      <About />
    </>
  );
}

export default App;
