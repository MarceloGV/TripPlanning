import React, {Component} from 'react';
import './TripList.css';

class TripList extends Component{
    constructor(props){
        super(props);
        this.state = {title: props.title, trips: [], type: props.type};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ trips: nextProps.trips });  
    }

    render(){
        if(!this.state.tripList)
            return(
                <div></div>
            );

        const listItems = this.state.trips.map(
            trip => <div className="tripElement">{trip}</div>
        );
        return (
            <div>
                <h1 className="title is-5">{this.state.title}</h1>
                <div className="tripList">
                    {listItems}
                </div>
            </div>
        );
    }
}

export default TripList;