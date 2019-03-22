import * as React from 'react'
import SidesColor from '../color/SidesColor'

export default class Cables01 extends React.Component {
  static optionValue = 'Cables01'

  render () {
    const pieceId = 'Sides/Cables01'
    const pathName = `${pieceId}-path`
    const maskName = `${pieceId}-mask`

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <path
          d='M2,29 L14,29 C15.1045695,29 16,29.8954305 16,31 L16,49 C16,50.1045695 15.1045695,51 14,51 L2,51 C0.8954305,51 1.3527075e-16,50.1045695 0,49 L0,31 C-1.3527075e-16,29.8954305 0.8954305,29 2,29 Z M117,36 L136,36 C137.104569,36 138,36.8954305 138,38 L138,56 C138,57.1045695 137.104569,58 136,58 L117,58 C115.895431,58 115,57.1045695 115,56 L115,38 C115,36.8954305 115.895431,36 117,36 Z M117,0 L136,0 C137.104569,-2.02906125e-16 138,0.8954305 138,2 L138,16 C138,17.1045695 137.104569,18 136,18 L117,18 C115.895431,18 115,17.1045695 115,16 L115,2 C115,0.8954305 115.895431,2.02906125e-16 117,0 Z'
          id={pathName}/>
        <g id='Cables-Left'
           opacity='0.9'
           transform='translate(13.000000, 11.000000)'
           stroke='#2A3544'
           strokeWidth='6'>
          <path
            d='M25,1 C22.0459826,12.6966281 5.09589655,7.66625764 1.63133076,19.0090388 C-1.83323502,30.35182 9.65649568,39 19.1552405,39'
            id='Cable'/>
        </g>
        <g id='Cables-Right'
           opacity='0.9'
           transform='translate(150.000000, 19.000000)'
           stroke='#2A3544'
           strokeWidth='4'>
          <path
            d='M0,36 C8.39445109,39.4863785 20.1016531,28.4063428 16,19.5 C11.8983469,10.5936572 0,12.8056069 0,0.195051106'
            id='Cable'/>
        </g>
        <g id='Connectors'
           transform='translate(21.000000, 6.000000)'>
          <mask id={maskName}
                fill='white'>
            <use xlinkHref={`#${pathName}`}/>
          </mask>
          <use fill='#273951'
               xlinkHref={`#${pathName}`}/>
          <SidesColor maskID={maskName}>
            <g transform='translate(-21.000000, -6.000000)'>
              <rect x='0'
                    y='0'
                    width='180'
                    height='76'/>
            </g>
          </SidesColor>
        </g>
      </g>
    )
  }
}
