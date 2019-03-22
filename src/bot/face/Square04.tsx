import * as React from 'react'
import FaceColor from '../color/FaceColor'
import Texture from '../texture'

export default class Square04 extends React.Component {
  static optionValue = 'Square04'

  render () {
    const pieceId = 'Face/Square-04'
    const pathName = `${pieceId}-path-1`
    const maskName = `${pieceId}-mask-1`

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <path
          d='M0,102 L0,68.8517092 C8.61074282e-15,64.3169266 0.771119772,59.8151606 2.28038666,55.5389045 L19.7614455,12.0092379 C22.3014253,4.81262825 29.1035817,1.42108547e-14 36.7352715,1.42108547e-14 L93.2647285,0 C100.896418,0 107.698575,4.81262825 110.238555,12.0092379 L127.719613,55.5389045 C129.22888,59.8151606 130,64.3169266 130,68.8517092 L130,102 C130,111.941125 121.941125,120 112,120 L18,120 C8.0588745,120 -1.8876423e-14,111.941125 0,102 Z'
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
