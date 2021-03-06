import * as React from 'react'
import SidesColor from '../color/SidesColor'

export default class Antenna02 extends React.Component {
  static optionValue = 'Antenna02'

  render () {
    const pieceId = 'Sides/Antenna02'
    const pathName = `${pieceId}-path`
    const maskName = `${pieceId}-mask`

    return (
      <g id={pieceId}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <path
          d='M152,19 L154.87223,19 C156.655267,19 157.30184,19.1856512 157.953691,19.5342654 C158.605543,19.8828796 159.11712,20.3944567 159.465735,21.0463086 C159.814349,21.6981604 160,22.3447329 160,24.1277704 L160,45.8722296 C160,47.6552671 159.814349,48.3018396 159.465735,48.9536914 C159.11712,49.6055433 158.605543,50.1171204 157.953691,50.4657346 C157.30184,50.8143488 156.655267,51 154.87223,51 L129.12777,51 C127.344733,51 126.69816,50.8143488 126.046309,50.4657346 C125.394457,50.1171204 124.88288,49.6055433 124.534265,48.9536914 C124.185651,48.3018396 124,47.6552671 124,45.8722296 L124,24.1277704 C124,22.3447329 124.185651,21.6981604 124.534265,21.0463086 C124.88288,20.3944567 125.394457,19.8828796 126.046309,19.5342654 C126.69816,19.1856512 127.344733,19 129.12777,19 L150,19 L150,0 L152,0 L152,19 Z M5.1277704,19 L30.8722296,19 C32.6552671,19 33.3018396,19.1856512 33.9536914,19.5342654 C34.6055433,19.8828796 35.1171204,20.3944567 35.4657346,21.0463086 C35.8143488,21.6981604 36,22.3447329 36,24.1277704 L36,45.8722296 C36,47.6552671 35.8143488,48.3018396 35.4657346,48.9536914 C35.1171204,49.6055433 34.6055433,50.1171204 33.9536914,50.4657346 C33.3018396,50.8143488 32.6552671,51 30.8722296,51 L5.1277704,51 C3.34473292,51 2.69816044,50.8143488 2.04630859,50.4657346 C1.39445674,50.1171204 0.882879593,49.6055433 0.534265408,48.9536914 C0.185651222,48.3018396 8.02470732e-17,47.6552671 -1.38112041e-16,45.8722296 L1.38112041e-16,24.1277704 C-8.02470732e-17,22.3447329 0.185651222,21.6981604 0.534265408,21.0463086 C0.882879593,20.3944567 1.39445674,19.8828796 2.04630859,19.5342654 C2.69816044,19.1856512 3.34473292,19 5.1277704,19 Z'
          id={pathName}/>
        <g id='Ears'
           transform='translate(10.000000, 9.000000)'>
          <mask id={maskName}
                fill='white'>
            <use xlinkHref={`#${pathName}`}/>
          </mask>
          <use fill='#0076DE'
               xlinkHref={`#${pathName}`}/>
          <SidesColor maskID={maskName}>
            <g transform='translate(-10.000000, -9.000000)'>
              <rect x='0'
                    y='0'
                    width='180'
                    height='76'/>
            </g>
          </SidesColor>
          <rect id='Shadow'
                fillOpacity='0.1'
                fill='#000000'
                mask={`url(#${maskName})`}
                x='-10'
                y='29'
                width='180'
                height='38'/>
        </g>
        <g id='Antenna'
           transform='translate(157.000000, 1.000000)'>
          <rect fillOpacity='0.4'
                fill='#FFFFFF'
                x='3'
                y='7'
                width='2'
                height='20'/>
          <circle id='Beep-Boop'
                  fill='#E1E6E8'
                  cx='4'
                  cy='4'
                  r='4'/>
          <circle id='Beep-Boop'
                  fill='#FFFFFF'
                  cx='5'
                  cy='3'
                  r='2'/>
        </g>
      </g>
    )
  }
}
