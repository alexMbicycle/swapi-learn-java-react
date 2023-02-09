import { Box, Grid, Typography } from '@mui/material';

interface ProjectProps {
  title: string,
  period: string,
  position: string,
  description: string,
}

export function Project(props: ProjectProps): JSX.Element {
  const {
    title, period, position, description,
  } = props;
  return (
    <Box paddingBottom={2} paddingTop={2}>
      <Grid container justifyContent="space-between">
        <Grid xs={8} item>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{title}</Typography>
        </Grid>
        <Grid xs={4} alignItems="flex-start">
          <Typography sx={{ fontWeight: 'bold' }}>{period}</Typography>
          <Typography sx={{ fontWeight: 'bold' }}>{position}</Typography>
        </Grid>
      </Grid>
      <Typography marginTop={1}>{description}</Typography>
    </Box>
  );
}
