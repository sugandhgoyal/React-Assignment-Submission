import React from 'react';
import {connect} from 'react-redux';

class Displayresult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        result:0
    };
  }
  componentWillReceiveProps = (nextProps) =>{
      this.setState({
          result:nextProps.result
      })
  }
  
  render() {
    return (
      <div>
       <h1>Calculated amount = {this.state.result}</h1>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Displayresult);