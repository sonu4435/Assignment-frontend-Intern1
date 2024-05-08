import React from 'react'

const Footer = () => {
  return <div className="h-[15vh] w-full px-10 pb-5">
      <div className="bg-[#E8EEE7] h-full w-full rounded-3xl ">
        <div className="content h-full w-full flex items-center justify-between px-20">
          <h1 className='font-medium'>&copy; Talup 2023. All rights reserved</h1>
          <li className='list-none gap-5 flex text-lg font-normal'>
          <a href="!#">Terms & conditions</a>
          <a href="!#">Privecy Policy</a>
          </li>
        </div>
      </div>
    </div>;
}

export default Footer