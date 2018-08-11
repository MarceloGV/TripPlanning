import React, {Component} from 'react';
import HeaderResume from '../../components/HeaderResume/HeaderResume';
import TripList from '../../components/TripList/TripList';
import TripBox from '../../components/TripBox/TripBox';
import TripCard from '../../components/TripCard/TripCard';

const store =  require("../../TripPlanningCore/src");

class Resume extends Component{
    constructor(props){
        super(props);
        this.state = {currentTrip: [], newTrips: []};
    }
    
    componentDidMount(){
        let currentTrip = [<TripBox 
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

        />];
        this.setState({currentTrip:  currentTrip});
        this.setState({newTrips:  newTrips});
    }

    render(){
        return (
            <div>
                <HeaderResume/>
                <h1 className="title is-5">Current trip</h1>
                {this.state.currentTrip}
                
                <TripList title = "New Trips" trips = {this.state.newTrips}/>
            </div>
        );
    }
}

export default Resume;