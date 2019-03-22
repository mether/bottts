import * as React from 'react'
import TopColor from '../color/TopColor'

export default class Antenna extends React.Component {
  static optionValue = 'Antenna'

  render () {
    const pieceId = 'Top/Antenna'
    const pathName = `${pieceId}-path`
    const maskName = `${pieceId}-mask`

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <path
          d='M10,31 L10,0 L14,0 L14,31 L22,31 C23.1045695,31 24,31.8954305 24,33 L24,47 L0,47 L0,33 C-1.3527075e-16,31.8954305 0.8954305,31 2,31 L10,31 Z'
          id={pathName}/>

        <g id='Antenna'
           transform='translate(38.000000, 5.000000)'>
          <mask id={maskName}
                fill='white'>
            <use xlinkHref={`#${pathName}`}/>
          </mask>
          <use fill='#E1E6E8'
               xlinkHref='#path-1'/>
          <TopColor maskID={maskName}>
            <g transform='translate(-38.000000, -5.000000)'>
              <rect x='0'
                    y='0'
                    width='100'
                    height='52'/>
            </g>
          </TopColor>
          <rect id='Lite'
                fillOpacity='0.2'
                fill='#FFFFFF'
                mask='url(#mask-2)'
                x='0'
                y='31'
                width='24'
                height='16'/>
        </g>
        <circle id='Beep-Boop'
                fill='#FFE65C'
                cx='50'
                cy='8'
                r='8'/>
        <circle id='Beep-Boop'
                fill='#FFFFFF'
                cx='53'
                cy='5'
                r='3'/>

      </g>
    )
  }
}
