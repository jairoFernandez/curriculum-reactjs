import React, { Component } from 'react';
import './Education.css';

export class Education extends Component{
    render(){
        const { educationList } = this.props;
        return(
            <div className="Education">
                {
                    educationList.map(education => {
                        return(
                            <div key={education.id} className="card educationList">
                                <h1>{education.institution}</h1>
                                <p>{education.title}</p>
                                <p>{education.duration}</p>
                            </div>
                        )
                    })
                }
            </div>    
        );
    }
}