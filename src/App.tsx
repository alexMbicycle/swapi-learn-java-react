import React from 'react';

import { Container, Divider, Grid } from '@mui/material';

import { Body, Footer, Header } from './components';

function App(): JSX.Element {
  return (
    <Grid container direction="column" justifyContent="space-between">
      <Grid item>
        <Header />
      </Grid>
      <Divider />
      <Grid item>
        <Container maxWidth="lg">
          <Body />
        </Container>
      </Grid>
      <Divider />
      <Grid item alignItems="flex-end">
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
