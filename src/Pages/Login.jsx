import React from 'react';
import { Link } from 'react-router-dom';
import Headers from './Headers';

function Login() {

    return (
        <React.Fragment>
            <Headers />
            <div className="bg-gray-200">
                <div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden h-height-important"></div>
                <div className="relative   min-h-screen  sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl">
                    <div className="flex-col flex  self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-index-margin-top z-10 back-margin-left">
                        <div className="self-start hidden lg:flex flex-col  text-gray-300 ">
                            <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
                            <p className="pr-3 text-sm opacity-75">Lorem ipsum is placeholder text commonly used in the graphic, print,
                                and publishing industries for previewing layouts and visual mockups</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center self-center z-10">
                    <div className="margin-top-postion p-12 bg-white mx-auto rounded-3xl w-96 ">
                        <div className="mb-7">
                            <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                            <p className="text-gray-400">
                                Don'thave an account? 
                                <Link to="/register" className="text-sm text-purple-700 hover:text-purple-700">Sign Up</Link>
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="">
                                <input className=" w-full text-sm  px-4 py-3 bg-gray-200 text-gray-800 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400 mt-2 mb-2" type="email" placeholder="Email" />
                                <div className="relative" x-data="{ show: true }">
                                    <input placeholder="Password" type="show ? 'password' : 'text'" className="text-sm text-gray-800 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400 mt-2 mb-2" />
                                    <div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5"></div>
                                </div>
                                <div class="g-recaptcha pt-1 pb-1" data-sitekey="6LfrFKQUAAAAAMzFobDZ7ZWy982lDxeps8cd1I2i"></div>
                                <div className="flex items-center justify-between mt-2 mb-2">
                                    <div className="text-sm ml-auto">
                                        <Link to="#" className="text-purple-700 hover:text-purple-600 text-color">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-2 mb-2">
                                    <button type="submit" className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500 button-bg">
                                        Sign in
                                    </button>
                                </div>
                                <div className="flex items-center justify-center space-x-2 my-3">
                                    <span className="h-px w-16 bg-gray-100"></span>
                                    <span className="text-gray-300 font-normal">or</span>
                                    <span className="h-px w-16 bg-gray-100"></span>
                                </div>
                                <div className="flex justify-center gap-5 w-full">
						            <button type="submit" className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500">
                                        <svg  className="w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/><path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/><path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/><path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/></svg>
                                        <span>Google</span>
                                    </button>
                                    <button type="submit" className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500 px-">
                                        <svg fill="#0064f7" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="23px" height="23px">    <path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"/></svg>
                                        <span>Facebook</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <svg className="absolute bottom-0 left-0 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
        </React.Fragment>
    )
}

export default Login;