import React from 'react'

function Post({img, title, description}) {
  return (
    <div className=' flex grid-cols-2 border-b border-gray-600 
    hover:scale-[101%] hover:opacity-75 cursor-pointer transition duration-100 ease-out'>
        <div className='flex text-gray-200 items-center  active:scale-[95%]'>
            <div className='p-2 '>
                <img src={img} className="h-[45px] w-[45px] rounded-lg"/>
            </div>
            <div className=' w-[200px]'>
                <p className='text-[13px] font-semibold'>{title}</p>
                <p className='text-[10px]'>{description}</p>
            </div> 
            
        </div>
       
        {/* <div className='flex items-center text-gray-300 border-l-2 border-gray-400'>
            <p>657</p>
        </div> */}
    </div>
  )
}

export default Post
