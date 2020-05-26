import React, { Component } from "react";
import Ball from "./Ball";

class Lottery extends Component {
  render() {
    return (
      <section className='Lottery'>
            <Ball num={17} />
      </section>
    );
  }
}

export default Lottery;
