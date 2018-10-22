// Header Component goes here
import React,{Component} from 'react';


class Header extends Component{
   
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="dark-Background" >
                <div  className="display-inline-input">
                    <input type="text" placeholder="Name" onChange={this.props.keypress} className="input"/>
                </div>
                <div className="display-inline-select" >
                    <select type="text" onChange={this.props.change} className="select">
                    <option val="ALL">All</option>
                    <option val="NSW">NSW</option>
                    <option val="QLD">QLD</option>
                    <option val="New York">New York</option>
                    </select>
                </div>
            </div>
        )
    }

}
export default Header;