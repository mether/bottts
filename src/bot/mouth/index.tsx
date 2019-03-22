import * as React from 'react'

import { MouthOption, Selector } from '../../options'
import Arturito from './Arturito'
import Bite from './Bite'
import Diagram from './Diagram'
import Grill01 from './Grill01'
import Grill02 from './Grill02'
import Grill03 from './Grill03'
import RoboCop from './RoboCop'
import Smile01 from './Smile01'
import Smile02 from './Smile02'
import Square01 from './Square01'
import Square02 from './Square02'

export default class Mouth extends React.Component {
  render () {
    return (
      <Selector defaultOption={Grill03} option={MouthOption}>
        <Arturito/>
        <Bite/>
        <Diagram/>
        <Grill01/>
        <Grill02/>
        <Grill03/>
        <RoboCop/>
        <Smile01/>
        <Smile02/>
        <Square01/>
        <Square02/>
      </Selector>
    )
  }
}
