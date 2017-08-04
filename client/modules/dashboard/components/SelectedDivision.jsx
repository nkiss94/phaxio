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
            <div className="container">
                <div>{this.state.selectedDivision.Division}</div>
                <div>{this.state.selectedDivision.FaxNumber}</div>
            </div>
    )
  }
}

export default SelectedDivision;