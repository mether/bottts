import * as React from 'react'

import { ColorOption, Selector } from '../../options'

export interface Props {
  maskID: string
  children: React.ReactNode
}

export function makeColor (name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render () {
      return (
        <g id={name}
           mask={`url(#${this.props.maskID})`}
           fill={color}>
          {this.props.children}
        </g>
      )
    }
  }

  const anyComponent = ColorComponent as any
  anyComponent.displayName = name
  anyComponent.optionValue = name
  return anyComponent
}

export const Black = makeColor('Black', '#000000')
export const White = makeColor('White', '#FFFFFF')
export const Red500 = makeColor('Red', '#F44336')
export const Pink500 = makeColor('Pink', '#E91E63')
export const Purple500 = makeColor('Purple', '#9C27B0')
export const DeepPurple500 = makeColor('DeepPurple', '#673AB7')
export const Indigo500 = makeColor('Indigo', '#3F51B5')
export const Blue500 = makeColor('Blue', '#2196F3')
export const LightBlue500 = makeColor('LightBlue', '#03A9F4')
export const Cyan500 = makeColor('Cyan', '#00BCD4')
export const Teal500 = makeColor('Teal', '#009688')
export const Green500 = makeColor('Green', '#4CAF50')
export const LightGreen500 = makeColor('LightGreen', '#8BC34A')
export const Lime500 = makeColor('Lime', '#CDDC39')
export const Yellow500 = makeColor('Yellow', '#FFEB3B')
export const Amber500 = makeColor('Amber', '#FFC107')
export const Orange500 = makeColor('Orange', '#FF9800')
export const DeepOrange500 = makeColor('DeepOrange', '#FF5722')
export const Brown500 = makeColor('Brown', '#795548')
export const Gray500 = makeColor('Gray', '#9E9E9E')
export const Gray800 = makeColor('GrayDark', '#424242')
export const BlueGrey500 = makeColor('BlueGrey', '#607D8B')

export default class CircleColor extends React.Component<Props> {
  render() {
    return (
      <Selector option={ColorOption} defaultOption={Gray800}>
        <Black maskID={this.props.maskID}>{this.props.children}</Black>
        <White maskID={this.props.maskID}>{this.props.children}</White>
        <Red500 maskID={this.props.maskID}>{this.props.children}</Red500>
        <Pink500 maskID={this.props.maskID}>{this.props.children}</Pink500>
        <Purple500 maskID={this.props.maskID}>{this.props.children}</Purple500>
        <DeepPurple500 maskID={this.props.maskID}>{this.props.children}</DeepPurple500>
        <Indigo500 maskID={this.props.maskID}>{this.props.children}</Indigo500>
        <Blue500 maskID={this.props.maskID}>{this.props.children}</Blue500>
        <LightBlue500 maskID={this.props.maskID}>{this.props.children}</LightBlue500>
        <Cyan500 maskID={this.props.maskID}>{this.props.children}</Cyan500>
        <Teal500 maskID={this.props.maskID}>{this.props.children}</Teal500>
        <Green500 maskID={this.props.maskID}>{this.props.children}</Green500>
        <LightGreen500 maskID={this.props.maskID}>{this.props.children}</LightGreen500>
        <Lime500 maskID={this.props.maskID}>{this.props.children}</Lime500>
        <Yellow500 maskID={this.props.maskID}>{this.props.children}</Yellow500>
        <Amber500 maskID={this.props.maskID}>{this.props.children}</Amber500>
        <Orange500 maskID={this.props.maskID}>{this.props.children}</Orange500>
        <DeepOrange500 maskID={this.props.maskID}>{this.props.children}</DeepOrange500>
        <Brown500 maskID={this.props.maskID}>{this.props.children}</Brown500>
        <Gray500 maskID={this.props.maskID}>{this.props.children}</Gray500>
        <Gray800 maskID={this.props.maskID}>{this.props.children}</Gray800>
        <BlueGrey500 maskID={this.props.maskID}>{this.props.children}</BlueGrey500>
      </Selector>
    )
  }
}
