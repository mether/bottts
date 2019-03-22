import * as React from 'react'

export default class Grill02 extends React.Component {
  static optionValue = 'Grill02'

  render () {
    const pieceId = 'Mouth/Grill02'

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <g id='Grill'
           transform='translate(14.000000, 10.000000)'
           fill='#000000'>
          <rect id='Grill-Grin'
                x='14'
                y='0'
                width='6'
                height='14'
                rx='2'/>
          <rect id='Grill-Grin'
                x='0'
                y='0'
                width='6'
                height='14'
                rx='2'/>
          <rect id='Grill-Grin'
                x='28'
                y='0'
                width='6'
                height='14'
                rx='2'/>
          <rect id='Grill-Grin'
                x='42'
                y='0'
                width='6'
                height='14'
                rx='2'/>
        </g>
      </g>
    )
  }
}
