import Navbar from "./views/Navbar";
import BlueForm from "./views/BlueForm";
import SectionTwo from "./views/SectionTwo";
import SectionOne from "./views/SectionOne";
import SectionThree from "./views/SectionThree";
import SectionFour from "./views/SectionFour";
import Hero from "./views/Hero";

function App() {
  return (
    <>
      <Navbar />
      <hr />
      <Hero />
      <SectionOne />
      <SectionThree />
      <SectionTwo />
      <SectionFour />
      <BlueForm />
    </>
  );
}

export default App;
