import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';

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
        value: '',
        matchedRecords: []
    }

    constructor(props) {
        super(props);

        const { data } = props;

        const options = {
            threshold: 0.05,
            location: 0,
            distance: 100,
            minMatchCharLength: 1,
            keys: ['value']
        }
        this.fuse = new Fuse(data, options)
    }

    componentDidMount() {
        const { value } = this.props
        const matchedRecords = this.fuse.search(value)

        this.setState({ 
            value: value.trim(),
            matchedRecords,
            showDropdown: !!value.trim() 
        })
    }

    handleInputChange = e => {
        const { value } = e.target
        const matchedRecords = this.fuse.search(value)

        this.setState({ 
            value: value.trim(),
            matchedRecords,
            showDropdown: true 
        })
    }

    onFocus = () => {
        this.setState({ 
            value: '', 
            showDropdown: false 
        })
    }

    inputNode = () => {
        const { placeholder } = this.props
        const { value } = this.state

        return (   
                <Input
                type='text'
                onFocus={this.onFocus}
                placeholder={placeholder}
                value={value}
                onChange={this.handleInputChange} />
        )
    }

    handleDropdownItemClick = record => {
        const { value } = record
        this.setState({
            value,
            showDropdown: false
        })
    }

    dropdownNode = () => {
        const { matchedRecords, showDropdown } = this.state 
        if (!showDropdown) return false

        return (
            <DropDown>
                <ul>
                    {matchedRecords.map(record => {
                        return (
                            <li key={record.key}>{record.value}</li>
                        )
                    })}
                </ul>
            </DropDown>
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
    height: 725px;
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
    top: 30%;
    left: 0;
    right: 0;
    margin: auto;
    background: rgba(255, 255, 255, 0.3);
    height: 45px;
    width: 40%;
    border: 2px solid #155799;
    border-radius: 15px;
    font-size: 25px;
    color: white;
    padding: 0 20px;
    outline: none;

    &:focus {
        outline: none;
    }
`;

const DropDown = styled.div`
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
    width: 40%;
    margin: auto;

    > ul {
        list-style-type: none;
        font-size: 20px;
        font-weight: 900;
        padding: 0;
        margin: 0;
        color: white;
        
        > li {
            list-style-type: none;
            background: rgba(255, 255, 255, 0.3);
            border: 1px solid #155799;
            margin: 0;
            padding: 10px;
            display: flex;
            justify-content: center;
            flex-items: center;
        
            &:hover {
                background: rgba(21, 153, 87, 0.3);
                cursor: pointer;
            }
            &:first-child {
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }
            &:last-child {
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
            }
            &:not(:first-child) {
                border-top: 0;
            }
        }
    }
`;
