import React from 'react'
import sau from "../assets/images/sau.png";

const navigation = () => {
    return (
        <div className="flex sticky top-0 items-center flex-col justify-between md:flex-row space-x-5 px-12 pt-5 bg-[#F5F7F8]">

            <div className='flex items-center'>
                <div>
                    <img className=' h-16 rounded-full' src={sau} alt="" />
                </div>
                <div className='ml-16 flex items-center'>
                    <a href="/" className="text-black hover:border-b-4 hover:border-[#CE5B5B] hover:text-[#CE5B5B] px-5  font-medium ">Home</a>
                    <a href="#about" className="text-black hover:border-b-4 hover:border-[#CE5B5B] hover:text-[#CE5B5B] px-5 font-medium   ">About</a>
                    <a href="#services" className="text-black hover:border-b-4 hover:border-[#CE5B5B] hover:text-[#CE5B5B] px-5   font-medium ">Service</a>
                    <a href="#blog" className="text-black hover:border-b-4 hover:border-[#CE5B5B] hover:text-[#CE5B5B] px-5  font-medium ">Portfolio</a>
                    <a href="#contact" className="text-black hover:border-b-4 hover:border-[#CE5B5B] hover:text-[#CE5B5B] px-5 font-medium   ">Contact</a>
                </div>
            </div>
            <div className='flex space-x-5 px-3 pt-5' >
                <svg className="w-6 h-6 text-black hover:text-red-500 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                </svg>
                <svg className="w-6 h-6 text-black hover:text-red-500 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd" />
                </svg>
                <svg className="w-6 h-6 text-black hover:text-red-500 cursor-pointer" fill="[#F5F7F8]" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path><path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path></g></svg>
            </div>
        </div>
    )
}

export default navigation





