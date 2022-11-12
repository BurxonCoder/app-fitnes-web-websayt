import React, { Component } from 'react'
import '../components/HeroimageStyle.css'
export class Heroimgae extends Component {
  render() {
    return (
      <div className='hero-img'>
         <div className='heading'>
            <h1>{this.props.headin}</h1>
            <p>{this.props.text}</p>
    </div>        
      </div>
    )
  }
}

export default Heroimgae