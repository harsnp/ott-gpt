import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const toggleSignInForm = () =>{

        setSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header/>
      <div className="absolute">
      <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="backgroundimage"/>
      </div>
      
      <form onSubmit={ (e) => {e.preventDefault()}} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-700"/>}
        <input type="text" placeholder="email" className="p-2 my-2 w-full bg-gray-700"/>
        <input type="password" placeholder="Password" className="p-2 my-2 w-full bg-gray-700"/>
        <button  className="p-2 my-4 w-full bg-red-700 rounded-lg">Submit</button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to netflix? Sign Up Now":"Already Registered? Sign In Now"}</p>
      </form>
      
    </div>
  )
}

export default Login
