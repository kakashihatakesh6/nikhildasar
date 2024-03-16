import React, { Fragment } from 'react'
import Link from 'next/link';

const Work = () => {

    return (
        <div className='mt-[5rem] h-[auto] w-[360px]  md:w-[720px] ' >
            <div className='stroke-yellow-300 text-[5rem] md:text-[6rem] font-extrabold z-0 opacity-80  text-transparent' style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }} > {"<"}Work {"/>"}   </div>

            <div className='flex flex-col justify-center m-auto md:flex-row' >
                {/* PROJECT 1 */}

                <div className='border-slate-700  border w-[330px] min-h-[300px] h-[505px] m-3 p-1 hover:bg-slate-900 duration-300 transition-all cursor-pointer  ' >
                    <div className='text-[17px] text-slate-300 p-4 pb-2 text-center flex justify-center gap-2 ' >

                        <a target='blank' href="https://shop-vistaa.netlify.app/" className='flex flex-row'>
                            <span>
                                Shop-Vista -(E-Commerce Store)
                            </span>
                            <img className='w-6 h-6 pt-1' src="link.png" alt="" />
                        </a>

                    </div>
                    <hr className='w-[70%] mb-4 text-center m-auto text-slate-400 bg-slate-700  border-slate-600 ' />
                    <div className='w-[95%] object-cover h-[auto] m-auto'  >
                        <img src="/Shop-vista.png" className='cursor-pointer opacity-75 hover:opacity-100 h-[10rem] object-contain transition-all duration-200 ' alt="" />
                    </div>
                    <div className='m-2 text-lg ml-4 text-slate-300 mt-8'>TECH STACK </div>

                    <div className='flex flex-wrap w-[400px]' >

                        <div className=' text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40 
                         border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 
                         transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/nextjs.png"} width={24} alt="" />
                            </div>
                            <div>{"Next JS"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/react.png"} width={24} alt="" />
                            </div>
                            <div>{"React JS"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/redux.jpg"} width={24} alt="" />
                            </div>
                            <div>{"Redux"}</div>
                        </div>


                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/tailwind.png"} width={24} alt="" />
                            </div>
                            <div>{"Tailwind"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/node.png"} width={24} alt="" />
                            </div>
                            <div>{"NodeJS"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/typescript.png"} width={10} alt="" />
                            </div>
                            <div>{"JavaScript"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/express.png"} width={24} alt="" />
                            </div>
                            <div>{"express"}</div>
                        </div>

                        <div className=' text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/mongodb.png"} width={24} alt="" />
                            </div>
                            <div>{"MongoDB"}</div>
                        </div>


                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/razorpay.png"} width={24} alt="" />
                            </div>
                            <div>{"Razorpay"}</div>
                        </div>

                    </div>
                </div>

                {/* project 2 */}
                <Fragment>


                    <div className='border-slate-700  border w-[330px] min-h-[300px] h-[505px] m-3 p-1 hover:bg-slate-900 duration-300 transition-all cursor-pointer  ' >
                        <div className='text-[17px] text-slate-300 p-4 pb-2 text-center flex justify-center gap-2 ' >
                            <a target='blank' href="https://sitting-position-detection.vercel.app/" className='flex flex-row'>
                                <span>
                                    Sitting-Position-Detection - (Web-App)
                                </span>
                                <img className='w-6 h-6 pt-1' src="link.png" alt="" />
                            </a>

                        </div>
                        <hr className='w-[70%] mb-4 text-center m-auto text-slate-400 bg-slate-700  border-slate-600 ' />
                        <div className='w-[95%] object-cover h-[auto] m-auto  '  >
                            <img src="/sitting-position/spd-cover.png" className='cursor-pointer opacity-75 hover:opacity-100 h-[10rem] object-contain transition-all duration-200 ' alt="" />
                        </div>

                        <div className='m-2 text-lg ml-4 text-slate-300 mt-8'>TECH STACK </div>

                        <div className='flex flex-wrap w-[400px]' >

                            <div className=' text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40 
                         border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 
                         transition-all duration-200 ' >
                                <div className='rounded-md '>
                                    <img src={"/nextjs.png"} width={24} alt="" />
                                </div>
                                <div>{"Next JS"}</div>
                            </div>

                            <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                                <div className='rounded-md '>
                                    <img src={"/react.png"} width={24} alt="" />
                                </div>
                                <div>{"React JS"}</div>
                            </div>

                            <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                                <div className='rounded-md '>
                                    <img src={"/tailwind.png"} width={24} alt="" />
                                </div>
                                <div>{"Tailwind"}</div>
                            </div>

                            <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                                <div className='rounded-md '>
                                    <img src={"/node.png"} width={24} alt="" />
                                </div>
                                <div>{"NodeJS"}</div>
                            </div>
                            <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                                <div className='rounded-md '>
                                    <img src={"/n"} width={24} alt="" />
                                </div>
                                <div>{"Tensor Flow"}</div>
                            </div>


                        </div>

                    </div>

                </Fragment>

            </div>

            <div className='flex flex-col justify-center m-auto md:flex-row' >
                {/* PROJECT 3 */}


                <div className='border-slate-700  border w-[330px] min-h-[300px] h-[505px] m-3 p-1 hover:bg-slate-900 duration-300 transition-all cursor-pointer  ' >
                    <div className='text-[17px] text-slate-300 p-4 pb-2 text-center flex justify-center gap-2 ' >

                        <a target='blank' href="https://desire-netflix.vercel.app/auth" className='flex flex-row'>
                            <span>
                                Desire-Netflix - (Streaming Platform)
                            </span>
                            <img className='w-6 h-6 pt-1' src="link.png" alt="" />
                        </a>

                    </div>
                    <hr className='w-[70%] mb-4 text-center m-auto text-slate-400 bg-slate-700  border-slate-600 ' />
                    <div className='w-[95%] object-cover h-[auto] m-auto  '  >
                        <img src="/netflix.png" className='cursor-pointer opacity-75 hover:opacity-100 h-[10rem] object-contain transition-all duration-200 ' alt="" />
                    </div>
                    <div className='m-2 text-lg ml-4 text-slate-300 mt-8'>TECH STACK </div>

                    <div className='flex flex-wrap w-[400px]' >

                        <div className=' text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40 
                         border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 
                         transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/nextjs.png"} width={24} alt="" />
                            </div>
                            <div>{"Next JS"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/react.png"} width={24} alt="" />
                            </div>
                            <div>{"React JS"}</div>
                        </div>


                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/prisma.png"} width={24} alt="" />
                            </div>
                            <div>{"Prisma"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/tailwind.png"} width={24} alt="" />
                            </div>
                            <div>{"Tailwind"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/node.png"} width={24} alt="" />
                            </div>
                            <div>{"NodeJS"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/typescript.png"} width={10} alt="" />
                            </div>
                            <div>{"TypeScript"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/next.png"} width={10} alt="" />
                            </div>
                            <div>{"NextAuth"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/express.png"} width={24} alt="" />
                            </div>
                            <div>{"express"}</div>
                        </div>

                        <div className=' text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/mongodb.png"} width={24} alt="" />
                            </div>
                            <div>{"MongoDB"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/shadcn.png"} width={24} alt="" />
                            </div>
                            <div>{"Shadcn"}</div>
                        </div>


                    </div>
                </div>

                {/* project 4 */}
                <div className='border-slate-700  border w-[330px] min-h-[300px] h-[505px] m-3 p-1 hover:bg-slate-900 duration-300 transition-all cursor-pointer  ' >
                    <div className='text-[17px] text-slate-300 p-4 pb-2 text-center flex justify-center gap-2 ' >
                        {/* <span>Sages - (School Website for administation and faculty) </span><span><a target='blank' href="https://sagess.netlify.app/"><img className='pt-1' width={18} src="link.png" alt="" /></a></span> */}
                        <a target='blank' href="https://sagess.netlify.app/" className='flex flex-row'>
                            <span>
                                Sages - (School Website for administation and faculty)
                            </span>
                            <img className='w-6 h-6 pt-1' src="link.png" alt="" />
                        </a>

                    </div>
                    <hr className='w-[70%] mb-4 text-center m-auto text-slate-400 bg-slate-700  border-slate-600 ' />
                    <div className='w-[95%] object-cover h-[auto] m-auto  '  >
                        <img src="/sages.png" className='cursor-pointer opacity-75 hover:opacity-100 h-[10rem] object-contain transition-all duration-200 ' alt="" />
                    </div>

                    <div className='m-2 text-lg ml-4 text-slate-300 mt-8'>TECH STACK </div>

                    <div className='flex flex-wrap w-[400px]' >

                        <div className=' text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40 
                         border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 
                         transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/nextjs.png"} width={24} alt="" />
                            </div>
                            <div>{"Next JS"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/react.png"} width={24} alt="" />
                            </div>
                            <div>{"React JS"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/redux.jpg"} width={24} alt="" />
                            </div>
                            <div>{"Redux"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/prisma.png"} width={24} alt="" />
                            </div>
                            <div>{"Prisma"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/tailwind.png"} width={24} alt="" />
                            </div>
                            <div>{"Tailwind"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/node.png"} width={24} alt="" />
                            </div>
                            <div>{"NodeJS"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/typescript.png"} width={10} alt="" />
                            </div>
                            <div>{"TypeScript"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/express.png"} width={24} alt="" />
                            </div>
                            <div>{"express"}</div>
                        </div>

                        <div className=' text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/mongodb.png"} width={24} alt="" />
                            </div>
                            <div>{"MongoDB"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/shadcn.png"} width={24} alt="" />
                            </div>
                            <div>{"Shadcn"}</div>
                        </div>
                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/razorpay.png"} width={24} alt="" />
                            </div>
                            <div>{"Razorpay"}</div>
                        </div>

                    </div>

                </div>


            </div>

            <div className='flex flex-col justify-center m-auto md:flex-row' >
                {/* PROJECT 5 */}

                <div className='border-slate-700  border w-[330px] min-h-[300px] h-[505px] m-3 p-1 hover:bg-slate-900 duration-300 transition-all cursor-pointer  ' >
                    <div className='text-[17px] text-slate-300 p-4 pb-2 text-center flex justify-center gap-2 ' >
                        {/* <span>Sages - (School Website for administation and faculty) </span><span><a target='blank' href="https://sagess.netlify.app/"><img className='pt-1' width={18} src="link.png" alt="" /></a></span> */}
                        <a target='blank' href="https://github.com/kakashihatakesh6/shopify" className='flex flex-row'>
                            <span>
                                Shopify - (E-Commerce - Android App )
                            </span>
                            <img className='w-6 h-6 pt-1' src="link.png" alt="" />
                        </a>

                    </div>
                    <hr className='w-[70%] mb-4 text-center m-auto text-slate-400 bg-slate-700  border-slate-600 ' />
                    <div className='w-[95%] object-cover h-[auto] m-auto  '  >
                        <img src="/shopify/shopify-bg.png" className='cursor-pointer opacity-75 hover:opacity-100 h-[10rem] object-contain transition-all duration-200 ' alt="" />
                    </div>

                    <div className='m-2 text-lg ml-4 text-slate-300 mt-8'>TECH STACK </div>

                    <div className='flex flex-wrap w-[400px]' >

                        <div className=' text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40 
                         border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 
                         transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/nextjs.png"} width={24} alt="" />
                            </div>
                            <div>{"Next JS"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/react.png"} width={24} alt="" />
                            </div>
                            <div>{"React JS"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/redux.jpg"} width={24} alt="" />
                            </div>
                            <div>{"Redux"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/tailwind.png"} width={24} alt="" />
                            </div>
                            <div>{"Tailwind"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/node.png"} width={24} alt="" />
                            </div>
                            <div>{"NodeJS"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/express.png"} width={24} alt="" />
                            </div>
                            <div>{"express"}</div>
                        </div>

                        <div className=' text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/mongodb.png"} width={24} alt="" />
                            </div>
                            <div>{"MongoDB"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/razorpay.png"} width={24} alt="" />
                            </div>
                            <div>{"Razorpay"}</div>
                        </div>

                    </div>

                </div>

                {/* project 6 */}

                <div className='border-slate-700  border w-[330px] min-h-[300px] h-[505px] m-3 p-1 hover:bg-slate-900 duration-300 transition-all cursor-pointer  ' >
                    <div className='text-[17px] text-slate-300 p-4 pb-2 text-center flex justify-center gap-2 ' >
                        <a target='blank' href="https://github.com/kakashihatakesh6/Pay_Per_Parking" className='flex flex-row'>
                            <span>
                                Pay Per Parking - (Vehicle Parking Booking Application)
                            </span>
                            <img className='w-6 h-6 pt-1' src="link.png" alt="" />
                        </a>

                    </div>
                    <hr className='w-[70%] mb-4 text-center m-auto text-slate-400 bg-slate-700  border-slate-600 ' />
                    <div className='w-[95%] object-cover h-[auto] m-auto  '  >
                        <img src="/payperparking.png" className='cursor-pointer opacity-75 hover:opacity-100 h-[10rem] object-contain transition-all duration-200 ' alt="" />
                    </div>

                    <div className='m-2 text-lg ml-4 text-slate-300 mt-8'>TECH STACK </div>

                    <div className='flex flex-wrap w-[400px]' >

                        <div className=' text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40 
                         border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 
                         transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/nextjs.png"} width={24} alt="" />
                            </div>
                            <div>{"Kotlin"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/react.png"} width={24} alt="" />
                            </div>
                            <div>{"XML"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/redux.jpg"} width={24} alt="" />
                            </div>
                            <div>{"SDK"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/prisma.png"} width={24} alt="" />
                            </div>
                            <div>{"Gmap API"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/tailwind.png"} width={24} alt="" />
                            </div>
                            <div>{"XML"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/node.png"} width={24} alt="" />
                            </div>
                            <div>{"Firebase"}</div>
                        </div>

                        <div className='text-slate-300 cursor-pointer rounded-lg border-[0.5px] border-opacity-40  border-gray-400 w-[100px] flex justify-around gap-2 items-center m-1 flex-wrap hover:bg-slate-800 p-1 transition-all duration-200 ' >
                            <div className='rounded-md '>
                                <img src={"/razorpay.png"} width={24} alt="" />
                            </div>
                            <div>{"Razorpay"}</div>
                        </div>

                    </div>

                </div>


            </div>


        </div>
    )
}

export default Work