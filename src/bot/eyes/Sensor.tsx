import * as React from 'react'

export default class Sensor extends React.Component {
  static optionValue = 'Sensor'

  render () {
    const pieceId = 'Eyes/Sensor-📷'

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <g id='Radar-Eye'
           transform='translate(8.000000, 4.000000)'>
          <path
            d='M81.4160437,22 L39.9012495,22 C38.8978007,32.1066454 30.3706962,40 20,40 C8.954305,40 0,31.045695 0,20 C0,8.954305 8.954305,0 20,0 C30.3706962,0 38.8978007,7.89335461 39.9012495,18 L81.4160437,18 C82.1876003,16.2340952 83.949681,15 86,15 C88.7614237,15 91,17.2385763 91,20 C91,22.7614237 88.7614237,25 86,25 C83.949681,25 82.1876003,23.7659048 81.4160437,22 Z'
            id='Connector'
            fillOpacity='0.2'
            fill='#000000'/>
          <circle id='Shine'
                  fill='#FFFFFF'
                  cx='86'
                  cy='20'
                  r='2'/>
          <circle id='Eye'
                  fillOpacity='0.6'
                  fill='#000000'
                  cx='20'
                  cy='20'
                  r='16'/>
          <circle id='Shine'
                  fill='#FFFFFF'
                  cx='26'
                  cy='12'
                  r='3'/>
        </g>
      </g>
    )
  }
}
