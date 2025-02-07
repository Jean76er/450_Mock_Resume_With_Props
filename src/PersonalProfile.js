import React, { Component } from "react";

class PersonalProfile extends Component {
    render() {
        return (
            <div className="personalProfile">
                <div className="item">
                    <div>
                        <p className="bold">{this.props.profile.title}</p>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <p>{this.props.profile.content}</p>
                    </div>
                </div>
            </div>
        );
   
    }
}

export default PersonalProfile;