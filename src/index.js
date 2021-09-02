import React from 'react';
import ReactDOM from 'react-dom';
import { GitHubUsers } from './GitHubUsers';
console.log(process.env.REACT_APP_API_URL);

ReactDOM.render(
  <GitHubUsers />,
document.getElementById('root')
);

