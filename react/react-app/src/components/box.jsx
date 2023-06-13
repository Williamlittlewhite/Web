import React, { Component } from 'react';
class Box extends Component {
    state = {
        x:0,
        colors:['red','green','blue']
      } 
    
    handleClickLeft = () => {
        // this.state.x--;
        // console.log(this.state.x);
        this.setState({
            x:this.state.x-1
        });
        // console.log("click left");
    }
    handleClickRight = () => {
        // this.state.x++;
        // console.log(this.state.x);
        this.setState({
            x:this.state.x+1
        });
        // console.log("click right");
    }
    render() { 
        return  (
                <React.Fragment>
                    <div style={this.getStyles()}>{this.toString()}</div>
                    <button onClick={this.handleClickLeft} className='btn btn-primary m-2'>left</button>
                    <button onClick={this.handleClickRight} className='btn btn-success m-2'>right</button>
                    {this.state.colors.length === 0 && <p>No colors</p>}
                    {this.state.colors.map(color => (<div key={color}>{color}</div>))}
                </React.Fragment>
                );
    }

    getStyles(){
        let styles = {
            width:"50px",
            height:"50px",
            backgroundColor:"lightblue",
            color:"white",
            textAligh:"center",
            lineHeight:"50px",
            borderRadius:"5px",
        };
        if(this.state.x === 0){
            styles.backgroundColor = "orange";
        }
        return styles;
    }
    toString(){
        const{x} = this.state;
        return `x:${x}`;
    }
}
 
export default Box