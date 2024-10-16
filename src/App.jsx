import { Route, Routes } from "react-router-dom"
import Body from "./Components/Body"
import Head from "./Components/Head"
import ResturantMenu from "./Components/ResturantMenu"
import { CartContext, Coordinates, Visibility } from "./context/contextApi"
import { lazy, Suspense, useEffect, useState } from "react"
import Cart from "./Components/Cart"
import { useSelector } from "react-redux"
import LoginPage from "./Components/LoginBtn"
import Search from "./Components/Search"


// const Search = lazy(()=>import("./Components/Search"))
// const ResturantMenu = lazy(()=>import("./Components/ResturantMenu"))

function App() {

  // const [Visible, setVisible] = useState(false);

  const Visible = useSelector((state)=> state.toogleSlice.searchBarToogle)
  const loginVisible = useSelector((state)=> state.toogleSlice.loginToggle)


  const [Coord, setCoord] = useState({lat : 28.65200 , lng : 77.16630})


  // const [cartData, setcartData] = useState([])

  // function getDataFromLocalStorge(){
  //     let data = JSON.parse(localStorage.getItem("cartData")) || []
  //   setcartData(data);
  // }

  // useEffect(()=>{
  //   getDataFromLocalStorge()
  // },[])

  return (
//     <CartContext.Provider value={{cartData , setcartData}}>
          <Coordinates.Provider value={{Coord , setCoord}}>
                {/* <Visibility.Provider value={{Visible , setVisible}}> */}
                        <div className={(loginVisible ? "overflow-hidden max-h-screen" : "") ||(Visible ? "overflow-hidden max-h-screen" : "") }>
                              <Suspense fallback="loading.......">
                              <Routes>
                                  <Route path="/" element={<Head/>}>
                                  <Route path="/" element={<Body/>}/>
                                  <Route path="/ResturantMenu/:id" element={<ResturantMenu/>}/>
                                  <Route path="/cart" element={<Cart/>}/>
                                  <Route path="/search" element={<Search/>}/>
                                  <Route path="*" element={<h1>Coming Soon .......</h1>}/>
                                  </Route>  
                              </Routes>
                              </Suspense>
                      </div>
              {/* </Visibility.Provider> */}
        </Coordinates.Provider>
  //  </CartContext.Provider>
  )
}

export default App
