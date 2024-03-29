import React, { Component } from "react";

class Counter extends Component {
    state = {
        count:0,
         tags:['tag1','tag2','tag3']
    }
    
    handleIncrement= product=>{
        console.log(product);
        console.log('Increment Clicked',this);
     
        this.setState({count:this.state.count })
    }
    doHandleIncrement = ()=>{
        this.handleIncrement({id:1})
    }
    
  render() {
   
    return (
      <div>
        <span className={ this.getBadgeClasses() }>{this.formatCount()}</span>
        <button  className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  } 

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "primary" : "warning";
        return classes;
    }

//   onClick={this.handleIncrement({id:1})}

    
formatCount(){
    const {count}=this.state
    return count ===0?'Zero':count
    }
 }
export default Counter;
 