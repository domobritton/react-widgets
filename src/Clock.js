import React, { Component } from 'react'
import styled from 'styled-components';

export default class Clock extends Component {

    state = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        military: true,
    }

    componentDidMount() {
        setInterval(() => {
            this.getTime();
        }, 1000);
    }

    getTime = () => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        this.setState({ hours, minutes, seconds });
    }

    handleClick = () => {
        this.setState((prevState => ({
            military: !prevState.military
        })));
    }

    twelveHourClock = () => {
        const { hours, minutes, seconds } = this.state;
        let stdHours, amPm;
        hours < 12 ? amPm = `A M` : amPm = `P M`;
        stdHours = hours % 12;
        if (stdHours === 0) { stdHours = 12; }
        return (
            <Time>
                <Hour>{`${stdHours} : `}</Hour>
                <Minute>{minutes < 10 ? `0${minutes} : ` : `${minutes} : `}</Minute>
                <Second>{seconds < 10 ? `0${seconds}` : seconds}</Second> 
                <AMPM>{amPm}</AMPM>
            </Time> 
        )    
    }

    clock = () => {
        const { hours, minutes, seconds } = this.state;
        return (
            <Time>
                <Hour>{hours < 10 ? `0${hours} : ` : `${hours} : ` }</Hour>
                <Minute>{minutes < 10 ? `0${minutes} : ` : `${minutes} : `}</Minute>
                <Second>{seconds < 10 ? `0${seconds}` : seconds}</Second>
            </Time>
        )
    }

  render() {
      const { military } = this.state;

      return (
          <Wrapper>
              {military ? this.clock() : this.twelveHourClock()}
            <Button 
            onClick={this.handleClick}>
                {military ? `12 hour` : `24 hour`}
            </Button>
          </Wrapper>
      )
  }
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
`;

const Time = styled.div`
    font-size: 120px;
    color: darkgray;
    display: flex;
`;

const Button = styled.button`
    padding: 10px;
    background: lightblue;
    border: 2px solid lightblue;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 900;
    color: white;
    outline: none;
    width: 120px;
`;

const Hour = styled.div`
`;

const Minute = styled.div`
`;

const Second = styled.div`
`;

const AMPM = styled.div`
    
`;
