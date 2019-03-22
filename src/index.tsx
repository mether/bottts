import * as PropTypes from 'prop-types'
import * as React from 'react'

import Bot, { BotStyle } from './bot'
import { default as PieceComponent } from './bot/piece'
import { allOptions, OptionContext } from './options'

export { default as Bot, BotStyle } from './bot'
export { Option, OptionContext, allOptions } from './options'

export interface Props {
  botStyle: BotStyle
  style?: React.CSSProperties
  color?: string
  topType?: string
  hairColor?: string
  facialHairType?: string
  facialHairColor?: string
  clotheType?: string
  clotheColor?: string
  graphicType?: string
  eyeType?: string
  eyebrowType?: string
  mouthType?: string
  skinColor?: string
  pieceType?: string
  pieceSize?: string
}

export default class BotComponent extends React.Component<Props> {
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
    return <Bot botStyle={botStyle} style={style}/>
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
      <PieceComponent botStyle={botStyle}
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
