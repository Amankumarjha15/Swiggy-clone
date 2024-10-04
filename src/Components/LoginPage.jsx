import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../config/firebaseAuth'

function LoginPage() {

  async function handleAuth () {
    let data = await signInWithPopup(auth,provider)
  }


  return (
    <div>
        Login 
        <button onClick={handleAuth} className='p-5 m-6 bg-green-700'>Google sign in</button>
    </div>
  )
}

export default LoginPage