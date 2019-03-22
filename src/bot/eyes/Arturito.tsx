import * as React from 'react'

export default class Arturito extends React.Component {
  static optionValue = 'Arturito'

  render () {
    const pieceId = 'Eyes/Arturito'

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <g id='Radar-Eye'
           transform='translate(23.000000, 5.000000)'>
          <path d='M50,0 L56,0 L58,32 L50,32 L50,38 L0,38 L9,0 L50,0 Z'
                id='R2-Eye'
                fillOpacity='0.8'
                fill='#0040AE'/>
          <circle id='Outline'
                  fillOpacity='0.2'
                  fill='#000000'
                  cx='26'
                  cy='16'
                  r='15'/>
          <circle id='Eye'
                  fillOpacity='0.6'
                  fill='#000000'
                  cx='26'
                  cy='16'
                  r='12'/>
          <circle id='Shine'
                  fill='#FFFFFF'
                  cx='31'
                  cy='9'
                  r='2'/>
        </g>
      </g>
    )
  }
}
