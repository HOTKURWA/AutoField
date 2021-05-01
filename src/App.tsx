import React from 'react';
import './App.css';
import magnifying_glass from './components/images/magnifying_glass.svg'
import SelectList from './SelectList/SelectList' 

function App() {
  const [ inputValue, setInputValue ] = React. useState('');
  const [ userData, setUserData ] = React. useState('');
  const [ imageData, setImageData ] = React. useState('');
  const [ selectedData, setSelectedData ] = React. useState(false);

  const handleChangeInput = ( e : any ) => {
    setInputValue(e. target. value);

    if (selectedData) 
      setSelectedData(false);
  }
 
  return (
    <div className="App">
      <div className='search_group'>

        <img className='search_img'  role="img" src={magnifying_glass} />

        <input className='search_field' value={inputValue} type="text" placeholder="Search" onChange={handleChangeInput}/>

        { !selectedData && inputValue?
          <SelectList setSelectedData={setSelectedData} setInputValue={setInputValue}/>
        :
          (undefined)
        }

      </div>
    </div>
  );
}

export default App;
