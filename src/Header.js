import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="item">
          <div>
            <p class="bold">{this.props.personInfo.name}</p>
            <p>{this.props.personInfo.occupation}</p>
          </div>
        </div>
        <div className="item">
          <div>
            <p>Email: <a class="link">{this.props.contactInfo.email}</a></p>
            <p>Web: {this.props.contactInfo.web}</p>
            <p>Mobile: {this.props.contactInfo.mobile}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;