import * as React from 'react'

import Eyes from './eyes'
import Face from './face'

export enum BotStyle {
  Circle = 'Circle',
  Transparent = 'Transparent',
}

export interface Props {
  pieceSize?: string
  pieceType?: string
  botStyle: BotStyle
  style?: React.CSSProperties
}

export class PieceComponent extends React.Component<Props> {
  render () {
    return (
      <svg
        style={this.props.style}
        width={`${this.props.pieceSize}px`}
        height={`${this.props.pieceSize}px`}
        viewBox={`0 0 180 180`}
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'>
        {this.props.pieceType === 'face' && <Face/>}
        {this.props.pieceType === 'eyes' && <Eyes/>}
      </svg>
    )
  }
}
