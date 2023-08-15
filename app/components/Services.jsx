import { Divider } from '@nextui-org/react'
import React from 'react'

export default function Services() {
  return (
    
    <section className='bg-[#F0F0F0] py-2 lg:py-[100px]'>
        <div className="container mx-auto">
            <div>
            <div className="pb-2">
              <p className="leading-snug tracking-[6.60px] text-sm text-light-salmon-pink font-oswald">
                What I do
              </p>
            </div>
            <div className="pb-4">
              <p className="text-black text-3xl lg:text-[45px] font-normal leading-snug tracking-[3px] font-oswald">
                MAKEUP SERVICES
              </p>
            </div>
            <div className="pb-6">
              <Divider className=" bg-light-salmon-pink w-[85px] " />
            </div>
            </div>
        </div>
    </section>
  )
}
