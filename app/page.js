import Fotter from "./components/Fotter";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const SomeParentComponent = () => {
  return (
    <div className="bg-white h-screen flex flex-col w-full ">
      <Navbar />
      <Hero />
    </div>
  );
};

export default SomeParentComponent;
