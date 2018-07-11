import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Team from './components/team.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/kandebonfim/2efe731004c9311d1237e88a656a425f/raw/c3befc78feb7454f4cccb5308d38319ac77be71e/makers.json')
      .then(response => response.json())
      .then(json => {

          this.setState({
            data: json
          })


      });
  }

  render() {

    return (

      <div className="App" >
        <div>
          <div>
            {this.state.data ? this.state.data.map(team => {
              return (

                  <Team team={team}/>

              )
            }) : <p>loading...</p>}
          </div>


        </div>


      </div>
    );
  }
}


export default App;
