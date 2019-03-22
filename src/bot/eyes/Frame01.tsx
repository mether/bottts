import * as React from 'react'

export default class Frame01 extends React.Component {
  static optionValue = 'Frame01'

  render () {
    const pieceId = 'Eyes/Frame-1'

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <rect id='Container'
              fillOpacity='0.8'
              fill='#000000'
              x='0'
              y='4'
              width='104'
              height='42'
              rx='4'/>
        <rect id='Eye'
              fill='#8BDDFF'
              x='28'
              y='25'
              width='10'
              height='11'
              rx='2'/>
        <rect id='Eye'
              fill='#8BDDFF'
              x='66'
              y='25'
              width='10'
              height='11'
              rx='2'/>
        <polygon id='Reflection'
                 fillOpacity='0.4'
                 fill='#FFFFFF'
                 points='21 4 29 4 12 46 4 46'/>
      </g>
    )
  }
}
