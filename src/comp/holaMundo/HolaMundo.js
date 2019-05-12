import React from 'react';
import PropTypes from 'prop-types';

const HolaMundo = ({ nombre, onButtonClick }) => (
  <>
    <div>Hola { nombre }</div>
    <button onClick={ onButtonClick }>Guardar</button>
  </>
);

HolaMundo.propTypes = {
  nombre: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func
};

HolaMundo.defaultProps = {
  onButtonClick: () => console.log('default')
};

export default HolaMundo;
