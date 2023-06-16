import React, { Component } from 'react';
import { connect } from 'react-redux';

class String extends Component {
    state = {  } 
    handleClickAdd = ()=>{
        this.props.add(10);
    }
    handleClickSub = ()=>{
        this.props.sub(1);
    }

    render() { 
        return (
            <React.Fragment>

                <h3>Number:</h3>
                <div>{this.props.number}</div>
                <button onClick={this.handleClickAdd}>加</button>
                <button onClick={this.handleClickSub}>减</button>
               
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state,props) => {
    return{
        number:state.number,
    }
}

const mapDispatchToProps = {
    add: (x) =>{
        return{
            type:"add",
            value:x,
        }
    },
    sub: (x) =>{
        return{
            type:"sub",
            value:x,
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(String);
