import React  from 'react';
import moment from 'moment';

export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: moment().format('MMMM Do YYYY, h:mm:ss a')};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
      });
    }
  
    render() {
      return (
        <div>
          <h2>It is {this.state.date}.</h2>
        </div>
      );
    }
  }