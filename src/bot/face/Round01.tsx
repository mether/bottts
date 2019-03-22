import * as React from 'react'
import FaceColor from '../color/FaceColor'
import Texture from '../texture'

export default class Round01 extends React.Component {
  static optionValue = 'Round01'

  render () {
    const pieceId = 'Face/Round-01'
    const pathName = `${pieceId}-path`
    const maskName = `${pieceId}-mask`

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <path
          d='M66,0 C124.351567,0 130.000727,40.6854074 130,78 C129.999351,111.314593 104.534073,120 66,120 C28.5386545,120 2.20992466e-15,111.314593 0,78 C0,40.6854074 7.64843282,6.59631323e-15 66,0 Z'
          id={pathName}/>
        <mask id={maskName}
              fill='white'>
          <use xlinkHref={`#${pathName}`}/>
        </mask>
        <use id='Path-2'
             fillOpacity='0.8'
             fill='#000000'
             xlinkHref={`#${pathName}`}/>
        <FaceColor maskID={maskName}>
          <g transform='translate(-4.000000, -2.000000)'>
            <rect x='0'
                  y='0'
                  width='138'
                  height='124'/>
          </g>
        </FaceColor>
        <Texture maskID={maskName}/>
      </g>
    )
  }
}
