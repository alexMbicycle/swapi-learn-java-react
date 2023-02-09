import { Container, Grid } from '@mui/material';

import { Bio } from './Bio';
import { BodyHead } from './BodyHead';
import { Main } from './main';

export function Body(): JSX.Element {
  return (
    <Container sx={{ minHeight: 800, marginBottom: 4 }}>
      <BodyHead />
      <Grid
        container
        sx={{
          paddingTop: 4,
        }}
      >
        <Grid item xs={4} justifyContent="flex-start">
          <Bio />
        </Grid>
        <Grid item xs={8}>
          <Main />
        </Grid>
      </Grid>
    </Container>
  );
}
