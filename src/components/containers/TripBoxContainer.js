import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getTrips } from '../../TripPlanningCore/src/actions';
import TripBox from '../presentational/TripBox/TripBox.js';

class TripBoxContainer extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.actionGetTrips()
    /*this.setState({
      trip: this.props.actionGetTrips()
    })*/
    /*this.setState((prevState, props) => ({
      trip: {
        img: './DSCN3207.JPG',
        name: "Código rutero",
        description: "Viaje a lo largo de la arentina codeando y conociendo",
        cities: [
          {
            name: "Sierra de la ventana",
            places: "Cerro Bahía Blanca"
          }, 
          {
            name: "Las Grutas",
            places: "Rocas Rojas"
          }, 
        ]
      }
    }));*/
  }

  render(){
    return(
      <div>
        <TripBox trip = {this.props.trip}/>
      </div>
    )
  }
}

function mapStateToProps( state ){
  return {
    trip: state.trips.length > 0 ? state.trips[0] : {}
  }
}

function mapDispatchToProps(dispatch, state) {
  return {
      actionGetTrips: function(){
        dispatch(getTrips());
      }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripBoxContainer);