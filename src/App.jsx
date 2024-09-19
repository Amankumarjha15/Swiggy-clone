import { Route, Routes } from "react-router-dom"
import Body from "./Components/Body"
import Head from "./Components/Head"
import ResturantMenu from "./Components/ResturantMenu"

function App() {

  return (
   <Routes>
      <Route path="/" element={<Head/>}>
      <Route path="/" element={<Body/>}/>
      <Route path="/ResturantMenu/:id" element={<ResturantMenu/>}/>
      </Route>
      
   </Routes>
  )
}

export default App
