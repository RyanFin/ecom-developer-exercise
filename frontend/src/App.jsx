import Carousel from "./Components/Carousel";

function App() {
  return (
    <div className="min-h-screen bg-black p-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-white">Product Carousel</h1>
      <h2 className="text-xl font-semibold mb-6 text-center text-white">
        Product Recommendations
      </h2>
      <Carousel />
    </div>
  );
}

export default App;
