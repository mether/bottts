import * as React from 'react'
import FaceColor from '../color/FaceColor'
import Texture from '../texture'

export default class Square02 extends React.Component {
  static optionValue = 'Square02'

  render () {
    const pieceId = 'Face/Square-02'
    const pathName = `${pieceId}-path-1`
    const maskName = `${pieceId}-mask-1`

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <path
          d='M12,0 L118,0 C124.627417,-1.21743675e-15 130,5.372583 130,12 L130,82 C130,102.98682 112.98682,120 92,120 L38,120 C17.0131795,120 2.57014425e-15,102.98682 0,82 L0,12 C-8.11624501e-16,5.372583 5.372583,1.21743675e-15 12,0 Z'
          id={pathName}/>
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
