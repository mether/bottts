import * as React from 'react'

export default class Smile01 extends React.Component {
  static optionValue = 'Smile01'

  render () {
    const pieceId = 'Mouth/Smile01'

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <path
          d='M27.0493387,8.44149809 C26.8055061,7.36417761 27.4811814,6.29317138 28.5585019,6.04933872 C29.6358224,5.80550606 30.7068286,6.48118143 30.9506613,7.55850191 C31.7200297,10.9577855 34.4016537,13 38,13 C41.5983463,13 44.2799703,10.9577855 45.0493387,7.55850191 C45.2931714,6.48118143 46.3641776,5.80550606 47.4414981,6.04933872 C48.5188186,6.29317138 49.1944939,7.36417761 48.9506613,8.44149809 C47.759948,13.7024002 43.4298825,17 38,17 C32.5701175,17 28.240052,13.7024002 27.0493387,8.44149809 Z'
          id='Thank-You-For-Your-Cooperation'
          fill='#000000'
          fillRule='nonzero'/>
      </g>
    )
  }
}
