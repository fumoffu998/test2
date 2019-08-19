import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Button from '@material-ui/core/Button';
import {styles} from './App.css';
import { makeStyles } from '@material-ui/core/styles'; 

function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}

function App() {
  const hello = () => {
    document.write("<h1>AsdDsa</h1>");

  }
  
  return (
    <div className="field">
      <Button variant="contained" color="primary" onClick={e => hello()} >Изменить</Button>
      <Welcome name="ads"/>
      <Welcome name="Dasda"/>
      <Welcome name="ADSKO"/>
    </div>
  );

}
ReactDOM.render(
      <App />,
    document.getElementById('root')
);

export default App;
