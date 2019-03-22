import * as React from 'react'

export default class Happy extends React.Component {
  static optionValue = 'Happy'

  render () {
    const pieceId = 'Eyes/Happy-😊'

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <path d='M18,19 L30,17'
              id='happy'
              stroke='#000000'
              strokeWidth='4'/>
        <path d='M20,31 C20,27.686 22.9098333,25 27,25 C30.0901667,25 33,27.686 33,31'
              id='happy'
              stroke='#000000'
              strokeWidth='4'/>
        <path d='M86,20 L74,17'
              id='happy'
              stroke='#000000'
              strokeWidth='4'/>
        <path d='M84,31 C84,27.686 81.0901667,25 78,25 C73.9098333,25 71,27.686 71,31'
              id='happy'
              stroke='#000000'
              strokeWidth='4'/>
      </g>
    )
  }
}
