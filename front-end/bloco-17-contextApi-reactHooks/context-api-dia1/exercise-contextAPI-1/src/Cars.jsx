import PropTypes from 'prop-types';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import React, { Component } from 'react';
import MyContext from './MyContext';

class Cars extends Component {
  render() {
    return (
    <div>
      {
        <MyContext.Consumer>
          {
            (value) => {
              const { cars: {red, blue, yellow}, moveCar } = value;
              return (
                <><div>
                  <img
                    className={red ? 'car-right' : 'car-left'}
                    src={carRed}
                    alt="red car" />
                  <button
                    onClick={() => moveCar('red', !red)}
                    type="button"
                  >
                    Move
                  </button>
                </div><div>
                    <img
                      className={blue ? 'car-right' : 'car-left'}
                      src={carBlue}
                      alt="blue car" />
                    <button
                      onClick={() => moveCar('blue', !blue)}
                      type="button"
                    >
                      Move
                    </button>
                  </div><div>
                    <img
                      className={yellow ? 'car-right' : 'car-left'}
                      src={carYellow}
                      alt="yellow car" />
                    <button
                      onClick={() => moveCar('yellow', !yellow)}
                      type="button"
                    >
                      Move
                    </button>
                  </div></>
              )
            }
          }
        </MyContext.Consumer>
      }
      
    </div>
    )
  }
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

export default Cars;