import { Component } from 'react';
import './App.css';

// Interfaces
import { SocialsLinks } from './interfaces/SocialsLinks';

// Components
import { NavBar } from './components/Navbar';
import { Profile } from './components/Profile';
import { Footer } from './components/Footer';
export default class App extends Component<any> {
  state: SocialsLinks = {
    twitter: 'https://twitter.com/notnickdev',
    github: 'https://github.com/notnickdev',
    linkedin: 'https://www.linkedin.com/in/nicholas-n-5a9187195/',
    instagram: 'https://www.instagram.com/notnickdev/',
    email: 'mailto:thisnotnicholas@gmail.com',
    snapchat: 'https://www.snapchat.com/add/notnickdev',
    keybase: 'https://keybase.io/nick241'
  };

  render() {
    return (
      <div className="App">
        <div className="nav__content">
          <NavBar
            linkedin={this.state.linkedin}
            github={this.state.github}
            keybase={this.state.keybase}
          />
        </div>
        <Profile
          email={this.state.email}
          twitter={this.state.twitter}
          snapchat={this.state.snapchat}
          instagram={this.state.instagram}
        />
        <Footer date={new Date().getFullYear()} />
      </div>
    );
  }
}
