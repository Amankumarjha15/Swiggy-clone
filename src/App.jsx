import { Route, Routes } from "react-router-dom"
import Body from "./Components/Body"
import Head from "./Components/Head"
import ResturantMenu from "./Components/ResturantMenu"
import { Visibility } from "./context/contextApi"
import { useState } from "react"

function App() {

  const [Visible, setVisible] = useState(false);

  return (
    <Visibility.Provider value={{Visible , setVisible}}>
    <div className={Visible ? "overflow-hidden max-h-screen" : ""}>
   <Routes>
      <Route path="/" element={<Head/>}>
      <Route path="/" element={<Body/>}/>
      <Route path="/ResturantMenu/:id" element={<ResturantMenu/>}/>
      </Route>
      
   </Routes>
   </div>
   </Visibility.Provider>
  )
}

export default App
