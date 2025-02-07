import React, { Component } from "react";

class WorkExperience extends Component {
    render() {
        return (
            <div className="workExp">
                <div className="item">
                    <div>
                        <p className="bold">{this.props.workExperience.title}</p>
                    </div>
                </div>
                <div className="item">
                    <div className="ex_1">
                        <div>
                            <p className="bold">{this.props.workExperience.job1}</p>
                        </div>
                        <div>
                            <p>{this.props.workExperience.job1Content}</p>
                        </div>
                    </div>
                    <div className="ex_2">
                        <div>
                            <p className="bold">{this.props.workExperience.job2}</p>
                        </div>
                        <div>
                            <p>{this.props.workExperience.job2Content}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkExperience;