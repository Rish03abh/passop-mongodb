import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800   text-white flex flex-col justify-center items-center w-full'>
         <div className="logo font-bold  text-white text-2xl">
          <span className="text-green-600 font-bold ">&lt;</span>
          Pass
          <span className="text-green-600 font-bold ">OP/&gt;</span>
        </div>
        <div className='font-thin '>
            Copyright &copy; 2025 Rishabh Kanungo. All Rights Reserved.
        </div>
       
    </div>
  )
}

export default Footer