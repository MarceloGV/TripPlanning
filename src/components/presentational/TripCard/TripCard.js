import React, {Component} from 'react';

class TripCard extends Component{
    constructor(props){
        super(props);
        this.state = {img: props.img,
            name: props.name,
            description: props.description,
            cities: props.cities,
            places: props.places
        }
    }

    render(){
        return(
            <div className="card">
                <div className="card-content">
                    <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div>
                        <p className="title is-4">{this.state.name}</p>
                        <p className="subtitle is-6">@johnsmith</p>
                    </div>
                    </div>

                    <div className="content">
                        {this.state.description}
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br/>
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            </div>
        );
    }
}

export default TripCard;