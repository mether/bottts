import * as React from 'react'

export default class Arturito extends React.Component {
  static optionValue = 'Arturito'

  render () {
    const pieceId = 'Mouth/Arturito'

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <rect id='Color-Bar'
              fillOpacity='0.8'
              fill='#0040AE'
              x='0'
              y='0'
              width='8'
              height='27'/>
        <g id='Processor-Status-Indicator'
           transform='translate(12.000000, 0.000000)'>
          <rect id='Processor-container'
                fillOpacity='0.8'
                fill='#0040AE'
                x='0'
                y='0'
                width='36'
                height='27'/>
          <circle id='Light'
                  fillOpacity='0.6'
                  fill='#FFFFFF'
                  cx='18'
                  cy='14'
                  r='8'/>
        </g>
        <g id='Holographic-Projector'
           transform='translate(52.000000, 2.000000)'
           fill='#000000'
           fillOpacity='0.4'>
          <circle id='R2'
                  cx='12'
                  cy='12'
                  r='12'/>
          <circle id='R2'
                  cx='12'
                  cy='12'
                  r='8.16'/>
        </g>
      </g>
    )
  }
}
