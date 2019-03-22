import * as React from 'react'
import TopColor from '../color/TopColor'

export default class Lights extends React.Component {
  static optionValue = 'Lights'

  render () {
    const pieceId = 'Top/Lights'
    const pathName = `${pieceId}-path`
    const maskName = `${pieceId}-mask`

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <defs>
          <path
            d='M56,18 L56,5 C56,2.23857625 58.2385763,5.07265313e-16 61,0 L67,0 C69.7614237,-5.07265313e-16 72,2.23857625 72,5 L72,18 L78,18 C79.1045695,18 80,18.8954305 80,20 L80,30 L0,30 L0,20 C-1.3527075e-16,18.8954305 0.8954305,18 2,18 L8,18 L8,5 C8,2.23857625 10.2385763,5.07265313e-16 13,0 L19,0 C21.7614237,-5.07265313e-16 24,2.23857625 24,5 L24,18 L32,18 L32,5 C32,2.23857625 34.2385763,5.07265313e-16 37,0 L43,0 C45.7614237,-5.07265313e-16 48,2.23857625 48,5 L48,18 L56,18 Z'
            id={pathName}/>
        </defs>
        <g id='Bulbs'
           transform='translate(10.000000, 22.000000)'>
          <mask id={maskName}
                fill='white'>
            <use xlinkHref={`#${pathName}`}/>
          </mask>
          <use fill='#E1E6E8'
               xlinkHref={`#${pathName}`}/>
          <TopColor maskID={maskName}>
            <g transform='translate(-10.000000, -22.000000)'>
              <rect x='0'
                    y='0'
                    width='100'
                    height='52'/>
            </g>
          </TopColor>
          <rect id='Highlite'
                fillOpacity='0.6'
                fill='#FFFFFF'
                mask={`url(#${maskName})`}
                x='-10'
                y='-22'
                width='100'
                height='40'/>
          <rect id='Light'
                fillOpacity='0.6'
                fill='#FFFFFF'
                mask={`url(#${maskName})`}
                x='14'
                y='6'
                width='4'
                height='8'
                rx='2'/>
          <rect id='Light'
                fillOpacity='0.6'
                fill='#FFFFFF'
                mask={`url(#${maskName})`}
                x='38'
                y='6'
                width='4'
                height='8'
                rx='2'/>
          <rect id='Light'
                fillOpacity='0.6'
                fill='#FFFFFF'
                mask={`url(#${maskName})`}
                x='62'
                y='6'
                width='4'
                height='8'
                rx='2'/>
        </g>
      </g>
    )
  }
}
