import './App.css';
import Provider from './state/Provider';
import SideMenu from './main-screen/side-menu/SideMenu';
import Calculator from './main-screen/calculator/Calculator';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Provider>
        <SideMenu/>
        <Calculator/>
      </Provider>
    </div>
  );
}

export default App;
