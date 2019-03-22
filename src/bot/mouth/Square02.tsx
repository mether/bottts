import * as React from 'react'

export default class Square02 extends React.Component {
  static optionValue = 'Square02'

  render () {
    const pieceId = 'Mouth/Square-02'

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <rect id='😐'
              fill='#000000'
              x='16'
              y='8'
              width='44'
              height='4'
              rx='2'/>
      </g>
    )
  }
}
