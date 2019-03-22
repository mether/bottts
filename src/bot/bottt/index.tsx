import * as React from 'react'
import Face from '../face'
import Mouth from '../mouth'
import Sides from '../sides'
import Top from '../top'
import Eyes from './../eyes'

export default class Bottt extends React.Component {
  render () {
    return (
      <g id='Bottt/Head'
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'
         transform='translate(30.000000, 33.000000)'>
        <g id='Sides'
           width='180px'
           height='76px'
           transform='translate(0.000000, 66.000000)'>
          <Sides/>
        </g>
        <g id='Top'
           transform='translate(41.000000, 0.000000)'
           width='100px'
           height='52px'>
          <Top/>
        </g>
        <g id='Face'
           transform='translate(25.000000, 44.000000)'
           width='130px'
           height='120px'>
          <Face/>
        </g>
        <g id='Mouth'
           transform='translate(52.000000, 124.000000)'
           width='76px'
           height='32px'>
          <Mouth/>
        </g>
        <g id='Eyes'
           transform='translate(38.000000, 76.000000)'
           width='104px'
           height='48px'>
          <Eyes/>
        </g>
      </g>
    )
  }
}
