import React from 'react';
import rr from "../assets/images/rr.png";
import pp from "../assets/images/pp.png";
import gug from "../assets/images/gug.png";
import gu from "../assets/images/gu.png";
import pup from "../assets/images/pup.png";
import figm from "../assets/images/figm.png";
import html from "../assets/images/html.png";
import php from "../assets/images/php.png";
import pytho from "../assets/images/pytho.png";
import node from "../assets/images/node.png";
import react from "../assets/images/react.png";
import zuu from "../assets/images/zuu.png";
import sau from "../assets/images/sau.png";



const Home = () => {
    return (
        <>
            <div className=' flex px-12 items-center bg-[#F5F7F8] '>
                <div className='w-1/2 inria '>
                    <p className='text-[#CE5B5B]'>full stack Developer</p>
                    <h1 className='text-4xl text-black font-black animate-bounce'>hello, i'm <span className='text-[#CE5B5B]'>cyuzuzo sandrine</span> </h1>
                    <h1 className='text-4xl text-black font-black animate-slideIn -Right'>welcome to my world.</h1>
                </div>
                <div className=' '>
                    <img className='w-90 h-[80vh] rounded-full' src={rr} alt="" />
                </div>
            </div>
            <div className='w-full items-center bg-[#FFFFFF] p-24 flex'>
                <div>

                    <img className='min-w-80 h-[80vh] rounded-full' src={pp} alt="" />
                </div>

                <div className='  text-black inria  ml-20'>
                    <h1 id='about' className='text-6xl text-black  font-semibold underline underline-offset-8'>About Me </h1>
                    <p className='pt-10 text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going.</p>
                    <nav class=" py-4 ">
                        <div className="flex flex-wrap mx-auto   justify-between ">
                            <div className="flex flex-wrap space-x-5">
                                <div className="space-x-5 py-3">
                                    <a href="Awards" className=" text-sm  font-semibold underline underline-offset-8  hover:text-[#CE5B5B] cursor-pointer">main skills</a>
                                    <a href="Awards" className=" text-sm  font-semibold underline underline-offset-8  hover:text-[#CE5B5B] cursor-pointer">Awards</a>
                                    <a href="Experience" className=" text-sm  font-semibold underline underline-offset-8  hover:text-[#CE5B5B] cursor-pointer">Experience</a>
                                    <a href="Education & Certification" className=" text-sm  font-semibold underline underline-offset-8  hover:text-[#CE5B5B] cursor-pointer">Education & Certification</a>
                                </div>
                            </div>
                        </div>

                    </nav>
                </div>


            </div>

            <div className='w-full bg-[#F8F9FC]'>
                <div className='col-span-2 mx-96'>
                    <h1 id='services' className='text-4xl  pt-8 font-semibold underline underline-offset-8'>My Awesome Service</h1>
                    <p className='text-xl mt-5 text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
                <div className='grid grid-cols-3 gap-3  justify-normal mt-24 min-w-2 h-72 mx-20 '>


                    <div className='col-span-1 bg-gray-100 mr-5 h-60 text-gray-500'>
                        <img className=' h-44  w-96' src={figm} alt="" />
                        <h1>Find design templates for all of your graphic design, web design, and mobile interface design needs.</h1>
                    </div>


                    <div className='col-span-1 bg-gray-100 h-60 text-gray-500'>
                        <img className=' h-44  w-96' src={php} alt="" />
                        <h1>
                            With an artificial intelligence logo generator, you don’t need design skills to create the perfect logo. </h1>
                    </div>

                    <div className='col-span-1  bg-gray-100 h-60 text-gray-500'>

                        <img className=' h-44  w-96' src={html} alt="" />
                        <h1>link to your home page, so regardless of which page users are on, </h1>
                    </div>

                </div>


                <div className='grid grid-cols-3 gap-3  justify-normal min-w-2 h-72 mx-20 '>


                    <div className='col-span-1 bg-gray-100 mr-5 h-60 text-gray-500'>
                        <img className=' h-44  w-96' src={node} alt="" />
                        <h1>Teaching you the essentials to making event-driven server-side apps, </h1>
                    </div>


                    <div className='col-span-1 bg-gray-100 h-60 text-gray-500'>
                        <img className=' h-44  w-96' src={pytho} alt="" />
                        <h1>Developers who want to create reusable modules and Python libraries and </h1>
                    </div>

                    <div className='col-span-1  bg-gray-100 h-60 text-gray-500'>

                        <img className=' h-44  w-96' src={react} alt="" />
                        <h1>These are not required elements of programming with React, but without </h1>
                    </div>

                </div>

            </div>


            <div className='w-full bg-[#FFFFFF] '>
                <div className='col-span-2 mx-96'>
                    <h1 id='blog' className='text-4xl  pt-8 font-semibold underline underline-offset-8'>My Latest Project</h1>
                    <p className='text-gray-500 pt-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
                <div className='grid grid-cols-3 gap-3  justify-normal  min-w-1 h-96 mx-20 pt-8 '>


                    <div className='col-span-1 bg-white  hover:border-red-500 '>


                        <a href="https://www.figma.com/proto/4kE6iK7sNLqJLBeafUUNxi/Untitled?type=design&node-id=19-47&t=uPlPJ9zzB1HRD40I-1&scaling=scale-down&page-id=0%3A1&mode=design" target="_blank" rel="noopener noreferrer">
                            <img className='w-96 h-96' src={gug} alt="" />
                        </a>
                    </div>


                    <div className='col-span-1 bg-white'>


                        <a href="https://movie-two-peach.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img className='w-96 h-96' src={gu} alt="" />
                        </a>
                    </div>


                    <div className='col-span-1 bg-white'>

                        <a href="https://www.figma.com/proto/GtkhgcUmVcMprowlhNYaFB/Untitled?node-id=1-2&mode=design&t=2WtIAsNMhHequvfK-1" target="_blank" rel="noopener noreferrer">
                            <img className='w-96 h-96 ' src={pup} alt="" />

                        </a>
                    </div>
                    <button type='view more' className='bg-[#CE5B5B] hover:bg-[#d65454] text-white font-bold py-2 px-2 w-32  flex-none mx-96 rounded focus:outline-none focus:shadow-outline justify-items-center'>view more</button>

                </div>



            </div>

            <div className='w-full bg-[#F8F9FC] p-24 mt-28 flex'>
                <div className='w-1/2'>
                    <h1 id='contact' className='text-6xl font-black pt-8'>Hire Me.</h1>
                    <p className='pt-8'>I am available for freelance work. Connect with me via phone: +250788909401 or email: rutayisiresandrine20@gmail.com</p>
                    <form className='mt-8'>
                        <div className='mb-4'>
                            <label htmlFor='name' className='block text-gray-700 text-sm font-bold mb-2'></label>
                            <input type='text' id='name' name='name' className='w-full shadow appearance-none border rounded py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' placeholder=' your name*' />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'></label>
                            <input type='email' id='email' name='email' className='w-full shadow appearance-none border rounded  py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder=' your email*' />
                        </div>

                        <div className='mb-4'>
                            <label htmlFor='' className='block text-gray-700 text-sm font-bold mb-2'></label>
                            <input type='text' id='object' name='object' className='w-full shadow appearance-none border rounded  py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='writter a subject' />
                        </div>

                        <div className='mb-4'>
                            <label htmlFor='message' className='block text-gray-700 text-sm font-bold mb-2 h'></label>
                            <textarea id='message' name='message' rows='3' className='w-full shadow appearance-none border rounded  py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='your message'></textarea>
                        </div>
                        <button type='submit' className='bg-[#CE5B5B] hover:bg-[#d65454] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit</button>
                    </form>
                </div>
                <div>
                    <img className='main-w-64 h-[72vh]  ml-12 mt-28 rounded-full' src={zuu} alt="" />
                </div>


            </div>


            <footer className="bg-[#000000] py-10">
                <div className="container mx-auto flex justify-between items-center text-white">
                    <div className="footer-left flex items-center">
                        <img className='w-16 h-16 rounded-full' src={sau} alt="" />
                        <p className="text-sm">&copy; 2023 Rainbow-Themes. All Rights Reserved.</p>
                    </div>
                    <div className="footer-right">
                        <div className='flex space-x-5 px-3' >
                            <svg className="w-6 h-6 text-white hover:text-red-500 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                            </svg>
                            <svg className="w-6 h-6 text-white hover:text-red-500 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd" />
                            </svg>
                            <svg className="w-6 h-6 text-white hover:text-red-500 cursor-pointer" fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path><path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path></g></svg>
                        </div>
                    </div>
                </div>
            </footer>








        </>

    )
}

export default Home