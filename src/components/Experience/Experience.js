import React, {Component} from 'react';
import "./experience.css";

export class Experience extends Component{
    render(){
        const { experiences } = this.props;
        console.log(experiences)
        return(
            <div className="experienceBox">
                {
                    experiences.map(experience => {
                        return(
                            <div key={experience.id} className="experienceBox-item card">
                                <h1>{experience.company_name}</h1>                                
                                <p>{experience.city}</p>
                                <p>{experience.range.begin} - {experience.range.end}</p>
                                <li>{experience.description}</li>
                            </div>
                        );
                    })
                }
            </div>
        );
    };
}