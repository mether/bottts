import * as React from 'react'

export default class RoboCop extends React.Component {
  static optionValue = 'RoboCop'

  render () {
    const pieceId = 'Mouth/RoboCop'

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <path
          d='M38.000205,0 L76.000205,0 L76,21 C74.6982291,28.3333333 70.417878,32 63.1589466,32 C52.2706162,32 49.1374429,24.0000982 38.000205,24 C26.8628005,24 23.7296555,32 12.8412584,32 C5.58232699,32 1.30197584,28.3333333 0.000204963239,21 L-3.97903932e-13,0 L38.000205,0 Z'
          id='Drop-It!'
          fill='#F6E3D0'/>
        <path d='M30,8 C30,12.418278 33.581722,16 38,16 C42.418278,16 46,12.418278 46,8'
              id='Thank-You-For-Your-Cooperation'
              stroke='#A75548'
              strokeWidth='4'
              strokeLinecap='round'/>
      </g>
    )
  }
}
