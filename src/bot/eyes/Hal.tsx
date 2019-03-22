import * as React from 'react'

export default class Hal extends React.Component {
  static optionValue = 'Hal'

  render () {
    const pieceId = 'Eyes/Hal'

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <circle id='9k'
                fillOpacity='0.4'
                fill='#FFFFFF'
                cx='52'
                cy='24'
                r='24'/>
        <circle id='Hal'
                fillOpacity='0.8'
                fill='#000000'
                cx='52'
                cy='24'
                r='20'/>
        <path
          d='M65.4099666,15.2688976 C64.255446,13.4993048 62.7601287,11.9723152 61.0171519,10.7810659 M56.6467057,8.68518644 C55.1761516,8.23958978 53.6160554,8 52,8 C49.9125219,8 47.9184128,8.3997603 46.0900522,9.12690144 M41.0773564,12.308221 C39.5172104,13.7663492 38.2491513,15.5330907 37.37049,17.5111349'
          id='Bright'
          strokeOpacity='0.9'
          stroke='#FFFFFF'
          strokeWidth='2'
          strokeLinecap='round'/>
        <circle id='Dave'
                fill='#C6080C'
                cx='52'
                cy='24'
                r='10'/>
        <circle id="I-can't-do-that" fill='#EE9337'
                cx='52'
                cy='24'
                r='4'/>
        <circle id="I'm-afraid" fill='#F5F94F'
                cx='52'
                cy='24'
                r='1'/>
      </g>
    )
  }
}
