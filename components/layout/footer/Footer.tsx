import { Router } from 'next/router';
import headersvg from './header.svg';
import headr from '/images/next.svg';

export default function Footer() {
    return (
         <div className='w-full bottom-0 items-center bg-footer-gray mt-[50px]'>
            <p className='text-white text-center text-sm p-3'>Strictly Confidential and cCopyright. Corporate DNA 2023 All rights reserved.</p>
         </div>
    )
  }
  