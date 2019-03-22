import * as React from 'react'

import { Selector, TextureOption } from '../../options'
import Camo01 from './Camo01'
import Camo02 from './Camo02'
import Circuits from './Circuits'
import Dirty01 from './Dirty01'
import Dirty02 from './Dirty02'
import Dots from './Dots'
import Grunge01 from './Grunge01'
import Grunge02 from './Grunge02'
import None from './None'

export interface TextureProps {
  readonly maskID?: string
}

export default class Texture extends React.Component<TextureProps> {
  render () {
    return (
      <Selector defaultOption={Circuits} option={TextureOption}>
        <None maskID={this.props.maskID}/>
        <Camo01 maskID={this.props.maskID}/>
        <Camo02 maskID={this.props.maskID}/>
        <Circuits maskID={this.props.maskID}/>
        <Dirty01 maskID={this.props.maskID}/>
        <Dirty02 maskID={this.props.maskID}/>
        <Dots maskID={this.props.maskID}/>
        <Grunge01 maskID={this.props.maskID}/>
        <Grunge02 maskID={this.props.maskID}/>
      </Selector>
    )
  }
}
