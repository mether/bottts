import * as React from 'react'

export default class Diagram extends React.Component {
  static optionValue = 'Diagram'

  render () {
    const pieceId = 'Mouth/Diagram'

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
              y='4'
              width='68'
              height='24'
              rx='5'/>
        <rect id='Kiss-The-Robot-Beep-Boop'
              fillOpacity='0.8'
              fill='#000000'
              x='8'
              y='8'
              width='60'
              height='16'
              rx='2'/>
        <polyline id='Path-3'
                  stroke='#4EFAC9'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  points='9 17 20 17 22 13 25 20 29 12 31 21 34 10 37 20 40 17 55 17 58 13 60 20 63 17 67 17'/>
      </g>
    )
  }
}
