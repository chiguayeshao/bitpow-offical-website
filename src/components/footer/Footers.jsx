import React from 'react'

const Footers = () => {
    return (
        <footer className="bg-white text-center py-20">
            <div className="mb-4">
                <a href="/about" className="mx-3 text-lg">About</a>
                <a href="/blog" className="mx-3 text-lg">Blog</a>
                <a href="/partners" className="mx-3 text-lg">Partners</a>
            </div>
            <div className="mb-4 flex flex-row justify-center">
                <a href="https://twitter.com/yourhandle" className="mx-3 text-sm">
                    <img src="/path/to/twitter/logo" alt="Twitter Logo" />
                </a>
                <a href="https://github.com/yourhandle" className="mx-3 text-sm">
                    <img src="/path/to/github/logo" alt="GitHub Logo" />
                </a>
                <a href="https://youtube.com/yourhandle" className="mx-3 text-sm">
                    <img src="/path/to/youtube/logo" alt="Youtube Logo" />
                </a>
            </div>
            <div>
                <p className="text-sm">© 2023 Your Company, All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footers