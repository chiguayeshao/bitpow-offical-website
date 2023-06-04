import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footers = () => {
    return (
        <footer className="bg-white text-center py-20">
            <div className="mb-4">
                <a href="/about" className="mx-3 text-lg">About</a>
                <a href="/blog" className="mx-3 text-lg">Blog</a>
                <a href="/partners" className="mx-3 text-lg">Partners</a>
            </div>
            <div className="mb-4 flex flex-row gap-10 justify-center">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faYoutube} />
            </div>
            <div>
                <p className="text-sm">© 2023 BitPoW</p>
            </div>
        </footer>
    )
}

export default Footers