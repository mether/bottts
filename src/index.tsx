import * as PropTypes from 'prop-types'
import * as React from 'react'

import { Bot, BotStyle } from './bot'
import { PieceComponent } from './bot/piece'
import { allOptions, OptionContext } from './options'

export { Bot, BotStyle } from './bot'
export { Option, OptionContext, allOptions } from './options'

export interface Props {
  botStyle: string
  style?: React.CSSProperties
  circleColor?: string
  topType?: string
  topColor?: string
  faceType?: string
  faceColor?: string
  textureType?: string
  eyeType?: string
  mouthType?: string
  sideType?: string
  sidesColor?: string
  pieceType?: string
  pieceSize?: string
  viewBox?: string
}

export default class Bottt extends React.Component<Props> {
  static childContextTypes = {
    optionContext: PropTypes.instanceOf(OptionContext),
  }
  private optionContext: OptionContext = new OptionContext(allOptions)

  getChildContext () {
    return { optionContext: this.optionContext }
  }

  componentWillMount () {
    this.updateOptionContext(this.props)
  }

  componentWillReceiveProps (nextProps: Props) {
    this.updateOptionContext(nextProps)
  }

  render () {
    const { botStyle, style } = this.props
    return <Bot botStyle={botStyle as BotStyle} style={style}/>
  }

  private updateOptionContext (props: Props) {
    const data: { [index: string]: string } = {}
    for (const option of allOptions) {
      const value = props[option.key]
      if (!value) {
        continue
      }
      data[option.key] = value
    }
    this.optionContext.setData(data)
  }
}

export class Piece extends React.Component<Props> {
  static childContextTypes = {
    optionContext: PropTypes.instanceOf(OptionContext),
  }
  private optionContext: OptionContext = new OptionContext(allOptions)

  getChildContext () {
    return { optionContext: this.optionContext }
  }

  componentWillMount () {
    this.updateOptionContext(this.props)
  }

  componentWillReceiveProps (nextProps: Props) {
    this.updateOptionContext(nextProps)
  }

  render () {
    const { botStyle, style, pieceType, pieceSize } = this.props
    return (
      <PieceComponent botStyle={botStyle as BotStyle}
                      style={style}
                      pieceType={pieceType}
                      pieceSize={pieceSize}/>
    )
  }

  private updateOptionContext (props: Props) {
    const data: { [index: string]: string } = {}
    for (const option of allOptions) {
      const value = props[option.key]
      if (!value) {
        continue
      }
      data[option.key] = value
    }
    this.optionContext.setData(data)
  }
}
