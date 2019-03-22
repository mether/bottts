import * as React from 'react'
import FaceColor from '../color/FaceColor'
import Texture from '../texture'

export default class Square01 extends React.Component {
  static optionValue = 'Square01'

  render () {
    const pieceId = 'Face/Square-01'
    const pathName = `${pieceId}-path-1`
    const maskName = `${pieceId}-mask-1`

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <rect id={pathName}
              x='0'
              y='0'
              width='130'
              height='120'
              rx='18'/>
        <mask id={maskName}
              fill='white'>
          <use xlinkHref={`#${pathName}`}/>
        </mask>
        <use id='Shape'
             fill='#0076DE'
             xlinkHref={`#${pathName}`}/>

        <FaceColor maskID={maskName}>
          <g transform='translate(-2.000000, -2.000000)'>
            <rect x='0'
                  y='0'
                  width='134'
                  height='124'/>
          </g>
        </FaceColor>
        <Texture maskID={maskName}/>
      </g>
    )
  }
}
