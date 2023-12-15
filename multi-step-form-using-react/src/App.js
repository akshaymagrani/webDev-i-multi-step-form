import React from 'react';
import './App.css';
import Info from './Info';
import Plans from './Plans';
import AddOns from './AddOns';
import Total from './Total';
import ThankYou from './ThankYou';

function App() {
  const [isVisible, setVisibility] = React.useState('Info');

  function toggleVisibility(componentName) {
    setVisibility((prevState) => 
      prevState === componentName ? null : componentName
    );
  }

  // State to handle React form data
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phoneNo: "",
    plan: "Arcade",
    addOns: "",
    total: "",
    onlineService: false,
    extraSpace: false,
    theme: false,
    monthly_OR_yearly: false,
    monthlyRates: {
      arcade: 9,
      advanced: 12,
      pro: 15,
      onlineService: 1,
      extraSpace: 2,
      theme: 2
    },
    yearlyRates: {
      arcade: 90,
      advanced: 120,
      pro: 150,
      onlineService: 10,
      extraSpace: 20,
      theme: 20
    }
  })

  function handleChange(event) {
      const {name, type, value, checked} = event.target;
      setFormData(prevData => ({
          ...prevData,
          [name]: type === 'checkbox'? checked: value
      }))
      console.log(formData);
  }

  function onSubmit(event){
      event.preventDefault();
      console.log("submitted!");
      console.log(formData);
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
          formData = {formData}
          handleChange = {handleChange}
        />}
      {isVisible === 'Plans' && 
        <Plans 
          isVisible = {isVisible} 
          makeVisible = {toggleVisibility} 
          componentNameBack = {'Info'}
          componentNameNext = {'AddOns'}
          formData = {formData}
          handleChange = {handleChange}
        />}
      {isVisible === 'AddOns' && 
        <AddOns 
          isVisible = {isVisible} 
          makeVisible = {toggleVisibility} 
          componentNameBack = {'Plans'}
          componentNameNext = {'Total'}
          formData = {formData}
          handleChange = {handleChange}
        />}
      {isVisible === 'Total' && 
        <Total 
          isVisible = {isVisible} 
          makeVisible = {toggleVisibility} 
          componentNameBack = {'AddOns'}
          componentNameNext = {'ThankYou'}
          formData = {formData}
          handleChange = {handleChange}
          onSubmit = {onSubmit}
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
