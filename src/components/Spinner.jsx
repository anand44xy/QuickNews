import React, { Component } from 'react';
import Rocket from '../assets/Rocket.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={Rocket} alt="loading..." />
      </div>
    );
  }
}

export default Spinner;
