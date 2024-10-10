import { signInWithPopup, signOut } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../config/firebaseAuth'
import { useDispatch, useSelector } from 'react-redux'
import { addUserData,removeUserData } from '../utils/authSlice'
import { useNavigate } from 'react-router-dom'
import { toggleLogin } from '../utils/toogleSlice'
import toast from 'react-hot-toast'

function LoginBtn() {

    const userData = useSelector((state)=> state.authSlice.userData)

   const dispatch = useDispatch()
   const navigate = useNavigate()



  async function handleAuth () {
    let data = await signInWithPopup(auth,provider)
    let userData = {
        name : data.user.displayName,
        photo : data.user.photoURL
    }
    dispatch(addUserData(userData))
    toast.success(`Welcome  ${data.user.displayName}`)
    // console.log(userData)
    navigate("/")
    dispatch(toggleLogin())
  }
  
  
  async function handleAuthremove(){
    await signOut(auth)
    dispatch(removeUserData())
   toast.error("You're Logged Out")
    navigate("/")
    dispatch(toggleLogin())
  }


  return (
    <>
       
       {
       userData ? 
       <button onClick={handleAuthremove} className='w-full text-2xl p-7 bg-orange-700 text-white my-5'>Log Out</button>
        :
         <button onClick={handleAuth} className='w-full text-2xl p-7 bg-orange-700 text-white my-5'>LogIn With GOOGLE</button>}
    </>
  )
}

export default LoginBtn