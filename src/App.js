import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { NavigationDrawer } from 'react-md';
import {
  Button,
  DialogContainer,
  Divider,
  TextField,
  Toolbar,
} from 'react-md';

import { PouchDB, Find } from "react-pouchdb";
//import { PouchDB, Find } from 'react-pouchdb/browser';
import Input from './Input';

class App extends Component {

  state = { visible: false, pageX: null, pageY: null };

  show = (e) => {
    // provide a pageX/pageY to the dialog when making visible to make the
    // dialog "appear" from that x/y coordinate
    let { pageX, pageY } = e;
    if (e.changedTouches) {
      pageX = e.changedTouches[0].pageX;
      pageY = e.changedTouches[0].pageY;
    }

    this.setState({ visible: true, pageX, pageY });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  updateInputValue(evt) {
    //debugger;
    this.setState({
      inputValue: evt
    });

    console.log(this.state.inputValue)
  }

  render() {
    const { visible, pageX, pageY } = this.state;

    return (
    <NavigationDrawer
      toolbarTitle="react-md with create-react-app v2"
      drawerTitle="react-app"
    >
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>

        <div>
          <Button raised onClick={this.show} aria-controls="simple-full-page-dialog">
            Open the Dialog
          </Button>
          <DialogContainer
            id="simple-full-page-dialog"
            visible={visible}
            pageX={pageX}
            pageY={pageY}
            fullPage
            onHide={this.hide}
            aria-labelledby="simple-full-page-dialog-title"
          >
            <Toolbar
              fixed
              colored
              title="New Event"
              titleId="simple-full-page-dialog-title"
              nav={<Button icon onClick={this.hide}>close</Button>}
              actions={<Button flat onClick={this.hide}>Save</Button>}
            />
            <section className="md-toolbar-relative">
              <PouchDB name="todoapp">
                <Input />
              </PouchDB>
              <TextField id="event-email" placeholder="Email" block paddedBlock />
              <Divider />
              <TextField id="event-name" placeholder="Event name" block paddedBlock />
              <Divider />
              <TextField id="event-desc" placeholder="Description" block paddedBlock rows={4} onChange={evt => this.updateInputValue(evt)} />
            </section>
          </DialogContainer>
        </div>
      </div>
    </NavigationDrawer>
    );
  }
}

export default App;
