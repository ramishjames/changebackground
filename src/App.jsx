import { useState } from "react"


function App() {
 
  const [color,setcolor] = useState("black")
  

  return (
    
    <div className="w-full h-screen duration-500" style={{backgroundColor:color}}>    
      {/* <div className="fixed flex flex-wrap justify-center bottom-12 inset-0 px-2"></div>
      <div className="flx flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"></div> */}


<button onClick={()=> setcolor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" >Green</button>

<button onClick={()=> setcolor("Purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Purple</button>

<button onClick={()=> setcolor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Yellow</button>
    </div>
    
  )
}

export default App