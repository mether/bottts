import * as React from 'react'

import { Selector, TopOption } from '../../options'
import Antenna from './Antenna'
import AntennaCrooked from './AntennaCrooked'
import Bulb01 from './Bulb01'
import Bulb02 from './Bulb02'
import Horns from './Horns'
import Lights from './Lights'
import Plankton from './Plankton'
import Pyramid from './Pyramid'
import Radar from './Radar'

export default class Top extends React.Component {
  render () {
    return (
      <Selector defaultOption={Plankton} option={TopOption}>
        <Antenna/>
        <AntennaCrooked/>
        <Bulb01/>
        <Bulb02/>
        {/*<GlowingBulb01/>*/}
        {/*<GlowingBulb02/>*/}
        <Horns/>
        <Lights/>
        <Plankton/>
        <Pyramid/>
        <Radar/>
      </Selector>
    )
  }
}
