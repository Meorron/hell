import React, { Component } from 'react';
import Navbar from './Components/navbar/navbar.jsx';
import { Route } from 'react-router-dom';
import HeroList from './Components/heroList/heroList.jsx';
import AddHero from './Components/addHero/AddHero.jsx';
import Settings from './Components/settings/Settings.jsx';


class App extends Component {
  constructor() {
    super();

    this.state = {
      appName: 'HeroBook',
      heroList: [
        {
          name:'Thor',
          desc:'God of Party'
        },
        {
          name:'Jimbo',
          desc:'Starcraft profi'
        }
      ]
    }
  }
  render() {
    return( 
      <>
        <Navbar appName={this.state.appName}/>

        <Route exact path="/"
          render={(props) => <HeroList heroes = {this.state.heroList}/>}/>

        <Route path="/addHero" component={AddHero}/>
        <Route path="/settings" component={Settings}/>

      </>
    );
  }
}

export default App;
