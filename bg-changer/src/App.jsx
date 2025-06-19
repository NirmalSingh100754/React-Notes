import { useState } from "react";


function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        className="w-screen h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed bottom-12 inset-x-0 px-20 w-screen">
          <div className="flex flex-wrap justify-around bg-white px-3 py-2 rounded-xl">
            <button className=" bg-red-500 rounded-xl" onClick={()=>setColor("red")}>Red</button>
            <button className=" bg-green-500 rounded-xl" onClick={()=>setColor("green")} >Green</button>
            <button className=" bg-blue-500 rounded-xl" onClick={()=>setColor("blue")} >Blue</button>
            <button className=" bg-white rounded-xl" onClick={()=>setColor("white")} >White</button>
            <button className=" bg-pink-500 rounded-xl" onClick={()=>setColor("pink")} >Pink</button>
            <button className=" bg-yellow-600 rounded-xl" onClick={()=>setColor("Yellow")} >Yellow</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
