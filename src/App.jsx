import "./App.css";

function App() {
  return (
    <div className="w-full h-screen bg-pink-200">
      <div className="w-[500px] h-[500px] flex flex-col justify-center items-center bg-gray-200">
        <div className="w-[90px] h-[90px] bg-amber-200"></div>

        <div className="w-[90px] h-[90px] bg-amber-700"></div>

        <div className="w-[90px] h-[90px] bg-green-200"></div>

        <div className="w-[90px] h-[90px] bg-blue-200"></div>
      </div>
    </div>
  );
}

export default App;
