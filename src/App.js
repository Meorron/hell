import React, { Component } from 'react';
import Navbar from './Components/navbar/navbar.jsx';
import { Route } from 'react-router-dom';
import HeroList from './Components/heroList/heroList.jsx';
import AddHero from './Components/addHero/AddHero.jsx';
import Settings from './Components/settings/Settings.jsx';
import HeroPics from './Components/heroPics/HeroPics.jsx'


class App extends Component {
  constructor() {
    super();

    this.state = {
      appName: 'HeroBook',
      heroList: [
        {
          name:'funnyman',
          desc:'God of Party',
          img: "./images/funnyman.jpg"

        },
        {
          name:'Jimbo',
          desc:'Starcraft profi',
          img:"./images/geek.jpg"
          
        },
        {
          name:'Jonatan Jostar',
          desc:'Hamon master',
          img:"./images/jonathan.png"
        },
        {
          name:'superman',
          desc:'not enough to be proffesional? as Jonatan? bt is red pants are awesome',
          img: "https://im7.kommersant.ru/ISSUES.PHOTO/WEEKEND/2018/020/spw20_introd.png"
        }
      ]
    }
  }
  render() {
    let picsList = this.state.heroList.map(hero => {
        return hero.img;
    });

    return( 
      <>
        <Navbar appName={this.state.appName}/>

        <Route exact path="/"
          render={(props) => <HeroList heroes={this.state.heroList}/>}/>
        <Route path="/heroPics"
          render={(props) => <HeroPics pics={picsList}/>}/>

        <Route path="/addHero" component={AddHero}/>
        <Route path="/settings" component={Settings}/>

      </>
    );
  }
}

export default App;
