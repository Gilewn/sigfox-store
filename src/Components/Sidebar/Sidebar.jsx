import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from "react-router-dom";

import './Sidebar.css';

const Sidebar = (props) => {
    return (
        <SideNav className="Sidebar">
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <Link to={`/`}>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', color: '#7824ff' }} />
                        </Link>
                    </NavIcon>
                    <NavText style={{ color: '#7824ff' }}>
                        All Solutions
                         </NavText>
                    {props.items.map((solution) =>
                        <NavItem
                            key={solution._id}>
                            <NavText style={{ color: '#7824ff' }}>
                                <Link to={`/${solution.title}/products`} >
                                    {solution.title}
                                </Link>
                            </NavText>
                        </NavItem>
                    )}
                </NavItem>
                <NavItem eventKey="products">
                    <NavIcon>
                        <Link to={`/products`} >
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em', color: '#7824ff' }} />
                        </Link>
                    </NavIcon>
                    <NavText style={{ color: '#7824ff' }}>
                        Find all our products
                        </NavText>
                    <NavItem >
                        <NavText style={{ color: '#7824ff' }}>
                            <Link to={`/products`}>
                                All Products
                                </Link>
                        </NavText>
                    </NavItem>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
}

export default Sidebar;