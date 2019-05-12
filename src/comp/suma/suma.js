import React from 'react';
import PropTypes from 'prop-types';

class Suma extends React.Component {
  constructor(props) {
    super(props);
    const { initialValue1, initialValue2 } = props;
    this.state = {
      value1: initialValue1,
      value2: initialValue2,
      resultado: initialValue1 + initialValue2
    };
  }

  handleChangeValue = ev => this.setState({
    [ev.target.name]: parseInt(ev.target.value),
  }, this.handleSumar);

  handleSumar = () => {
    this.setState(oldState => ({
        resultado: oldState.value1 + oldState.value2
      }),
      this.props.onSumar(this.state.resultado))
  };

  render() {
    return (
      <div>
        <input name="value1" value={ this.state.value1 } onChange={ this.handleChangeValue } />
        <input name="value2" value={ this.state.value2 } onChange={ this.handleChangeValue } />

        <p>Resultado: { this.state.resultado } </p>
      </div>
    );
  }
}

Suma.propTypes = {
  initialValue1: PropTypes.number,
  initialValue2: PropTypes.number,
  onSumar: PropTypes.func
};

Suma.defaultProps = {
  initialValue1: 0,
  initialValue2: 0,
  sumar: () => null
}

export default Suma;
