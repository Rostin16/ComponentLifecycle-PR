import React, { Component } from 'react';

class Lifecycle extends Component{
    
        constructor(props){
            super(props);
            this.state={name:"Skill you New Gateway to Glory! "};
        }
        componentDidMount(){
            console.log("component mount");
        }
        componentDidUpdate(){
            console.log("component update");
        }
        componentWillUnmount(){
            console.log("component will unmount");
        }
        change=()=>{
            this.setState({name:"Welcome to Red and White Multimedia Education"});
        }
    
    render(){
        return(
            <>
            <h1>Component LifeCycle.
            </h1>
            <p>{this.state.name}</p>
            <button onClick={this.change}>click!</button>
            </>

        );
    }
}

export default Lifecycle;
