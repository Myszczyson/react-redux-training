import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import PropTypes from 'prop-types';
import styles from './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';

import Home from './components/views/Home/Home';
import Trips from './components/views/Trips/TripsContainer';
import Countries from './components/views/Countries/CountriesContainer';
import Regions from './components/views/Regions/RegionsContainer';
import Country from './components/views/Country/CountryContainer';
import Info from './components/views/Info/Info';
import NotFound from './components/views/NotFound/NotFound';
import Trip from './components/views/Trip/TripContainer';

import parseTrips from './utils/parseTrips';
import {setMultipleStates} from './redux/globalRedux';

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    top: `${styles.top}px`,
  };
}

// child matches will...
const slideTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    top: 200,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: 0,
    top: 0,
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: 1,
    top: 0,
  },
};

class App extends React.Component {
  static propTypes = {
    trips: PropTypes.array,
    setStates: PropTypes.func,
  }

  constructor(props){
    super(props);
    // parse trips when App is first created
    parseTrips(this.props.trips, this.props.setStates);
  }

  componentDidUpdate(prevProps){
    if(prevProps.trips != this.props.trips){
      // parse trips again if they changed
      parseTrips(this.props.trips, this.props.setStates);
    }
  }

  render(){
    return (
      <BrowserRouter>
        <MainLayout>
          <AnimatedSwitch
            atEnter={slideTransition.atEnter}
            atLeave={slideTransition.atLeave}
            atActive={slideTransition.atActive}
            mapStyles={mapStyles}
            className={styles.switchWrapper}
          >
            <Route exact path='/' component={Home} />
            <Route exact path='/trips' component={Trips} />
            <Route exact path='/countries' component={Countries} />
            <Route exact path='/regions' component={Regions} />
            <Route exact path='/country/:id' component={Country} />
            <Route exact path='/trip/:id' component={Trip} />
            {/* TODO - add more routes for other views */}
            <Route exact path='/info' component={Info} />
            <Route path='*' component={NotFound} />
          </AnimatedSwitch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips,
});

const mapDispatchToProps = dispatch => ({
  setStates: newState => dispatch(setMultipleStates(newState)),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
