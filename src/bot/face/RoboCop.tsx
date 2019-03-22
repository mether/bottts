import * as React from 'react'
import FaceColor from '../color/FaceColor'
import Texture from '../texture'

export default class RoboCop extends React.Component {
  static optionValue = 'RoboCop'

  render () {
    const pieceId = 'Face/RoboCop'
    const pathName = `${pieceId}-path`
    const maskName = `${pieceId}-mask`

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <path
          d='M126,79.5857961 L126,104 C126,112.836556 118.836556,120 110,120 L20,120 C11.163444,120 4,112.836556 4,104 L4,79.5857961 L0,79.5857961 L1.10489633e-15,41.0221632 C-6.41976585e-16,26.7578634 1.48520978,21.5852836 4.27412326,16.3704687 C7.06303674,11.1556539 11.1556539,7.06303674 16.3704687,4.27412326 C21.5852836,1.48520978 26.7578634,-7.71967361e-14 41.0221632,-7.98170454e-14 L88.9778368,-7.65023564e-14 C103.242137,-7.91226658e-14 108.414716,1.48520978 113.629531,4.27412326 C118.844346,7.06303674 122.936963,11.1556539 125.725877,16.3704687 C128.51479,21.5852836 130,26.7578634 130,41.0221632 L130,79.5857961 L126,79.5857961 Z'
          id={pathName}/>
        <mask id={maskName}
              fill='white'>
          <use xlinkHref={`#${pathName}`}/>
        </mask>
        <use id='Dead-or-alive,'
             fill='#0076DE'
             xlinkHref={`#${pathName}`}/>
        <FaceColor maskID={maskName}>
          <g transform='translate(-2.000000, 0.000000)'>
            <rect x='0'
                  y='0'
                  width='134'
                  height='120'/>
          </g>
        </FaceColor>
        <rect id='Murphy'
              fillOpacity='0.8'
              fill='#000000'
              mask={`url(#${maskName})`}
              x='4'
              y='80'
              width='122'
              height='40'/>
        <Texture maskID={maskName}/>
      </g>
    )
  }
}
