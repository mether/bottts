import * as React from 'react'
import TopColor from '../color/TopColor'

export default class AntennaCrooked extends React.Component {
  static optionValue = 'AntennaCrooked'

  render () {
    const pieceId = 'Top/AntennaCrooked'
    const pathName = `${pieceId}-path`
    const maskName = `${pieceId}-mask`

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <path
          d='M15.5683097,27 L24,27 L24,40 L7.10542736e-15,40 L7.10542736e-15,27 L12.0880581,27 L14.1789906,22.5630665 L8.12882501,12.1305168 L11.3538641,0.294936464 L14.2483322,1.08364073 L11.352836,11.7098307 L17.5437409,22.3850631 L15.5683097,27 Z'
          id={pathName}/>
        <g id='Antenna'
           transform='translate(38.000000, 12.000000)'>
          <mask id={maskName}
                fill='white'>
            <use xlinkHref={`#${pathName}`}/>
          </mask>
          <use fill='#E6E6E6'
               fillRule='nonzero'
               xlinkHref={`#${pathName}`}/>
          <TopColor maskID={maskName}>
            <g transform='translate(-38.000000, -12.000000)'>
              <rect x='0'
                    y='0'
                    width='100'
                    height='52'/>
            </g>
          </TopColor>
          <rect id='Lite'
                fillOpacity='0.2'
                fill='#FFFFFF'
                mask={`url(#${maskName})`}
                x='0'
                y='27'
                width='24'
                height='13'/>
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
