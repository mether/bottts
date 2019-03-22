import * as React from 'react'
import { Selector, TopColorOption } from '../../options'
import {
  Amber500,
  Black,
  Blue500,
  BlueGrey500,
  Brown500,
  Cyan500,
  DeepOrange500,
  DeepPurple500,
  Gray500,
  Green500,
  Indigo500,
  LightBlue500,
  LightGreen500,
  Lime500,
  Orange500,
  Pink500,
  Purple500,
  Red500,
  Teal500,
  White,
  Yellow500,
} from './CircleColor'

export interface Props {
  maskID: string
  children: React.ReactNode
}

export default class TopColor extends React.Component<Props> {
  render () {
    return (
      <Selector option={TopColorOption} defaultOption={Red500}>
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
        <BlueGrey500 maskID={this.props.maskID}>{this.props.children}</BlueGrey500>
      </Selector>
    )
  }
}
