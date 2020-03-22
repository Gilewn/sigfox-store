import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import axios from 'axios';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from "react-router-dom";

import './Sidebar.css';

class Sidebar extends Component {
    state = {
        solutions: []
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/`)
            .then(res => {
                const solutions = res.data;
                this.setState({ solutions })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <SideNav
                className="Sidebar"
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
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
                        {this.state.solutions.map((solution) =>
                            <NavItem
                                key={solution._id}>
                                <NavText style={{ color: '#7824ff' }}>
                                    <Link to={`/${solution.title}/products`}>
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
}

export default Sidebar;