import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounde-tl-3xl rounded-tr-3xl text-black'>
        <h1 className="font-['Neue_Montreal'] text-[2vw] leading-[3.5vw] tracking-tight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia adipisci error mollitia odit non! 
            Fugiat doloremque error repellat, 
            facilis sint architecto quia possimus numquam quibusdam atque praesentium omnis ullam adipisci!
        </h1>
        <div className="flex gap-5 w-full border-t-[1px] pt-10 mt-20 border-[#a1b562]">
          <div className="w-1/2">
          <h1 className="text-[3.5vw] px-2" >Our Approach</h1>
          <button className="flex uppercase gap-[1.5vw] items-center px-6 py-3 text-[1.5vw] bg-zinc-900 text-white rounded-full mt-[2vw]">Read more
            <div className="w-[1vw] h-[1vw] bg-zinc-100 rounded-full"></div>
          </button>
          </div>
        <div className="w-1/2 h-[70vh] rounded-2xl bg-[#91a744]"></div>
        </div>
      
    </div>
  )
}

export default About
