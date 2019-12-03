import React, { Component } from 'react';
import { render } from 'react-dom';

import CozyHoliday from '../../src/CozyHoliday';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>Cozy Holiday Demo</h1>
        <CozyHoliday />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
