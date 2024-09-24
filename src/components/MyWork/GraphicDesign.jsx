import React from 'react'
import Design1 from "./GraphicDesigns/Design1.svg"
import Design2 from "./GraphicDesigns/Design2.svg"
import Design3 from "./GraphicDesigns/Design3.svg"
import Design4 from "./GraphicDesigns/Design4.svg"
import Design5 from "./GraphicDesigns/Design5.svg"
import Design6 from "./GraphicDesigns/Design6.svg"
import Design7 from "./GraphicDesigns/Design7.svg"
import Design8 from "./GraphicDesigns/Design8.svg"
import Design9 from "./GraphicDesigns/Design9.svg"
import Design10 from "./GraphicDesigns/Design10.svg"
import Design11 from "./GraphicDesigns/Design11.svg"
import Design12 from "./GraphicDesigns/Design12.svg"
import Design13 from "./GraphicDesigns/Design13.svg"
import Design14 from "./GraphicDesigns/Design14.svg"
import Design15 from "./GraphicDesigns/Design15.svg"
import Design21 from "./GraphicDesigns/Design21.svg"
import Design22 from "./GraphicDesigns/Design22.svg"
import Design23 from "./GraphicDesigns/Design23.svg"
import Design24 from "./GraphicDesigns/Design24.svg"
import Design25 from "./GraphicDesigns/Design25.svg"
import Design26 from "./GraphicDesigns/Design26.svg"
import Design27 from "./GraphicDesigns/Design27.svg"
import Design28 from "./GraphicDesigns/Design28.svg"


function GraphicDesign() {
  const grid6x6 = [Design1, Design2, Design3, Design4, Design5, Design6, Design7, Design8, Design9, Design10, Design11, Design12, Design13, Design14, Design15]
  const grid2x2 = [Design21, Design22, Design23, Design24, Design25, Design26, Design27, Design28]
  return (
    <div className='bruno-ace my-12 md:px-12'>
      <div className="grid md:gap-12 gap-y-10 md:grid-cols-3">
        {grid6x6.map((design)=>{
          return <img src={design} alt="" />
        })}
      </div>
      <div className="grid md:gap-12 gap-y-10 md:grid-cols-2">
        {grid2x2.map((design)=>{
          return <img src={design} alt="" />
        })}
      </div>
    </div>
  )
}

export default GraphicDesign