import React, { Component } from 'react';
import Navbar from './navbar';
import Linux from './linux';
import Django from './django';
import Web from './web';
import NotFound from './notFound';
import WebContent from './webcontent';
import { Routes,Route,Navigate } from 'react-router-dom';
import Home from './home';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <div className='container'>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path='/linux' element={<Linux/>}>
                            <Route path='homework' element={<h4>作业</h4>}></Route>
                            <Route path='terminal' element={<h4>终端</h4>}></Route>
                            <Route path='*' element={<h4>其他</h4>}></Route>
                        </Route>
                        <Route path='/django' element={<Django/>} />
                        <Route path='/web' element={<Web/>} />
                        <Route path='/web/content' element={<WebContent/>} />
                        <Route path='/404' element={<NotFound/>} />
                        <Route path='*' element={<Navigate replace to="/404"/>} />
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;