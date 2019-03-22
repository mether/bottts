import * as React from 'react'
import TopColor from '../color/TopColor'

export default class GlowingBulb02 extends React.Component {
  static optionValue = 'GlowingBulb02'

  render () {
    const pieceId = 'Top/GlowingBulb02'
    const pathName1 = `${pieceId}-path-1`
    const pathName2 = `${pieceId}-path-2`
    const pathName3 = `${pieceId}-path-3`
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
            d='M50,13 L50,13 C61.045695,13 70,21.954305 70,33 L70,44 L30,44 L30,33 C30,21.954305 38.954305,13 50,13 Z'
            id={pathName1}/>
          <filter x='-30.0%'
                  y='-38.7%'
                  width='160.0%'
                  height='177.4%'
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
          <filter x='-25.0%'
                  y='-32.3%'
                  width='150.0%'
                  height='164.5%'
                  filterUnits='objectBoundingBox'
                  id='filter-3'>
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
        <path
          d='M50,36 C52.209139,36 54,35.0279942 54,31.7142857 C54,28.4005772 52.209139,24 50,24 C47.790861,24 46,28.4005772 46,31.7142857 C46,35.0279942 47.790861,36 50,36 Z'
          id='Light'
          fillOpacity='0.6'
          fill='#FFFFFF'/>
        <path
          d='M50,15.5 C54.9315485,15.5 59.3660426,17.6281427 62.4352098,21.0161556 M64.8733745,24.5107242 C65.5630474,25.8293043 66.0825179,27.2509729 66.4026217,28.7465657'
          id='Reflection'
          stroke='#FFFFFF'
          strokeWidth='2'
          strokeLinecap='round'/>

        <mask id={maskName}
              fill='white'>
          <use xlinkHref={`#${pathName1}`}/>
        </mask>

        <TopColor maskID={maskName}>
          <rect id={pathName3}
                x='20'
                y='36'
                width='60'
                height='16'
                rx='1'/>
        </TopColor>

        <use id='Band'
             fill='#48494B'
             xlinkHref={`#${pathName2}`}/>
      </g>
    )
  }
}
