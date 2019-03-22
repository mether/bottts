import * as React from 'react'

export default class Frame02 extends React.Component {
  static optionValue = 'Frame02'

  render () {
    const pieceId = 'Eyes/Frame-2'

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <rect id='Container'
              fillOpacity='0.8'
              fill='#000000'
              x='8'
              y='10'
              width='88'
              height='36'
              rx='4'/>
        <rect id='Eye'
              fill='#5EF2B8'
              x='28'
              y='21'
              width='10'
              height='17'
              rx='2'/>
        <rect id='Eye'
              fill='#5EF2B8'
              x='66'
              y='21'
              width='10'
              height='17'
              rx='2'/>
        <polygon id='Reflection'
                 fillOpacity='0.4'
                 fill='#FFFFFF'
                 points='83 10 88 10 76 46 71 46'/>
      </g>
    )
  }
}
