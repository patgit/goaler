import React, { Component } from 'react';

const  Welcome:React.FC = () => {
  return (
    <div>
        <h1>{ process.env.REACT_APP_NAME }</h1>
        <p>
            Welcome to { process.env.REACT_APP_NAME }, the app to control your level up. 
        </p>
    </div>
  )
}

export default Welcome
