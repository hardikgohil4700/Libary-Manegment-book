import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='py-5'>
                <Link
                    className="bg-black text-red-600 font-bold py-2 px-4 rounded-full shadow hover:bg-red-100 transition duration-300"
                    to="/addbooksdata"
                >
                    +AddBooks
                </Link>
            </div>
        </div>
    )
}

export default Home
