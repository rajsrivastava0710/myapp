import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
class App extends Component {
  constructor(){
    super();
    this.state={
    monster:[],
    searchText: ''
  };
}


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users',{mode:'cors'})
    .then(response => response.json())
    .then(users => this.setState({monster:users}))
  }

  handleChange=(e)=>{
    this.setState({searchText:e.target.value})
  }

  render() {

    const {monster , searchText} = this.state;
    const filteredMonsters = monster.filter(monster => 
      monster.name.toLowerCase().includes(searchText.toLowerCase())
      )

    return (
          <div className="App">
            <span className='headText'>Dummy Monsters</span>
            <SearchBox 
             type='search'
             placeholder='Search Here..' 
             handleChange={this.handleChange} 
            />
            <CardList monsters = {filteredMonsters}/>
          </div>
        );
  }
}

export default App;
