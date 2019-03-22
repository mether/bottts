import * as React from 'react'

export default class RoundFrame01 extends React.Component {
  static optionValue = 'RoundFrame01'

  render () {
    const pieceId = 'Eyes/Round-Frame-01'

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
              y='12'
              width='104'
              height='32'
              rx='16'/>
        <rect id='Eye'
              fill='#F4F4F4'
              x='24'
              y='22'
              width='10'
              height='12'
              rx='2'/>
        <rect id='Eye'
              fill='#F4F4F4'
              x='70'
              y='22'
              width='10'
              height='12'
              rx='2'/>
      </g>
    )
  }
}
