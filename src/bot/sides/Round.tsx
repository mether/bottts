import * as React from 'react'
import SidesColor from '../color/SidesColor'

export default class Round extends React.Component {
  static optionValue = 'Round'

  render () {
    const pieceId = 'Sides/Round'
    const pathName = `${pieceId}-path`
    const maskName = `${pieceId}-mask`

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <path
          d='M152,61 C141.954305,61 132,50.9264069 132,39 C132,26.0735931 141.954305,16 152,16 C162.045695,16 168,26.0735931 168,39 C168,50.9264069 162.045695,61 152,61 Z M28,61 C17.954305,61 12,50.9264069 12,39 C12,26.0735931 17.954305,16 28,16 C38.045695,16 48,26.0735931 48,39 C48,50.9264069 38.045695,61 28,61 Z'
          id={pathName}/>
        <mask id={maskName}
              fill='white'>
          <use xlinkHref={`#${pathName}`}/>
        </mask>
        <use id='muffs'
             fill='#E1E6E8'
             xlinkHref={`#${pathName}`}/>
        <SidesColor maskID={maskName}>
          <rect x='0'
                y='0'
                width='180'
                height='76'/>
        </SidesColor>
        <rect id='Shady-Stuff'
              fillOpacity='0.2'
              fill='#000000'
              mask={`url(#${maskName})`}
              x='20'
              y='0'
              width='140'
              height='76'/>
      </g>
    )
  }
}
