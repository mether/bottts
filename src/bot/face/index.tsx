import * as React from 'react'

import { FaceOption, Selector } from '../../options'
import Arturito from './Arturito'
import RoboCop from './RoboCop'
import Round01 from './Round01'
import Round02 from './Round02'
import Square01 from './Square01'
import Square02 from './Square02'
import Square03 from './Square03'
import Square04 from './Square04'

export default class Face extends React.Component {
  render () {
    return (
      <Selector defaultOption={Square01} option={FaceOption}>
        <Arturito/>
        <RoboCop/>
        <Round01/>
        <Round02/>
        <Square01/>
        <Square02/>
        <Square03/>
        <Square04/>
      </Selector>
    )
  }
}
