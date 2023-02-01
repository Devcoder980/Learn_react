import React, { Component } from 'react'

export default class useCall extends Component {
  constructor(props) {
    super(props);
    // this.state = { value: 'Coconut' };
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }


  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }


  render() {
    return (
      <form >
        {/* <label className='border-2' htmlFor="Name">Name:'<input type="text" value={this.state.value} onChange={this.handleChange} name="name" /></label> */}
        {/* <textarea className='border-2' name="name" id="" cols="30" rows="4" value={this.state.value} onChange={this.handleChange} /> */}
        {/* <select onChange={this.handleChange} value={this.state.value}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select> */}
        {/* <input type="file" /> */}

        {/* <input className='border-2' type="submit" value="Submit" /> */}


        <label htmlFor="isgont">
          Is going:
          <input type="checkbox"
            name="isgoing"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label htmlFor="numberguest">
          Number of guests:
          <input
            type="number"
            name="NumberOfGuest"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    )
  }
}
