import React, { Component } from "react";

class Education extends Component {
    render() {
        return (
            <div className="education">
                <div className="item">
                    <div>
                        <p className="bold">{this.props.education.title}</p>
                    </div>
                </div>
                <div className="item">
                    <div className="ex_1">
                        <p className="bold">{this.props.education.bsInstitution}</p>
                        <p>{this.props.education.bsDegree}</p>
                        <p>{this.props.education.bsDates}</p>
                        <p>{this.props.education.bsGpa}</p>
                    </div>
                    <div className="ex_2">
                        <p className="bold">{this.props.education.msInstitution}</p>
                        <p>{this.props.education.msDegree}</p>
                        <p>{this.props.education.msDates}</p>
                        <p>{this.props.education.msGpa}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;