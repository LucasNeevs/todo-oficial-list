import React, { useState } from 'react';
import { Button, Grommet, Heading, Box } from 'grommet';
import { Sun, Moon } from 'grommet-icons';
import ThemeGrommet from '../theme';

const App = (): JSX.Element => {
  const [theme, setTheme] = useState<string>('light');

  return (
    <Grommet theme={ThemeGrommet} background={theme} full>
      <Box fill="horizontal" align="end">
        <Button
          icon={(theme === 'light') ? <Sun /> : <Moon />}
          onClick={(): void => {
            (theme === 'light') ? setTheme('dark') : setTheme('light')
          }}
        />
      </Box>
      <Box fill="horizontal" align="center" justify="center">
        <Heading level="1" textAlign="center">Todo List</Heading>
      </Box>
    </Grommet>
  );
};

App.displayName = 'App';

export default App;