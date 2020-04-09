import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from "react-router-dom";

import './Sidebar.css';

class Sidebar extends Component {
    state = {
        expanded: true
    }

    render() {
        return (
            <SideNav
                className="Sidebar"
                expanded={this.state.expanded}
                onToggle={(expanded) => {
                    this.setState({ expanded });
                }}>
                <SideNav.Toggle />
                <SideNav.Nav>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <Link to={`/`}>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', color: '#7824ff' }} />
                            </Link>
                        </NavIcon>
                        <NavText>
                            All Solutions
                         </NavText>
                        {this.props.items.map((solution) =>
                            <NavItem
                                key={solution._id}>
                                <NavText>
                                    <Link to={`/${solution.title}/products`} >
                                        {solution.title}
                                    </Link>
                                </NavText>
                            </NavItem>
                        )}
                    </NavItem>
                    <NavItem eventKey="products">
                        <NavIcon>
                            <Link to={`/All_products`} >
                                <i className="fa fa-fw fa-cart-plus" style={{ fontSize: '1.75em', color: '#7824ff' }} />
                            </Link>
                        </NavIcon>
                        <NavText>
                            Find all our products
                        </NavText>
                        <NavItem >
                            <NavText>
                                <Link to={`/All_products`}>
                                    All Products
                                </Link>
                            </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        )
    }
}

export default Sidebar;