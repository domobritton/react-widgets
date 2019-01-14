import React, { Component } from 'react'
import styled from 'styled-components';

export default class Clock extends Component {

    state = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        military: false,
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
                <Hour>{`${stdHours}`}</Hour>
                <Minute>{minutes < 10 ? ` : 0${minutes}` : ` : ${minutes}`}</Minute>
                <Second>{seconds < 10 ? ` : 0${seconds}` : ` : ${seconds}`}</Second> 
                <AMPM>{amPm}</AMPM>
            </Time> 
        )    
    }

    clock = () => {
        const { hours, minutes, seconds } = this.state;
        return (
            <Time>
                <Hour>{hours < 10 ? `0${hours}` : `${hours}` }</Hour>
                <Minute>{minutes < 10 ? ` : 0${minutes}` : `  : ${minutes}`}</Minute>
                <Second>{seconds < 10 ? ` : 0${seconds}` : ` : ${seconds}`}</Second>
            </Time>
        )
    }

  render() {
      const { military } = this.state;

      return (
        <Wrapper>
            <TimeWrapper>
                {military ? this.clock() : this.twelveHourClock()}
            </TimeWrapper>
            <Button 
                onClick={this.handleClick}>
                {military ? `12 hour` : `24 hour`}
            </Button>
        </Wrapper>
      )
  }
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 720px;
`;

const TimeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #159957;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #155799, #159957);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #155799, #159957); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: 720px;
`;

const Time = styled.div`
    font-size: 150px;
    color: darkgray;
    display: flex;
    justify-content: space-around;
`;

const Button = styled.button`
    position: absolute;
    bottom: 50px;
    right: 40px;
    padding: 10px;
    background: #155799;
    border: 2px solid #155799;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 900;
    color: white;
    outline: none;
    width: 120px;
    cursor: pointer;
    transition: all 250ms ease-in-out;

    &:hover {
        background: #1B5B96;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
`;

const Text = styled.div`
    text-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    flex: 0 0 275px;
    display: block;
`;

const Hour = styled(Text)`
    text-align: right;
    padding-right: 25px;
`;

const Minute = styled(Text)`
`;

const Second = styled(Text)`
`;

const AMPM = styled(Text)`
    font-size: 80px;
`;
