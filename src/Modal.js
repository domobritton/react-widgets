import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal } from './Utilities';

export default class Modal extends Component {
    render() {
       const { children, toggle, on} = this.props;
       return (
           <Portal>
               {on && 
               <ModalWrapper>
                   <ModalCard>
                       <CloseButton onClick={toggle}>
                       X
                       </CloseButton>
                       <div>{children}</div>
                   </ModalCard>
                   <Background onClick={toggle} />             
               </ModalWrapper>
            }
           </Portal>
       ) 
    }
}

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalCard = styled.div`
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 15px;
    min-width: 320px;
    min-height: 400px;
    z-index: 10;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    outline: none;
    background: transparent;
    padding: 10px;
    cursor: pointer;
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
`;