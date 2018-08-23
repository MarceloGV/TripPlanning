import React, {Component} from 'react';
import { connect } from 'react-redux'
import HeaderResumeContainer from '../../components/containers/HeaderResumeContainer.js';
import TripBoxContainer from '../../components/containers/TripBoxContainer.js';

// import TripList from '../../components/TripList/TripList';
// import TripBox from '../../components/TripBox/TripBox';
// import TripCard from '../../components/TripCard/TripCard';
// import { getTrips } from '../../TripPlanningCore/src/actions'

class Resume extends Component{
    constructor(props){
        super(props);
        this.state = {currentTrip: [], newTrips: []};
    }
    
    componentDidMount(){
        /*let currentTrip = [<TripBox 
            img = './DSCN3207.JPG'
            name = "Código rutero"
            description = "Viaje a lo largo de la arentina codeando y conociendo"
            cities = {[{
                name: "Sierra de la ventana",
                places: "Cerro Bahía Blanca"
            }, "Las grutas"]}
            places = {["Cerro Bahía Blanca", "Piedras Rojas"]}

        />];
        let newTrips = [<TripCard 
            img = './DSCN3207.JPG'
            name = "Código rutero"
            description = "Viaje a lo largo de la arentina codeando y conociendo"
            cities = {["Sierra de la ventana", "Las grutas"]}
            places = {["Cerro Bahía Blanca", "Piedras Rojas"]}

        />];*/
        //let trips = getTrips();
        //this.setState({currentTrip:  currentTrip});
        //this.setState({newTrips:  trips});
    }

    render(){
        return (
            <div>
                <HeaderResumeContainer/>
                <TripBoxContainer/>
                {/* <h1 className="title is-5">Current trip</h1> */}
                {/* {this.state.currentTrip} */}
                
                {/* <TripList title = "New Trips" trips = {this.props.getTrips()}/> */}
            </div>
        );
    }
}

/*function mapStateToProps( state ){
    return { newTrips: state.newTrips };
}

const mapDispatchToProps = dispatch => ({
    getTrips: dispatch(getTrips())
})*/

export default Resume;