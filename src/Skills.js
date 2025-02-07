import React, { Component } from "react";

class Skills extends Component {
    render() {
        return (
            <div className="keySkills">
                <div className="hd1_c1">
                    <div>
                        <p className="bold">{this.props.keySkills.title}</p>
                    </div>
                </div>

                <div className="hd1_c2">
                    <div className="skills">
                        <div className="item">
                            <p>{this.props.keySkills.content1}</p>
                            <p>{this.props.keySkills.content1}</p>
                            <p>{this.props.keySkills.content1}</p>
                        </div>
                        <div className="item">
                            <p>{this.props.keySkills.content1}</p>
                            <p>{this.props.keySkills.content1}</p>
                            <p>{this.props.keySkills.content1}</p>
                        </div>
                        <div className="item">
                            <p>{this.props.keySkills.content1}</p>
                            <p>{this.props.keySkills.content1}</p>
                            <p>{this.props.keySkills.content1}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;