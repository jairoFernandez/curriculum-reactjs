import React, { Component } from 'react';

export class Skill extends Component {
    render() {
        const { skills } = this.props;
        return (
            <div className="skills">
            <div className="card">
                <button>Skills</button>
                <br />
                {                    
                    skills.map(skill => {
                        return (                            
                            <div key={skill.name}>
                                <label htmlFor={skill.name}>{skill.name}</label><br />
                                <input max={100} name={skill.name} type="range" defaultValue={skill.scale} />
                            </div>
                        );
                    })
                }
            </div>
            </div>
        );
    };
}