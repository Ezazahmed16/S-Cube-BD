import React from 'react'
import { FaMapMarked } from 'react-icons/fa'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'

const HeaderNavbar = () => {
    return (
        <div className='overflow-hidden'>
            <div className="bg-gray-950 text-white p-2 block md:flex text-xs justify-between">
                <div className="flex gap-2 items-center justify-center">
                    <FaMapMarked className='w-6 h-6' />
                    <h1>188, Fakirapool (7th Floor),
                        Motijheel, Dhaka - 1000</h1>
                </div>
                <div className="flex justify-between md:justify-end gap-5">
                    <div className="flex gap-2 items-center">
                        <BiSolidPhoneCall className='w-6 h-6' />
                        <h1>+880 1959-783163</h1>
                    </div>
                    <div className="flex gap-2 items-center">
                        <MdEmail className='w-6 h-6' />
                        <h1>info@scubebd.com</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderNavbar