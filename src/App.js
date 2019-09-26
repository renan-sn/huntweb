import React from 'react';
import './styles.css';

import Header from './components/Header';
import './components/Header/styles.css';

import Main from './pages/main';

const App = () => {
    return (
      <div className="App">
        <Header />
        <Main />
        
      </div>
    );
}

export default App;
