import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    
    const [email , setemail] = useState('')
    const [password , setpassword] = useState('')
    

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email , password)
        
        setemail("")
        setpassword("");
    }


    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className='border-2 rounded-2xl border-emerald-500 p-20'>
                <form
                    onSubmit={(e) => {
                            submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => {
                            setemail(e.target.value)
                        }}
                        required className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl  outline-none bg-transparent placeholder:text-gray-600' type="email" placeholder='Enter your email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setpassword(e.target.value)
                        }}
                        required className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl  outline-none bg-transparent placeholder:text-gray-600 mt-5' type="password" placeholder='Password' />
                    <button className='mt-5 border-none bg-emerald-600 rounded-full py-3 px-5 text-xl text-White outline-none' type="submit">Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login
