import "./App.css";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Experience from "./component/Experience";
import Featured from "./component/Featured";
import HowItWorks from "./component/HowItWorks";
import Reviews from "./component/Reviews";
import Rent from "./component/Rent";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <div className="hero h-screen max-h-[689px] bg-cover bg-no-repeat">
        <Nav />
        <Hero />
      </div>
      <Experience />
      <Featured />
      <HowItWorks />
      <Reviews />
      <div className=" max-w-[1220px] rounded-[16px] mx-auto px-2.5 bg-no-repeat top-[-322px] left-[-13px]">
        <Rent />
      </div>
      <Footer />
    </>
  );
}

export default App;
