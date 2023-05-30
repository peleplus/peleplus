import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import Group743 from 'src/components/Group743/Group743';

function App() {
  return (
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={questTheme}>
          <Routes>
            <Route path="/" element={<Group743 />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  );
}

export default App;
