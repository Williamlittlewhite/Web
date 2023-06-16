import React, { Component } from 'react';
import {connect } from 'react-redux';
class Number extends Component {
    state = {  } 
    handleClick = ()=>{
        this.props.concat('y');
    }
    render() { 
        // console.log(this.props.add(10))
        return (
            <React.Fragment>
                <h3>String:</h3>
                <div>{this.props.string}</div>
                <button onClick={this.handleClick}>添加</button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state,props)=>{
    return{
        string:state.string
    }
}

const mapDispatchToProps = {
    concat: (c) =>{
        return{
            type:"concat",
            character:c,
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Number);