import { signInWithPopup, signOut } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../config/firebaseAuth'
import { useDispatch, useSelector } from 'react-redux'
import { addUserData,removeUserData } from '../utils/authSlice'
import { useNavigate } from 'react-router-dom'

function LoginPage() {

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
    // console.log(userData)
    navigate("/")
  }


  async function handleAuthremove(){
    await signOut(auth)
    dispatch(removeUserData())
    navigate("/")
  }


  return (
    <div>
        Login 
        <button onClick={handleAuth} className='p-5 m-6 bg-green-700'>Google sign in</button>
       {userData && <button onClick={handleAuthremove} className='p-5 m-6 bg-green-700'>Log Out</button>}
    </div>
  )
}

export default LoginPage