import { Grommet, Heading } from 'grommet';
import React from 'react';
import Theme from '../theme';

const App = (): JSX.Element => (
  <Grommet theme={Theme} full>
    <Heading level="1">Todo List</Heading>
  </Grommet>
);

App.displayName = 'App';

export default App;