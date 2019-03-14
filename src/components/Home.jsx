import React, { Component } from 'react'

import SimpleSlider from './Slider'
import SimpleSlider2 from './Slider2'
import ToggleContent from './ToggleContent'
import Tooltip from './Tooltip'
import ModalExample from './ModalExample'
import ModalExample2 from './ModalExample2'
import ToogleBasic from './ToggleSwitch'
import ToogleMaterial from './ToggleSwitchMaterial'
import ToogleDisabled from './ToggleSwitchDisabled'
import ToggleContent2 from './ToggleContent2'
import AddActiveClassButton from './AddClassButton'
import ToogleWithContent from './ToggleSwitchWithContent'
import VolumeSlider from './BarSlider'

export default class Home extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <SimpleSlider />
          <br /><br />
          <SimpleSlider2 />
          <br /><br />
          <ToggleContent />
          <br /><br />
          <ToggleContent2 />
          <br /><br />
          <AddActiveClassButton />
          <br /><br />
          <p>Here is a <Tooltip message={'Hello, I am a super cool tooltip'} position={'top'}>tooltip</Tooltip> on top.</p>
          <p>Here is a <Tooltip message={'Hello, I am a super cool tooltip'} position={'bottom'}>tooltip</Tooltip> on bottom.</p>
          <p>Here is a <Tooltip message={'Hello, I am a super cool tooltip'} position={'left'}>tooltip</Tooltip> on left.</p>
          <p>Here is a <Tooltip message={'Hello, I am a super cool tooltip'} position={'right'}>tooltip</Tooltip> on right.</p>
          <br /><br />
          <ModalExample />
          <br /><br />
          <ModalExample2 />
          <br /><br />
          <ToogleBasic />
          <br /><br />
          <ToogleMaterial />
          <br /><br />
          <ToogleDisabled />
          <br /><br />
          <ToogleWithContent />
          <br /><br />
          <VolumeSlider />
        </div>
      </section>
    );
  }
}