import * as React from 'react'
import TopColor from '../color/TopColor'

export default class Radar extends React.Component {
  static optionValue = 'Radar'

  render () {
    const pieceId = 'Top/Radar'
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
            d='M47.9411255,31.5810711 C46.4603547,30.7251846 45.0658376,29.6638174 43.7989899,28.3969696 C35.988504,20.5864838 35.988504,7.92318421 43.7989899,0.112698372 L57.2340187,13.5477272 L63.6870876,7.09465837 C62.7811534,5.56075283 62.987153,3.55195222 64.3050865,2.23401872 C65.8671837,0.671921549 68.3998436,0.671921549 69.9619408,2.23401872 C71.5240379,3.79611588 71.5240379,6.3287758 69.9619408,7.89087297 C68.6440073,9.20880647 66.6352067,9.41480612 65.1013011,8.50887193 L58.6482323,14.9619408 L72.0832611,28.3969696 C66.6329618,33.8472689 58.8195836,35.4942501 51.9411255,33.3379131 L51.9411255,52.1126984 L47.9411255,52.1126984 L47.9411255,31.5810711 Z'
            id={pathName}/>
        </defs>
        <mask id={maskName}
              fill='white'>
          <use xlinkHref={`#${pathName}`}/>
        </mask>
        <use id='Radar'
             fill='#E1E6E8'
             xlinkHref={`#${pathName}`}/>
        <TopColor maskID={maskName}>
          <rect x='0'
                y='0'
                width='100'
                height='52'/>
        </TopColor>
        <path
          d='M43.7989899,0.112698372 C35.988504,7.92318421 35.988504,20.5864838 43.7989899,28.3969696 C51.6094757,36.2074555 64.2727753,36.2074555 72.0832611,28.3969696'
          id='Dish'
          fillOpacity='0.2'
          fill='#FFFFFF'
          mask={`url(#${maskName})`}/>
        <circle id='Searching...'
                fillOpacity='0.8'
                fill='#FFFFFF'
                mask={`url(#${maskName})`}
                cx='67.1335137'
                cy='5.06244584'
                r='4'/>
      </g>
    )
  }
}
