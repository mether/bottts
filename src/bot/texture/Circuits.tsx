import * as React from 'react'
import { TextureProps } from './index'

export default class Circuits extends React.Component<TextureProps> {
  static optionValue = 'Circuits'

  render () {
    const pieceId = 'Texture/Circuits'

    return (
      <g id={pieceId}
         mask={`url(#${this.props.maskID})`}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'>
        <path
          d='M72.4160437,34 L23,34 L19,34 L19,0 L23,0 L23,30 L72.4160437,30 C73.1876003,28.2340952 74.949681,27 77,27 C79.7614237,27 82,29.2385763 82,32 C82,34.7614237 79.7614237,37 77,37 C74.949681,37 73.1876003,35.7659048 72.4160437,34 Z M11,0 L15,0 L15,18 L11,18 L11,0 Z'
          id='Beep-Boop'
          fillOpacity='0.1'
          fill='#000000'/>
        <path
          d='M122,34.5839563 L122,60 L141,60 L141,64 L122,64 L118,64 L118,34.5839563 C116.234095,33.8123997 115,32.050319 115,30 C115,27.2385763 117.238576,25 120,25 C122.761424,25 125,27.2385763 125,30 C125,32.050319 123.765905,33.8123997 122,34.5839563 Z'
          id='Beep-Boop'
          fillOpacity='0.2'
          fill='#FFFFFF'/>
        <path d='M114,68 L141,68 L141,72 L114,72 L110,72 L110,46 L114,46 L114,68 Z'
              id='Beep-Boop'
              fillOpacity='0.2'
              fill='#000000'/>
        <path
          d='M15,103.583956 L15,129 L34,129 L34,133 L15,133 L11,133 L11,103.583956 C9.23409522,102.8124 8,101.050319 8,99 C8,96.2385763 10.2385763,94 13,94 C15.7614237,94 18,96.2385763 18,99 C18,101.050319 16.7659048,102.8124 15,103.583956 Z'
          id='Beep-Boop'
          fillOpacity='0.2'
          fill='#000000'
          transform='translate(21.000000, 113.500000) scale(-1, 1) translate(-21.000000, -113.500000) '/>
      </g>
    )
  }
}
