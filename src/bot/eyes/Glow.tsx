import * as React from 'react'

export default class Glow extends React.Component {
  static optionValue = 'Glow'

  render () {
    const pieceId = 'Eyes/Glow'

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <circle id='Eye'
                fillOpacity='0.1'
                fill='#FFFFFF'
                cx='21'
                cy='30'
                r='15'/>
        <circle id='Eye'
                fillOpacity='0.1'
                fill='#FFFFFF'
                cx='83'
                cy='30'
                r='15'/>
        <circle id='Eye'
                fillOpacity='0.1'
                fill='#FFFFFF'
                cx='21'
                cy='30'
                r='12'/>
        <circle id='Eye'
                fillOpacity='0.1'
                fill='#FFFFFF'
                cx='83'
                cy='30'
                r='12'/>
        <circle id='Eye'
                fillOpacity='0.8'
                fill='#FFFFFF'
                cx='21'
                cy='30'
                r='6'/>
        <circle id='Eye'
                fillOpacity='0.8'
                fill='#FFFFFF'
                cx='83'
                cy='30'
                r='6'/>
        <circle id='Eye'
                fillOpacity='0.8'
                fill='#FFFFFF'
                cx='21'
                cy='30'
                r='3'/>
        <circle id='Eye'
                fillOpacity='0.8'
                fill='#FFFFFF'
                cx='83'
                cy='30'
                r='3'/>
      </g>
    )
  }
}
