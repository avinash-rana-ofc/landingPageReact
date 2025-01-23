import React from 'react'

export default function AnimatedEye() {
  return (
    <div className='animatedEye w-full h-screen bg-red-900 overflow-hidden'>
        <div className="relative w-full bg-center bg-cover h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">\
            <div className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
                    <div className="w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900">
                        <div className="w-1/4 h-1/4 rounded-full bg-zinc-100"></div>
                    </div>
                </div>
                <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
                    <div className="w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900">
                        <div className="w-1/4 h-1/4 rounded-full bg-zinc-100"></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
