import DaisyNav from "./components/daisynav/DaisyNav";
import Navbar from "./components/navbar/Navbar";
import Priceoptions from "./components/priceoptions/Priceoptions";
import Lchart from "./components/lchart/Lchart";
import Phones from "./components/phones/Phones";

function App() {
  return (
    <>
      <DaisyNav></DaisyNav>
      <Navbar></Navbar>
      <Priceoptions></Priceoptions>
      <Lchart></Lchart>
      <Phones></Phones>
    </>
  );
}

export default App;
