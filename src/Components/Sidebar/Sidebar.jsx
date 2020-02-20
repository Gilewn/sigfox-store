import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './Sidebar.css';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Sidebar = () => {
    const navStyle = {
        position: 'relative',
        backgroundColor: 'transparent',
        height: '60vh',
        top: '10vh'
    };
    
    return (
        <SideNav
            style={navStyle}
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        All Solutions
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        All Products
                    </NavText>
                    <NavItem eventKey="charts/linechart">
                        <NavText>
                            Smart Cities
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts/barchart">
                        <NavText>
                            Smart Buildings
                        </NavText>
                    </NavItem>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
}

export default Sidebar;