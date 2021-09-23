import React,{useEffect,useState} from 'react'
import SideImage from '../Assets/Images/sideImage.jpg';
import { getAuth, signInWithPopup, GoogleAuthProvider ,signInWithRedirect} from "firebase/auth";
import firebase from '../firebase';

function Login() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const user = auth.currentUser;
    const logins = async(e) =>{
        localStorage.setItem('loginToekn', 'token')
       e.preventDefault();
        await signInWithRedirect(auth, provider)
            .then((result) => {
                console.log(result)
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                console.log(error)
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    return (
        <div className="container mx-auto self-center">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white shadow-2xl p-5 mt-10">
                    <h1 className="text-left text-3xl mb-5 pb-5 border-b-2 border-blue-100">Login</h1>  
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                        </div>
                        <div className="w-full text-center">
                            <a href="#" onClick={logins} className="w-full text-center rounded-md border-2 border-blue-500 block p-2 mt-5">Login with Google</a>
                        </div> 
                    </form>
                </div>
            </div> 
        </div>
    )
}

export default Login
