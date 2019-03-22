import * as React from 'react'

export default class Square01 extends React.Component {
  static optionValue = 'Square01'

  render () {
    const pieceId = 'Mouth/Square-01'

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <rect id='Beep-Boop'
              fill='#000000'
              x='24'
              y='6'
              width='27'
              height='8'
              rx='4'/>
      </g>
    )
  }
}
