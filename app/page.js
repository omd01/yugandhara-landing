import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const SomeParentComponent = () => {
  return (
    <div className="bg-white h-screen flex flex-col w-full sm:overflow-hidden">
      <Navbar />
      <Hero />
      <CustomCursor/>
    </div>
  );
};

export default SomeParentComponent;
