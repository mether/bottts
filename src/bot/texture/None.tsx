import * as React from 'react'
import { TextureProps } from './index'

export default class None extends React.Component<TextureProps> {
  static optionValue = 'None'

  render () {
    const pieceId = 'Texture/None'

    return (
      <g id={pieceId}
         mask={`url(#${this.props.maskID})`}
         stroke='none'
         strokeWidth='1'
         fill='none'
         fillRule='evenodd'/>
    )
  }
}
