import * as React from 'react'

export default class RoundFrame02 extends React.Component {
  static optionValue = 'RoundFrame02'

  render () {
    const pieceId = 'Eyes/Round-Frame-02'

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
              y='11'
              width='104'
              height='34'
              rx='17'/>
        <circle id='Cornea'
                fill='#F1EEDA'
                cx='29'
                cy='28'
                r='13'/>
        <circle id='Cornea'
                fill='#F1EEDA'
                cx='75'
                cy='28'
                r='13'/>
        <rect id='Iris'
              fillOpacity='0.8'
              fill='#000000'
              x='24'
              y='23'
              width='10'
              height='10'
              rx='2'/>
        <rect id='Iris'
              fillOpacity='0.8'
              fill='#000000'
              x='70'
              y='23'
              width='10'
              height='10'
              rx='2'/>
      </g>
    )
  }
}
