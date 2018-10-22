import React, { Component } from 'react'

import './App.css'

import Header from './header'
import Table from './table'

import getContacts from './data/get-contacts'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      nameFilter: '',
      stateFilter: 'All',
    }
  }
// handles change in name input 
  onChangeInput = (e) =>{
        this.setState({nameFilter:e.currentTarget.value})
}
//handles change in state select dropdown
onChangeSelect=(e)=>{
  this.setState({stateFilter:e.currentTarget.value})
}

/// read the API Contents and save it in the state
componentWillMount() {
  let promise = Promise.resolve(getContacts());
  promise.then((val)=>this.setState({contacts:val}));
}

  render() {
    return (
      <div>
        {<Header  keypress={this.onChangeInput} change={this.onChangeSelect}/>}
        <div className="Toolbar" >
        </div>
        {<Table list={this.state.contacts} name={this.state.nameFilter} state={this.state.stateFilter}/>}
      </div>
    )
  }
}

export default App
