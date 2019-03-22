import * as React from 'react'

export default class Bulging extends React.Component {
  static optionValue = 'Bulging'

  render () {
    const pieceId = 'Eyes/Bulging-😳'

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <circle id='Container'
                fillOpacity='0.2'
                fill='#000000'
                cx='28'
                cy='24'
                r='18'/>
        <circle id='Container'
                fillOpacity='0.2'
                fill='#000000'
                cx='74'
                cy='24'
                r='18'/>
        <circle id='Cornea'
                fill='#F1EEDA'
                cx='28'
                cy='24'
                r='15'/>
        <circle id='Cornea'
                fill='#F1EEDA'
                cx='74'
                cy='24'
                r='15'/>
        <rect id='Iris'
              fillOpacity='0.8'
              fill='#000000'
              x='26'
              y='15'
              width='10'
              height='10'
              rx='2'/>
        <rect id='Iris'
              fillOpacity='0.8'
              fill='#000000'
              x='74'
              y='15'
              width='10'
              height='10'
              rx='2'/>
      </g>
    )
  }
}
