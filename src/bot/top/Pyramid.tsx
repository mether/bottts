import * as React from 'react'
import TopColor from '../color/TopColor'

export default class Pyramid extends React.Component {
  static optionValue = 'Pyramid'

  render () {
    const pieceId = 'Top/Pyramid'
    const pathName = `${pieceId}-path`
    const maskName = `${pieceId}-mask`

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <defs>
          <polygon id={pathName}
                   points='50 8 82 52 18 52'/>
        </defs>
        <mask id={maskName}
              fill='white'>
          <use xlinkHref={`#${pathName}`}/>
        </mask>
        <use id='Triangle'
             fill='#E1E6E8'
             xlinkHref={`#${pathName}`}/>
        <TopColor maskID={maskName}>
          <rect x='0'
                y='0'
                width='100'
                height='52'/>
        </TopColor>
        <rect id='Highlight'
              fillOpacity='0.8'
              fill='#FFFFFF'
              mask={`url(#${maskName})`}
              x='50'
              y='4'
              width='30'
              height='48'/>
      </g>
    )
  }
}
