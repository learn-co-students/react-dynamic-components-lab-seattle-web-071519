import React, { Component } from 'react';

export default class ColorBox extends Component {

  renderNext = opacityValue => {
    if (opacityValue >= 0.2) {
      return <ColorBox opacity={opacityValue-0.1} />
    } else {
      return null
    }
  }

  render = () => {
    let newValue = this.props.opacity;
    return (<div class="color-box" style={{ opacity:newValue }}>
      {this.renderNext(newValue)}
    </div>)
  }

}

// export default class ColorBox extends Component {

//   render() {
//       let newValue = this.props.opacity
//       return (
//       <div class="color-box" style={{opacity:newValue}}>
//         {newValue >= 0.2 ? <ColorBox opacity={newValue-0.1}/> : null}
//       </div>
//       )
//   }

// }
