import * as React from 'react'

export default class Bite extends React.Component {
  static optionValue = 'Bite'

  render () {
    const pieceId = 'Mouth/Bite'

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
              fillOpacity='0.6'
              fill='#000000'
              x='8'
              y='9'
              width='60'
              height='14'
              rx='2'/>
        <polygon id='Triangle-2'
                 fill='#E1E6E8'
                 transform='translate(20.000000, 13.000000) scale(1, -1) translate(-20.000000, -13.000000) '
                 points='20 9 26 17 14 17'/>
        <polygon id='Triangle-2'
                 fill='#E1E6E8'
                 transform='translate(32.000000, 13.000000) scale(1, -1) translate(-32.000000, -13.000000) '
                 points='32 9 38 17 26 17'/>
        <polygon id='Triangle-2'
                 fill='#E1E6E8'
                 transform='translate(44.000000, 13.000000) scale(1, -1) translate(-44.000000, -13.000000) '
                 points='44 9 50 17 38 17'/>
        <polygon id='Triangle-2'
                 fill='#E1E6E8'
                 transform='translate(56.000000, 13.000000) scale(1, -1) translate(-56.000000, -13.000000) '
                 points='56 9 62 17 50 17'/>
      </g>
    )
  }
}
