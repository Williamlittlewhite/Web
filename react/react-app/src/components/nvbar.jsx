import React, { Component } from 'react';
class Navbar extends Component {
    state = {  } 
    constructor(){
        super();
        console.log("Navbar - Constructor");
    }
    componentDidMount(){
        console.log("Navbar - Mounted");
    }
    render() { 
        console.log("Navbar - Rendered");
        return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Navbar <span>Boxes Count: {this.props.boxesCount}</span>
                </a>
            </div>
        </nav>

        );
    }
}
 
export default Navbar;