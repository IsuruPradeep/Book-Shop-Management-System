import React from 'react'

const Login = () => {
  return (
    <div class="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
    <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800">Welcome back</h2>
    <form>
        <input id="email" class="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="email" placeholder="Enter your email" required/>
        <input id="password" class="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4" type="password" placeholder="Enter your password" required/>
        <div class="text-right py-4">
            <a class="text-blue-600 underline" href="#">Forgot Password</a>
        </div>
        <button type="submit" class="w-full mb-3 bg-indigo-500 py-2.5 rounded-full text-white">Log in</button>
    </form>
    
</div>
  )
}

export default Login