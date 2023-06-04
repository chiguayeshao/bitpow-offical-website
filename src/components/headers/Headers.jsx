import React from 'react'

const Headers = () => {
    return (
        <div className="py-20 md:py-28">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap xl:items-center -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                        <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-green-500 uppercase rounded-9xl" data-config-id="auto-txt-13-1">Header</span>
                        <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight" data-config-id="auto-txt-14-1">A small business is only as good as its tools.</h1>
                        <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium" data-config-id="auto-txt-15-1">We’re different. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.</p>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-auto py-1 md:py-0 md:mr-4"><a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm" href="#" data-config-id="auto-txt-16-1">Request a Demo</a></div>
                            <div className="w-full md:w-auto py-1 md:py-0"><a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm" href="#" data-config-id="auto-txt-17-1">Sign Up</a></div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <div className="relative mx-auto md:mr-0 max-w-max">
                            <img className="absolute z-10 -left-14 -top-12 w-28 md:w-auto" src="flex-ui-assets/elements/circle3-yellow.svg" alt="" data-config-id="auto-img-5-1" />
                            <img className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto" src="flex-ui-assets/elements/dots3-blue.svg" alt="" data-config-id="auto-img-6-1" />
                            <img className="relative rounded-7xl" src="flex-ui-assets/images/headers/header.jpg" alt="" data-config-id="auto-img-3-1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headers