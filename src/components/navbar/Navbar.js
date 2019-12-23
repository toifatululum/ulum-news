import React, { Component } from 'react';
import styled from 'styled-components';
export default class Navbar extends Component {
  render() {
    const NavbarStyle = styled.div`
      .nav {
        display: flex;
        justify-content: space-between;
        height: 70px;
        align-items: center;
        padding: 0px 30px;
        $-brand {
          padding: 0px 10px;
        }
        &-start {
          display: flex;
        }
        &-end {
          display: flex;
        }
        &-link {
          padding: 0px 10px;
        }
      }
    `;
    return (
      <NavbarStyle>
        <div className='nav'>
          <div className='nav-start'>
            <div className='nav-brand'>Dashboard</div>
            <div className='nav-link'>
              <input type='text' placeholder='Search'></input>
            </div>
          </div>
          <div className='nav-end'>
            <div className='nav-link'>Dashboard</div>
            <div className='nav-link'>Profile</div>
            <div className='nav-link'>Toto Rubianto</div>
          </div>
        </div>
      </NavbarStyle>
    );
  }
}
