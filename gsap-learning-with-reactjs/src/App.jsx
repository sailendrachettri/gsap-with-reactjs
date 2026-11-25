import "./index.css"
import './App.css'
import BasicPart1 from "./components/part1/BasicPart1"
import ZoomThroughCenter from "./components/zoom-through-center/ZoomThroughCenter"
import FadeUp from "./components/fade-up/FadeUp"

function App() {

  return (
    <div className="bg-[#1E1E1E] text-white min-h-screen">
     {/* <BasicPart1 /> */}
     <FadeUp />
    </div>
  )
}

export default App
