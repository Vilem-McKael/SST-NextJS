'use client';

import useWindowSize from '@/utilities/useWindowSize';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { MdOutlinePiano } from "react-icons/md";
import { MdOutlineSpeaker } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { BiSolidPiano } from "react-icons/bi";

export default function Navbar() {

    const {width, height} = useWindowSize()

    // toggleSideBar() {

    // }

  return (
    <div className='h-25 flex justify-between items-end pb-2 px-2 border-b-white border-b bg-black w-full'>
        <Link href={'/#header'} className='flex flex-col'>
            <div className='text-6xl font-black italic'>SST</div>
            <div className='text-xs'>
                Synthesizer Systems Technologies, Inc.
            </div>
        </Link>
        
        {/* {
            width < 780 ?
            <div className='flex font-medium space-x-4'>
                <Link href={'/#instruments'} className='flex items-center px-2 py-1 rounded-lg border border-w hover:scale-105 duration-150'>
                    <MdOutlinePiano className='pr-1 h-6 w-6'/>
                    Instruments
                </Link>
                <Link href={'/#equipment'} className='flex items-center px-2 py-1 rounded-lg border border-w hover:scale-105 duration-150'>
                    <MdOutlineSpeaker className='pr-1 h-6 w-6'/>
                    Equipment
                </Link>
                <Link href={'/#contact'} className='flex items-center px-2 py-1 rounded-lg border border-w hover:scale-105 duration-150'>
                    <MdContacts className='pr-1 h-6 w-6'/>
                    Contact
                </Link>
            </div>
            :
            <div onClick={toggleSideBar}>
                <BiSolidPiano />
            </div>
        } */}
        
    </div>
  )
}
