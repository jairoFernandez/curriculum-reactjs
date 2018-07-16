import React, {Component} from 'react';

export class Info extends Component{
    render(){
        const { information } = this.props;
        return(
            <div>
                {
                    information.map(info => {
                        return (
                            <div key={info.name}>
                                <small><i className={info.icon}></i>&nbsp;<p>{info.value}</p></small>
                            </div>
                        )
                    })
                }                
            </div>
        );
    };
}