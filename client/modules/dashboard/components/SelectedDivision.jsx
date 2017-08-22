import React from 'react';
import {browserHistory} from 'react-router';

class SelectedDivision extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            selectedDivision: this.props.state.selectedDivision
        }
    }

  componentDidMount(){
    this.setState({})
  }

    componentWillReceiveProps(nextProps) {
        if(nextProps.state.selectedDivision != this.state.selectedDivision){
            this.setState({selectedDivision: nextProps.state.selectedDivision})
        }
    }

    render() {
        return (
            <div className="container" style={{marginTop:'2%'}}>
            <div className="row center">
                <div className="dialogueMed">{this.state.selectedDivision.FaxNumber}</div>
            </div>
            </div>
    )
  }
}

export default SelectedDivision;