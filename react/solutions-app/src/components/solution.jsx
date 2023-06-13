import React, { Component } from 'react';
class Solution extends Component {
    state = { 
        solutions:[
            {key:0,number:1164, title:"加工零件",views:2930},
            {key:1,number:1165, title:"加工零件",views:2931},
            {key:2,number:1164, title:"加工零件",views:2932},
            {key:3,number:1166, title:"加工零件",views:2933},
            {key:4,number:1167, title:"加工零件",views:2934},
            {key:5,number:1168, title:"加工零件",views:2935},
            {key:6,number:1169, title:"加工零件",views:2936}, 
            {key:7,number:1170, title:"加工零件",views:2937},
        ]
     } 
    
    handleDelete =(s) => {
        const solutions = this.state.solutions.filter(solution=>solution!==s);
        this.setState({
            solutions:solutions
        })
    }
    render() { 
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>标题</th>
                        <th>阅读</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.solutions.map(solution => (
                        <tr key={solution.key}>
                            <td>{solution.number}</td>
                            <td>{solution.title}</td>
                            <td>{solution.views}</td>
                            <td><button onClick={()=>this.handleDelete(solution)} className='btn btn-danger'>删除</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
 
export default Solution;