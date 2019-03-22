import * as React from 'react'

export default class GlowingBulb01 extends React.Component {
  static optionValue = 'GlowingBulb01'

  render () {
    const pieceId = 'Top/GlowingBulb01'
    const pathName1 = `${pieceId}-path-1`
    const pathName2 = `${pieceId}-path-2`
    const filterName1 = `${pieceId}-filter-1`
    const filterName2 = `${pieceId}-filter-2`
    const maskName = `${pieceId}-mask`

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <defs>
          <path
            d='M48,8 L52,8 C60.836556,8 68,15.163444 68,24 L68,32 C68,36.418278 64.418278,40 60,40 L40,40 C35.581722,40 32,36.418278 32,32 L32,24 C32,15.163444 39.163444,8 48,8 Z'
            id={pathName1}/>
          <filter x='-33.3%'
                  y='-37.5%'
                  width='166.7%'
                  height='175.0%'
                  filterUnits='objectBoundingBox'
                  id={filterName1}>
            <feOffset dx='0'
                      dy='0'
                      in='SourceAlpha'
                      result='shadowOffsetOuter1'/>
            <feGaussianBlur stdDeviation='4'
                            in='shadowOffsetOuter1'
                            result='shadowBlurOuter1'/>
            <feComposite in='shadowBlurOuter1'
                         in2='SourceAlpha'
                         operator='out'
                         result='shadowBlurOuter1'/>
            <feColorMatrix values='0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0'
                           type='matrix'
                           in='shadowBlurOuter1'/>
          </filter>
          <filter x='-27.8%'
                  y='-31.2%'
                  width='155.6%'
                  height='162.5%'
                  filterUnits='objectBoundingBox'
                  id={filterName2}>
            <feGaussianBlur stdDeviation='2'
                            in='SourceAlpha'
                            result='shadowBlurInner1'/>
            <feOffset dx='0'
                      dy='0'
                      in='shadowBlurInner1'
                      result='shadowOffsetInner1'/>
            <feComposite in='shadowOffsetInner1'
                         in2='SourceAlpha'
                         operator='arithmetic'
                         k2='-1'
                         k3='1'
                         result='shadowInnerInner1'/>
            <feColorMatrix values='0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0'
                           type='matrix'
                           in='shadowInnerInner1'/>
          </filter>
          <rect id={pathName2}
                x='22'
                y='40'
                width='56'
                height='12'
                rx='1'/>
        </defs>

        <g id='Bulb'>
          <use fill='black'
               fillOpacity='1'
               filter={`url(#${filterName1})`}
               xlinkHref={`#${pathName1}`}/>
          <use fillOpacity='0.300000012'
               fill='#FFFFFF'
               fillRule='evenodd'
               xlinkHref={`#${pathName1}`}/>
          <use fill='black'
               fillOpacity='1'
               filter={`url(#${filterName2})`}
               xlinkHref={`#${pathName1}`}/>
        </g>
        <path d='M49,11.5 C53.9315485,11.5 58.3660426,13.6281427 61.4352098,17.0161556'
              id='Reflection'
              stroke='#FFFFFF'
              strokeWidth='2'
              strokeLinecap='round'/>
        <path
          d='M49.8284271,29 L50.3137085,29 L59.3137085,20 L62.1421356,22.8284271 L52,32.9705627 L52,40 L48,40 L48,32.8284271 L38,22.8284271 L40.8284271,20 L49.8284271,29 Z'
          id='Why'
          fillOpacity='0.8'
          fill='#FFFFFF'/>
        <mask id={maskName}
              fill='white'>
          <use xlinkHref={`#${pathName2}`}/>
        </mask>
        <use id='Band'
             fill='#48494B'
             xlinkHref={`#${pathName2}`}/>
      </g>
    )
  }
}
