import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image4 from './Images/image4.jpg';

export default class SearchBox extends Component {

    static propTypes = {
        value: PropTypes.string,
        placeholder: PropTypes.string,
        data: PropTypes.array.isRequired
    }

    static defaultProps = {
        data: []
    }

    state = {
        value: ''
    }

    componentDidMount() {
        const { value } = this.props

        this.setState({ value })
    }

    handleInputChange = e => {
        const { value } = e.target

        this.setState({ value })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(`Your word is ${this.state.value}`)
        this.setState({ value: ''});
    }

    dropdownNode = () => {
        const { data } = this.props

        return (
            <div className=''>
                <ul>
                    {data.map(record => {
                        return (
                            <li
                            key={record.key}>
                            {record.value}
                            </li>
                        )
                    })}
                </ul>   
            </div>
        )
    }

    inputNode = () => {
        const { placeholder } = this.props
        const { value } = this.state

        return (
            <form>
                <Input
                type='text'
                placeholder={placeholder}
                value={value}
                onChange={this.handleInputChange} />
            </form>
        )
    }

  render() {
    return (
      <SearchWrapper>
        <Image src={Image4} />
        {this.inputNode()}
        {this.dropdownNode()}
      </SearchWrapper>
    );
  }
};

const SearchWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 720px;
`;

const Image = styled.img`
    background-size: auto;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100vw;
    height: 100vh;
`;

const Input = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: rgba(255, 255, 255, 0.3);
    height: 45px;
    width: 30%;
    border: 2px solid red;
    border-radius: 15px;
    font-size: 25px;
    color: darkgray;
    padding: 0 20px;
    outline: none;
`;
