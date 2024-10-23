import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div>
            You are lost
            <Link href={{ pathname: "/" }}>
                <button className="flex px-1 follow-btn">
                    Return to Home
                </button>
            </Link>

        </div>
    )
}

export default NotFound
