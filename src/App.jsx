import "./App.css";
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
    </>
  );
}

export default App;
