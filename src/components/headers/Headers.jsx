import React from 'react'

const Headers = () => {
    return (
        <div className="py-20 md:py-28">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap xl:items-center -mx-4">
                    <div className="md:max-w-4xl mb-12 mx-auto text-center">
                        <h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter" data-config-id="auto-txt-2-1">Let's make PoW great again!</h1>
                        <p className="text-lg md:text-xl text-coolGray-500 font-medium" data-config-id="auto-txt-3-1">We're building a unique blockchain featuring practical Proof of Work (PoW), enhancing the original Nakamoto Consensus, and using a storage network as the computational powerhouse to offer users lower gas fees</p>
                    </div>
                    <div className="w-full px-4 mb-16 md:mb-0">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-auto py-1 md:py-0 md:mr-4"><a className="inline-block py-5 px-7 w-full text-base leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm" href="#" data-config-id="auto-txt-16-1">Try Our Testnet</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headers