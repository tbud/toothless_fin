import {Text, Input} from 'toothless';
//
// window.__toothless_platform = 'wechat';
//
// export default class toothless_fin extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   state = {
//     buttonText: 'Action',
//     showText: 'toothless'
//   }
//
//   render() {
//     return (
//       <div>abc</div>
//     )
//   }
//
// }

import React, {Component} from 'react';
import ReactDOM from 'react/lib/ReactDOM';


class Toothless extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    buttonText: 'Action',
    showText: 'toothless'
  }

  render() {
    return (
      <Input/>
    )
  }
}

ReactDOM.render(<Toothless />, document.getElementById('root'));


// import React, {Component} from 'react';
//
// class TView extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <div>abc</div>
//     );
//   }
// }
//
// module.exports = TView;