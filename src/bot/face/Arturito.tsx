import * as React from 'react'
import FaceColor from '../color/FaceColor'
import Texture from '../texture'

export default class Arturito extends React.Component {
  static optionValue = 'Arturito'

  render () {
    const pieceId = 'Face/Arturito-🌌'
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
            d='M60,0 L70,0 C103.137085,-6.08718376e-15 130,26.862915 130,60 L130,116 C130,118.209139 128.209139,120 126,120 L4,120 C1.790861,120 2.705415e-16,118.209139 0,116 L0,60 C-4.05812251e-15,26.862915 26.862915,6.08718376e-15 60,0 Z'
            id={pathName}/>
        </defs>
        <mask id={maskName}
              fill='white'>
          <use xlinkHref={`#${pathName}`}/>
        </mask>
        <use id='R2'
             fill='#E1E6E8'
             xlinkHref={`#${pathName}`}/>
        <FaceColor maskID={maskName}>
          <g transform='translate(-1.000000, -1.000000)'>
            <rect x='0'
                  y='0'
                  width='132'
                  height='122'/>
          </g>
        </FaceColor>
        <polygon id='Color-Bar'
                 fillOpacity='0.8'
                 fill='#0040AE'
                 mask={`url(#${maskName})`}
                 points='0 80 10 80 10 107 0 107'/>
        <polygon id='Color-Bar'
                 fillOpacity='0.8'
                 fill='#0040AE'
                 mask={`url(#${maskName})`}
                 points='0 111 130 111 130 116 0 116'/>
        <rect id='Color-Bar'
              fillOpacity='0.8'
              fill='#0040AE'
              mask={`url(#${maskName})`}
              x='121'
              y='80'
              width='9'
              height='27'/>
        <rect id='Color-Bar'
              fillOpacity='0.8'
              fill='#0040AE'
              mask={`url(#${maskName})`}
              x='7.3'
              y='8'
              width='54.9'
              height='16.1834862'/>
        <rect id='Color-Bar'
              fillOpacity='0.8'
              fill='#0040AE'
              mask={`url(#${maskName})`}
              x='65.8'
              y='8'
              width='54.9'
              height='16.1834862'/>
        <Texture maskID={maskName}/>
      </g>
    )
  }
}
