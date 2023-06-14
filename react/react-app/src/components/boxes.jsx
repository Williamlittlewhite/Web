import React, { Component } from 'react';
import Box from './box';
class Boxes extends Component {
    constructor(){
        super();
        console.log("Boxes - Constructor");
    }
    componentDidMount(){
        console.log("Boxes - Mounted");
    }
 
    render() { 
        console.log("Boxes - Rendered");
        return (
        <React.Fragment>
            <button onClick={this.props.onReset} 
            style={{marginBottom:"15px"}} className='btn btn-info'>Reset</button>
            <br />
            {
            /* <Box />
            <Box />
            <Box />
            <Box /> */
            this.props.boxes.map(box => (
                <Box key={box.id}
                    box = {box} 
                    // x={box.x}
                    // checked = {false}
                    // id = {box.id}
                    onClickLeft = {()=>this.props.onClickLeft(box)}
                    onClickRight = {()=>this.props.onClickRight(box)}
                    onDelete = {this.props.onDelete}
                >
                <h1>Box:</h1>
                <p>#{box.id}</p>
                </Box>
            ))
            }
        </React.Fragment>
        );
    }
}
 
export default Boxes;