import {
  Grid, Typography,
} from '@mui/material';

export function Header(): JSX.Element {
  return (
    <Grid sx={{
      paddingTop: 0.5,
      padding: 1,
    }}
    >
      <Typography>Just actual CV</Typography>
    </Grid>
  );
}
