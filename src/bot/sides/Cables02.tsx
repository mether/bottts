import * as React from 'react'
import SidesColor from '../color/SidesColor'

export default class Cables02 extends React.Component {
  static optionValue = 'Cables02'

  render () {
    const pieceId = 'Sides/Cables02'
    const pathName = `${pieceId}-path`
    const maskName = `${pieceId}-mask`

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <path
          d='M2,27 L14,27 C15.1045695,27 16,27.8954305 16,29 L16,47 C16,48.1045695 15.1045695,49 14,49 L2,49 C0.8954305,49 1.3527075e-16,48.1045695 0,47 L0,29 C-1.3527075e-16,27.8954305 0.8954305,27 2,27 Z M3,60 L15,60 C16.1045695,60 17,60.8954305 17,62 L17,70 C17,71.1045695 16.1045695,72 15,72 L3,72 C1.8954305,72 1,71.1045695 1,70 L1,62 C1,60.8954305 1.8954305,60 3,60 Z M124,42 L136,42 C137.104569,42 138,42.8954305 138,44 L138,62 C138,63.1045695 137.104569,64 136,64 L124,64 C122.895431,64 122,63.1045695 122,62 L122,44 C122,42.8954305 122.895431,42 124,42 Z M124,0 L136,0 C137.104569,-2.02906125e-16 138,0.8954305 138,2 L138,20 C138,21.1045695 137.104569,22 136,22 L124,22 C122.895431,22 122,21.1045695 122,20 L122,2 C122,0.8954305 122.895431,2.02906125e-16 124,0 Z'
          id={pathName}/>
        <g id='Cables-Left'
           opacity='0.9'
           transform='translate(8.000000, 5.000000)'
           stroke='#2A3544'>
          <ellipse id='Cable'
                   strokeWidth='6'
                   cx='24.5'
                   cy='18'
                   rx='16.5'
                   ry='18'/>
          <path d='M18.8032032,36.4616969 C18.8032032,27.9012833 11.6397592,20.9616969 2.80320323,20.9616969'
                id='Cable'
                strokeWidth='4'
                transform='translate(10.803203, 28.711697) scale(1, -1) rotate(-60.000000) translate(-10.803203, -28.711697) '/>
          <path
            d='M20,62 C29.3888407,62 37,55.5081289 37,47.5 C37,39.4918711 29.3888407,33 20,33 C10.6111593,33 4,39.4918711 4,47.5 C4,55.5081289 10.6111593,62 20,62 Z'
            id='Cable'
            strokeWidth='4'/>
        </g>
        <g id='Cables-Right'
           opacity='0.9'
           transform='translate(132.000000, 7.000000)'
           stroke='#2A3544'>
          <path d='M33.8032032,58.4616969 C33.8032032,49.9012833 26.6397592,42.9616969 17.8032032,42.9616969'
                id='Cable'
                strokeWidth='4'
                transform='translate(25.803203, 50.711697) rotate(-30.000000) translate(-25.803203, -50.711697) '/>
          <path
            d='M16,31 C25.3888407,31 33,24.0604136 33,15.5 C33,6.93958638 25.3888407,0 16,0 C6.61115925,0 0,6.93958638 0,15.5 C0,24.0604136 6.61115925,31 16,31 Z'
            id='Cable'
            strokeWidth='6'/>
        </g>
        <g id='Connectors'
           transform='translate(21.000000, 0.000000)'>
          <mask id={maskName}
                fill='white'>
            <use xlinkHref={`#${pathName}`}/>
          </mask>
          <use fill='#273951'
               xlinkHref={`#${pathName}`}/>
          <SidesColor maskID={maskName}>
            <g transform='translate(-21.000000, 0.000000)'>
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
