import * as React from 'react'

export default class Grill01 extends React.Component {
  static optionValue = 'Grill01'

  render () {
    const pieceId = 'Mouth/Grill01'

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <g id='Grill' transform='translate(12.000000, 12.000000)' fill='#000000'>
          <rect x='0' y='0' width='4' height='8' rx='2'/>
          <rect x='24' y='0' width='4' height='8' rx='2'/>
          <rect x='12' y='0' width='4' height='8' rx='2'/>
          <rect x='36' y='0' width='4' height='8' rx='2'/>
          <rect x='48' y='0' width='4' height='8' rx='2'/>
        </g>
      </g>
    )
  }
}
