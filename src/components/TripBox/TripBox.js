import React, {Component} from 'react';
import './TripBox.css';

class TripBox extends Component{
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
        let img = './DSCN3207.JPG';
        /*return (
            <div className = "container">
                <div className = "container-img">
                    <img src = {require('./DSCN3207.JPG')} alt="trip img" className = "img"/>
                </div>
                <div className = "container-info">
                    <h5 class="title is-5">{this.state.name}</h5>
                    <span>{this.state.description}</span>
                    <div>Ciudades: {this.state.cities.length}</div>
                    <div>Lugares de interes: {this.state.places.length}</div>
                </div>
                
            </div>
        );*/
        return(
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={require('./DSCN3207.JPG')} alt="Image"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.state.name}</strong> <small>@johnsmith</small> <small>31m</small>
                                <br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                            </p>
                        </div>
                        <nav className="level is-mobile">
                            <div className="level-left">
                                <a className="level-item" aria-label="reply">
                                    <span className="icon is-small">
                                    <i className="fas fa-reply" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a className="level-item" aria-label="retweet">
                                    <span className="icon is-small">
                                    <i className="fas fa-retweet" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a className="level-item" aria-label="like">
                                    <span className="icon is-small">
                                        <i className="fas fa-heart" aria-hidden="true"></i>
                                    </span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </article>
            </div>
        );
    }
}

export default TripBox;