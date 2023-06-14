import React, { Component } from 'react';
class Box extends Component {
    // state = {
    //     x:this.props.x,
    //     colors:['red','green','blue']
    //   } 
    constructor(){
        super();
        console.log("Box - Constructor");
    }
    componentDidMount(){
        console.log("Box - Mounted");
    }
 
    render() { 
        console.log("Box - Rendered");
        return  (
                <React.Fragment>
                    {this.props.children}
                    <div style={this.getStyles()}>{this.toString()}</div>
                    <button onClick={this.props.onClickLeft} className='btn btn-primary m-2'>left</button>
                    <button onClick={this.props.onClickRight} className='btn btn-success m-2'>right</button>
                    {/* {this.state.colors.length === 0 && <p>No colors</p>} */}
                    <button onClick={()=> this.props.onDelete(this.props.box.id)} className='btn btn-danger m-2'>Delete</button>
                    {/* {this.state.colors.map(color => (<div key={color}>{color}</div>))} */}
                </React.Fragment>
                );
    }

    getStyles(){
        let styles = {
            width:"50px",
            height:"50px",
            backgroundColor:"lightblue",
            color:"white",
            textAlign:"center",
            lineHeight:"50px",
            borderRadius:"5px",
            margin:10
        };
        if(this.props.box.x === 0){
            styles.backgroundColor = "orange";
        }
        return styles;
    }
    toString(){
        const{x} = this.props.box;
        return `x:${x}`;
    }
}
 
export default Box