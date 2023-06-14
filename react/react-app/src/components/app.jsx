import React, { Component } from 'react';
import Navbar from './nvbar';
import Boxes from './boxes';
class App extends Component {
    state = { 
        boxes:[
            {id:1,x:1},
            {id:2,x:2},
            {id:3,x:3},
            {id:4,x:4}
        ]
     } 
    
    constructor(){
        super();
        console.log("App - Constructor");
    }

    componentDidMount(){
        console.log("App - Mounted");
        // ajax();
        // this.setState();
    }
    handleDelete = (boxId) =>{
        // console.log("handle delete",boxId);
        const boxes = this.state.boxes.filter(
            b => b.id !== boxId
        );
        this.setState({boxes:boxes});
    }
    handleReset = () =>{
        const boxes = this.state.boxes.map(b => {
            return{
                id:b.id,
                x: 0,
            }
        });
        this.setState({boxes});
    }
    handleClickLeft = (box) => {
        // this.state.x--;
        // console.log(this.state.x);
        // this.setState({
        //     x:this.state.x-1
        // });
        // console.log("click left");
        const boxes = [...this.state.boxes];
        const k = boxes.indexOf(box);
        boxes[k] = {...boxes[k]};
        boxes[k].x --;
        this.setState({boxes});
    }
    handleClickRight = (box) => {
        // this.state.x++;
        // console.log(this.state.x);
        // this.setState({
        //     x:this.state.x+1
        // });
        // console.log("click right");
        const boxes = [...this.state.boxes];
        const k = boxes.indexOf(box);
        boxes[k] = {...boxes[k]};
        boxes[k].x ++;
        this.setState({boxes});
    }
    render() { 
        console.log("App - Rendered");
        return (
            <React.Fragment>
                <Navbar boxesCount={this.state.boxes.filter(b => b.x !== 0).length}/>
                <div className='container'>
                    <Boxes 
                        boxes = {this.state.boxes}
                        onReset = {this.handleReset}
                        onClickLeft = {this.handleClickLeft}
                        onClickRight = {this.handleClickRight}
                        onDelete = {this.handleDelete}
                    />
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;