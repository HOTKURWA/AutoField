import React from 'react';
import './App.css';
import MagnifyingGlass from './components/images/magnifying_glass.svg'
import SelectList from './SelectList/SelectList' 

export default function App() {
  const [ inputValue, setInputValue ] = React.useState('');
  const [ selectedData, setSelectedData ] = React.useState(false);

  const handleChangeInput = ( e : any ) => {
    setInputValue(e.target.value);

    if (selectedData) 
      setSelectedData(false);
  }
 
  return (
    <div className="App">
      <div className='search_group'>

        <div className='input_field'>
          <img src={MagnifyingGlass} alt="Have no img"/>
          <input value={inputValue} type="text" placeholder="Search" onChange={handleChangeInput}/>
        </div>

        { !selectedData && inputValue?
          <SelectList setSelectedData={setSelectedData} setInputValue={setInputValue}/>
        :
          (undefined)
        }

      </div>
    </div>
  );
}
