import { Route, Routes } from "react-router-dom"
import Body from "./Components/Body"
import Head from "./Components/Head"
import ResturantMenu from "./Components/ResturantMenu"
import { CartContext, Coordinates, Visibility } from "./context/contextApi"
import { useState } from "react"

function App() {

  const [Visible, setVisible] = useState(false);
  const [Coord, setCoord] = useState({lat : 28.65200 , lng : 77.16630})
  const [cartData, setcartData] = useState([])

  return (
    <CartContext.Provider value={{cartData , setcartData}}>
          <Coordinates.Provider value={{Coord , setCoord}}>
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
        </Coordinates.Provider>
   </CartContext.Provider>
  )
}

export default App
