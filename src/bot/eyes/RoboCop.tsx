import * as React from 'react'

export default class RoboCop extends React.Component {
  static optionValue = 'RoboCop'

  render () {
    const pieceId = 'Eyes/RoboCop'
    const pathName = `${pieceId}-path`
    const maskName = `${pieceId}-mask`

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <rect id={pathName}
              x='7'
              y='16'
              width='91'
              height='16'
              rx='4'/>
        <mask id={maskName}
              fill='white'>
          <use xlinkHref={`#${pathName}`}/>
        </mask>
        <use id='Container'
             fillOpacity='0.8'
             fill='#000000'
             xlinkHref={`#${pathName}`}/>
        <polygon id='Reflection'
                 fillOpacity='0.8'
                 fill='#FFFFFF'
                 mask={`url(#${maskName})`}
                 points='76 7 94 7 82 37 64 37'/>
        <polygon id='Reflection'
                 fillOpacity='0.8'
                 fill='#FFFFFF'
                 mask={`url(#${maskName})`}
                 points='52 7 61 7 49 37 40 37'/>

      </g>
    )
  }
}
