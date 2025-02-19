import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-40 px-20">
            {["DOE", "Directorate of Electricity","Power"].map((item, index) => {
                return (
                        <div className="masker" key={index}>
                            <div className="w-fit flex items-end overflow-hidden" >
                                {index === 1 && (
                                    <div className='mr-[1vw] w-[7vw] mb-[.2vw]  rounded-md h-[4.8vw] -top-[.42vw] relative  bg-green-500'></div>
                                    )}
                                    <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[7.2vw] leading-[.75] font-['Founders_Grotesk_X-Condensed'] font-bold">
                                        {item}
                                    </h1>
                            </div>
                        </div>

                        );
                    })
            }
            
        </div>
        <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20">
            {["For citizen and officials use only", "Test"].map((list, index) => {
                return <p key={index} className='text-md font-light tracking-tight leading-none'>{list}</p>
            })
            }
            <div className="start flex items-center gap-5">
                <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md rounded-full uppercase" >Apply</div>
                <div className="w-10 h-10 border-[2px] flex items-center justify-center border-zinc-500 rounded-full">
                    <span className='rotate-[45deg]'>
                        <FaArrowUp />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
