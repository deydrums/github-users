import React from 'react';
import ReactDOM from 'react-dom';
import { GitHubUsers } from './GitHubUsers';
import './styles/styles.scss';
import 'animate.css';

console.log(process.env.REACT_APP_API_URL);

ReactDOM.render(
  <GitHubUsers />,
document.getElementById('root')
);

