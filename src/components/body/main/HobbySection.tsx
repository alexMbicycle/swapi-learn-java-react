import {
  Box, Chip, Grid, Typography,
} from '@mui/material';

import { Section } from './Section';

export function HobbySection(): JSX.Element {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar '
    + 'lobortis nisl et porttitor. Maecenas in felis neque. Suspendisse et scelerisque lectus. '
    + 'Maecenas pretium felis ac massa interdum auctor.';

  return (
    <Box marginTop={2}>
      <Section header="HOBBY" />
      <Typography marginBottom={2}>{text}</Typography>
      <Grid container justifyContent="flex-start" spacing={1}>
        <Grid item>
          <Chip label="Video games" variant="outlined" />
        </Grid>
        <Grid item>
          <Chip label="Table tennis" variant="outlined" />
        </Grid>
        <Grid item>
          <Chip label="Riding a bike" variant="outlined" />
        </Grid>
        <Grid item>
          <Chip label="Making a shit" variant="outlined" />
        </Grid>
        <Grid item>
          <Chip label="Deploying on friday" variant="outlined" />
        </Grid>
      </Grid>
    </Box>
  );
}
