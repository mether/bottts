import * as React from 'react'
import { EyesOption, Selector } from '../../options'
import Arturito from './Arturito'
import Bulging from './Bulging'
import Dizzy from './Dizzy'
import Eva from './Eva'
import Frame01 from './Frame01'
import Frame02 from './Frame02'
import Glow from './Glow'
import Hal from './Hal'
import Happy from './Happy'
import Hearts from './Hearts'
import RoboCop from './RoboCop'
import Round from './Round'
import RoundFrame01 from './RoundFrame01'
import RoundFrame02 from './RoundFrame02'
import Sensor from './Sensor'
import Shades from './Shades'

export default class Eyes extends React.Component {
  render () {
    return (
      <Selector defaultOption={Shades} option={EyesOption}>
        <Arturito/>
        <Bulging/>
        <Dizzy/>
        <Eva/>
        <Frame01/>
        <Frame02/>
        <Glow/>
        <Hal/>
        <Happy/>
        <Hearts/>
        <RoboCop/>
        <Round/>
        <RoundFrame01/>
        <RoundFrame02/>
        <Sensor/>
        <Shades/>
      </Selector>
    )
  }
}
