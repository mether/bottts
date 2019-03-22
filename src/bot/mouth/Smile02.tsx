import * as React from 'react'

export default class Smile02 extends React.Component {
  static optionValue = 'Smile02'

  render () {
    const pieceId = 'Mouth/Smile02'
    const pathName = `${pieceId}-path`
    const maskName = `${pieceId}-mask`

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <path
          d='M18,10.2222222 C18,21.7845222 24.4740576,28 38,28 C51.5182433,28 58,21.6614595 58,10.2222222 C58,9.49621891 57.1738581,8 55,8 C39.2707408,8 29.1916598,8 21,8 C18.9490269,8 18,9.38479408 18,10.2222222 Z'
          id={pathName}/>
        <mask id={maskName}
              fill='white'>
          <use xlinkHref={`#${pathName}`}/>
        </mask>
        <use id='Mouth'
             fillOpacity='0.8'
             fill='#000000'
             xlinkHref={`#${pathName}`}/>
        <rect id='Teeth'
              fill='#FFFFFF'
              mask={`url(#${maskName})`}
              x='30'
              y='2'
              width='16'
              height='14'
              rx='2'/>

      </g>
    )
  }
}
