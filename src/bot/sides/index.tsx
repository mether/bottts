import * as React from 'react'

import { Selector, SidesOption } from '../../options'
import Antenna01 from './Antenna01'
import Antenna02 from './Antenna02'
import Cables01 from './Cables01'
import Cables02 from './Cables02'
import Round from './Round'
import Square from './Square'
import SquareAsymmetric from './SquareAsymmetric'

export default class Sides extends React.Component {
  render () {
    return (
      <Selector defaultOption={Square} option={SidesOption}>
        <Square/>
        <Antenna01/>
        <Antenna02/>
        <Cables01/>
        <Cables02/>
        <Round/>
        <SquareAsymmetric/>
      </Selector>
    )
  }
}
