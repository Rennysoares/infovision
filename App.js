import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import Context from './src/context/Context';

export default function App() {

  const [data, setData] = useState([]);

  const settingData = (params)=> {
    setData(params)
  }

  return (
    <Context.Provider value={{data, settingData}}>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </Context.Provider>
  );
}

