import { Grid, Link, Typography } from '@mui/material';

export function Footer(): JSX.Element {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{
        padding: 1,
        paddingBottom: 0.5,
        maxWidth: 1,
        height: 40,
      }}
    >
      <Grid item xs={2}>
        <Typography>ALL RIGHTS RESERVED</Typography>
      </Grid>
      <Grid item xs={1} justifyContent="flex-end">
        <Link
          component="button"
          variant="body2"
          href="mailto:4APJIb3@gmail.com"
          underline="hover"
        >
          Mail author
        </Link>
      </Grid>
    </Grid>
  );
}
