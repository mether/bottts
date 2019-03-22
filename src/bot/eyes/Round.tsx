import * as React from 'react'

export default class Round extends React.Component {
  static optionValue = 'Round'

  render () {
    const pieceId = 'Eyes/Round'

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <g id='Eye'
           transform='translate(18.000000, 24.000000)'
           fill='#FFFFFF'>
          <circle cx='6'
                  cy='6'
                  r='6'/>
          <circle cx='62'
                  cy='6'
                  r='6'/>
        </g>
      </g>
    )
  }
}
