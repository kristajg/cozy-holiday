import React from 'react';
import ReactDOM from 'react-dom';
import CozyHoliday from './CozyHoliday';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CozyHoliday />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export { default as CozyHoliday } from './CozyHoliday';
export { default as Snow } from './components/snow/Snow';
