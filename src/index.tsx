import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { Link, withStyles } from '@material-ui/core';

const styles = {
  root: {
    color: 'green',
    '&:hover': { color: 'red' },
  },
};

const StyledLink = withStyles(styles)(Link) as typeof Link; // Builds
// const StyledLink = withStyles(styles)(Link);             // Fails

export const App: FunctionComponent = () => (
  <ul>
    <li>
      <Link component="button">I am a button link</Link>
    </li>
    <li>
      <StyledLink component="button">I am a styled button link</StyledLink>
    </li>
  </ul>
);

ReactDOM.render(<App />, document.getElementById('root'));
