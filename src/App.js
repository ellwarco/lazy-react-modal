import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: undefined
    };
  }

  async openModalWindow() {
    const AriaModal = await import('react-aria-modal');
    const Map = await import('./Map');

    this.setState({
      modal:
      <AriaModal
        titleText="demo one"
        onExit={this.deactivateModal}
        initialFocus="#demo-one-deactivate"
        getApplicationNode={() => (this.app)}
        underlayStyle={{ paddingTop: '2em' }}
      >

        <div className="modal-body">
          <Map.default />
        </div>

        <footer className="modal-footer">
          <button id="demo-one-deactivate" onClick={this.deactivateModal}>
            Close Modal
          </button>
        </footer>

    </AriaModal>
    });
  }

  deactivateModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const modal = this.state.modal;

    return (
      <div>
        <div className="App" ref={ (app) => this.app = app }>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Lazy React Modal</h2>
          </div>
          <div className="vertically balanced">
            <div>
              <p>This is an example of lazily loading the code for modal windows as well as lazily loading dependencies within those modals.</p>
              <p>Have a look at the Network tab in your Developer Tools. You'll see the modal and map code isn't loaded until called upon.</p>
              <div><img src="http://j4p.us/272W410b1N2C/Screen%20Shot%202017-06-25%20at%208.24.24%20PM.png" alt="Network tab with multiple requests" /></div>
              <label>
                Lazy load <code>react-aria-modal</code> and <code>react-mapbox-gl</code>.
                <div style={{
                  marginTop: '1rem',
                  background: 'lightblue',
                  padding: '1rem'
                }}>
                  <button onClick={(event) => this.openModalWindow()}>Go</button>
                </div>
              </label>
              <p><a href="https://github.com/jpdevries/lazy-react-modal/blob/master/src/App.js#L14" target="_github">View Source</a></p>
            </div>
          </div>
        </div>
        {modal}
      </div>
    );
  }
}

export default App;
