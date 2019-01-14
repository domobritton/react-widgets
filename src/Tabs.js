import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Toggle } from './Utilities';
import Modal from './Modal';

export default class Tabs extends Component {
  render() {
    return (
      <Wrapper>
        <Toggle>
            {({on, toggle, select}) => (
                <Fragment>
                    <Button onClick={toggle} value='one'>MODAL ONE</Button>
                    {select === 'one' && 
                    <Modal on={on} toggle={toggle}>
                        <h1>HELLO MODAL ONE</h1>
                    </Modal>}
                
                    <Button onClick={toggle} value='two'>MODAL TWO</Button>
                    {select === 'two' &&
                    <Modal on={on} toggle={toggle}>
                        <h1>HELLO MODAL TWO</h1>
                    </Modal>
                    }
                    <Button onClick={toggle} value='three'>MODAL THREE</Button>
                    {select === 'three' &&
                    <Modal on={on} toggle={toggle}>
                        <h1>HELLO MODAL THREE</h1>
                    </Modal>
                    }
                </Fragment>
            )}
        </Toggle>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 720px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #232526;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Button = styled.button`
    margin: 30px;
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
