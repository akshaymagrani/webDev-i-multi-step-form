import React from 'react';
import './App.css';
import Info from './Info';
import Plans from './Plans';
import AddOns from './AddOns';
import Total from './Total';
import ThankYou from './ThankYou';

function App() {
  const [isVisible, setVisibility] = React.useState(null);

  function toggleVisibility(componentName) {
    setVisibility((prevState) => 
      prevState === componentName ? null : componentName
    );
  }

  return (
    <main>
    {/* Sidebar start */}
      <section className="gr">
        <div className="sidebar">
          <div>
            <button className="btn-nav" type="button" onClick={() => toggleVisibility('Info')}>1</button>
            <div className="gr-navDiv">
              <p className="step">Step 1</p>
              <h3 className="form-title">Your info</h3>
            </div>
          </div>  
          <div>
            <button className="btn-nav" type="button" onClick={() => toggleVisibility('Plans')}>2</button>
            <div className="gr-navDiv">
              <p className="step">Step 2</p>
              <h3 className="form-title">Select plan</h3>
            </div>
          </div>
          <div>
            <button className="btn-nav" type="button" onClick={() => toggleVisibility('AddOns')}>3</button>
            <div className="gr-navDiv">
              <p className="step">Step 3</p>
              <h3 className="form-title">Add-ons</h3>
            </div>
          </div>
          <div>
            <button className="btn-nav" type="button" onClick={() => toggleVisibility('Total')}>4</button>
            <div className="gr-navDiv">
              <p className="step">Step 4</p>
              <h3 className="form-title">Summary</h3>
            </div>
          </div>
        </div>
    {/* Sidebar end */} 

      {isVisible === 'Info' && 
        <Info 
          isVisible = {isVisible} 
          makeVisible = {toggleVisibility} 
          componentNameNext = {'Plans'}
        />}
      {isVisible === 'Plans' && 
        <Plans 
          isVisible = {isVisible} 
          makeVisible = {toggleVisibility} 
          componentNameBack = {'Info'}
          componentNameNext = {'AddOns'}
        />}
      {isVisible === 'AddOns' && 
        <AddOns 
          isVisible = {isVisible} 
          makeVisible = {toggleVisibility} 
          componentNameBack = {'Plans'}
          componentNameNext = {'Total'}
        />}
      {isVisible === 'Total' && 
        <Total 
          isVisible = {isVisible} 
          makeVisible = {toggleVisibility} 
          componentNameBack = {'AddOns'}
          componentNameNext = {'ThankYou'}
        />}

      {isVisible === 'ThankYou' && 
      <ThankYou 
        isVisible = {isVisible}
        makeVisible = {toggleVisibility}
      />}

    </section>
  </main>
  );
}

export default App;
