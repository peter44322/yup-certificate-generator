import React, {Component} from 'react';

class Main extends Component {
    state = {
        name: "",
        signature: '',
        course:''
    };

    change = (e,name) => {
        if (name==="name"){
            document.title = e.target.value;
        }
        this.setState({
            [name]: e.target.value
        })
    };

    render() {
        return (
            <div className="main">
                <input placeholder="Name" className="name on-cer" value={this.state.name} onChange={(e)=>this.change(e,'name')}/>
                <input placeholder="Course Name" className="course on-cer" value={this.state.course} onChange={(e)=>this.change(e,'course')}/>
                <img src="/cer.svg"/>
                <input placeholder="Signature" className='signature on-cer' onChange={(e)=>{this.change(e,'signature')}} value={this.state.image} />
            </div>
        );
    }
}

export default Main;
