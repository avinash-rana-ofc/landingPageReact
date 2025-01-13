import React from 'react'

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-40 px-20">
            {["DOE", "Directorate of Electricity","Power"].map((item, index) => {
                return (
                        <div className="masker" key={index}>
                            <h1 className="uppercase text-9xl leading-[6.5vw] font-['Test_Founders_Grotesk_X-Cond_SmBd']">{item}</h1>
                        </div>
                        );
                
            })
            }
            {/* <div className="masker">
                <h1 className="uppercase text-9xl leading-[4vw] font-['Test_Founders_Grotesk_X-Cond_SmBd']">DOE</h1>
            </div>
            <div className="masker">
                <h1 className="uppercase text-9xl leading-none font-['Test_Founders_Grotesk_X-Cond_SmBd']">Directorate of Electricity</h1>
            </div>
            <div className="masker">
                <h1 className="uppercase text-9xl leading-none font-['Test_Founders_Grotesk_X-Cond_SmBd']">Power</h1>
            </div> */}
        </div>
    </div>
  )
}

export default LandingPage
