import React, {Component} from 'react';
import * as data from "../data/infopersonal.json";
import perfil from "../assets/perfil.jpg";
import { Skill } from './Skill';
import { Info } from './Info';
import { Experience } from './Experience/Experience';

export class Curriculum extends Component{   
    
    render(){
        return(
            <section className="Curriculum">
                <header className="CurriculumHeader">
                    <section className="CurriculumHeader-item profilePhoto">
                        <img src={perfil} alt={data.fullName}/>
                    </section>
                    <section className="CurriculumHeader-item presentation">
                        <h1>{data.fullName}</h1>
                        <h2>{data.title}</h2>
                        <div className="info-icons">
                           <Info information={data.info} />                            
                        </div>
                    </section>                  
                </header>
                <section className="CurriculumInfo">
                    <section className="CurriculumInfo-item Curriculum-about">
                        <button>Acerca de mí</button>
                        <br/>
                        <div className="card">{data.about_me}</div>                    
                    </section>
                    <section className="CurriculumInfo-item Curriculum-skills">                        
                        <Skill skills={data.skills} />                       
                    </section>
                </section>               
                <section className="Curriculum-experience-work">
                    <br />
                    <button>Experiencia</button>
                    <br />
                    <Experience experiences={data.experience} />
                </section>
            </section>            
        );
    };
}