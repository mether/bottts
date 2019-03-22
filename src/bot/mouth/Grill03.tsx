import * as React from 'react'

export default class Grill03 extends React.Component {
  static optionValue = 'Grill03'

  render () {
    const pieceId = 'Mouth/Grill-03'

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <rect id='Kiss-The-Robot-Beep-Boop'
              fillOpacity='0.2'
              fill='#000000'
              x='4'
              y='5'
              width='68'
              height='22'
              rx='5'/>
        <rect id='Kiss-The-Robot-Beep-Boop'
              fill='#FFFFFF'
              x='8'
              y='9'
              width='60'
              height='14'
              rx='2'/>
        <rect id='Bender-Teeth'
              fillOpacity='0.1'
              fill='#000000'
              x='18'
              y='9'
              width='4'
              height='14'/>
        <rect id='Bender-Teeth'
              fillOpacity='0.1'
              fill='#000000'
              x='42'
              y='9'
              width='4'
              height='14'/>
        <rect id='Bender-Teeth'
              fillOpacity='0.1'
              fill='#000000'
              x='30'
              y='9'
              width='4'
              height='14'/>
        <rect id='Bender-Teeth'
              fillOpacity='0.1'
              fill='#000000'
              x='54'
              y='9'
              width='4'
              height='14'/>
      </g>
    )
  }
}
