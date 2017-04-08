import React, { Component } from 'react';
import logo from './assets/img/Airbus-PNG-Picture.png';
import './assets/css/App.css';
import _ from 'lodash';
import './assets/css/aispec.ttf';
import ModalContractForm from './containers/ModalContractForm';
import BiddingForm from './containers/BiddingForm';
import BidTable from './containers/BidTable';
import ContractTable from './containers/ContractTable';
import { Connect } from 'uport-connect';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credential: 'null'
        };
    };

    componentWillMount() {
        const uport = new Connect('Airbus');
        uport.requestCredentials().then((credentials) => {
            this.setState( {credential : credentials} );
            console.log(credentials);
        });
    };

  render () {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Logged in as {this.state.credential.name} with address {this.state.credential.address}</h3>
        </div>

        <div className="Aligner">
            <div className="left">
              <ModalContractForm/>
              <div className="formLeft">
                <BiddingForm  />
              </div>
            </div>
        </div>

        <div className="right">
          <div className="formRight">
            <style>{"table{border: 3px solid #ccc; padding: 0 20px 25px 20px; border-radius: 10px;}"}</style>
              <div className="table">
                <ContractTable/>
              </div>
              <div className="table">
                <BidTable  />
              </div>
          </div>
        </div>

      </div>
    );

  }
}

export default App;
