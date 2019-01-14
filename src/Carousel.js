import React, { Component } from 'react'
import styled from 'styled-components';
import Image1 from './Images/image1.jpg';
import Image2 from './Images/image2.jpg';
import Image3 from './Images/image3.jpg';

export default class Carousel extends Component {

    state = {
        images: [Image1, Image2, Image3],
        number: 0,
        auto: false
    }

    interval;

increment = () => {
    this.setState(prevProps => ({
        number: (prevProps.number + 1) % 3
    }));
}

decrement = () => {
    const { number } = this.state;
    if (number === 0) {
        this.setState({ number: 2 })
    } else {
        this.setState(prevProps => ({
            number: (prevProps.number - 1) % 3
        }));
    }
}

handleClick = () => {
    this.setState(prevProps => ({
        auto: !prevProps.auto
    }));
    setTimeout(() => { this.autoCarousel()}, 0);
}

autoCarousel = () => {
    if (this.state.auto) {
        this.interval = setInterval(() => {
            this.setState(prevProps => ({
                number: (prevProps.number + 1) % 3
            }))   
        }, 3000);
    } else {
        clearInterval(this.interval);
    }
}

  render() {
      const { auto } = this.state;
    return (
      <Wrapper>
          {!auto && <Left onClick={this.increment}>LEFT</Left>}
        <Image src={this.state.images[this.state.number]} alt='image1'/>
        {!auto && <Right onClick={this.decrement}>RIGHT</Right>} 
        <Auto onClick={this.handleClick}>{auto ? `MANUAL` : `AUTO`}</Auto>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%:
    max-height: 90vh;
`;

const Image = styled.img`
    background-size: auto;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100vw;
    height: 90vh;
`;

const Button = styled.button`
    position: absolute;
    top: 50%;
    z-index: 10;
    background: transparent;
    padding: 15px;
    border: 2px solid white;
    border-radius: 5px;
    font-size: 18px;
    color: white;
    outline: none;
    cursor: pointer;
    transition: all 250ms ease-in-out;

    &:hover {
        border-color: #155799;
        color: #155799;
    }
`;

const Auto = styled.button `
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

const Left = styled(Button)`
    left: 5%;
`;

const Right = styled(Button)`
    right: 5%;
`;
