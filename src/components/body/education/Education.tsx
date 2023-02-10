import {
  Box, Grid, Paper, styled, Typography,
} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const educations = [
  {
    id: 1,
    name: 'Harvard University',
  },
  {
    id: 2,
    name: 'Massachusetts Institute of Technology (MIT)',
  },
  {
    id: 3,
    name: 'Stanford University',
  },
  {
    id: 4,
    name: 'University of California Berkeley',
  },
  {
    id: 5,
    name: 'University of Oxford',
  }];

function Education(): JSX.Element {
  const universityList = educations.map((university) => (
    <div key={university.id}>
      <Typography
        variant="h6"
        sx={{
          display: 'flex',
          justifyContent: 'left',
        }}
      >
        {university.name}
      </Typography>
      {' '}
    </div>
  ));

  return (
    <Box sx={{ flexGrow: 1, m: 4 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={16}>
          <Item>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                display: 'flex',
                justifyContent: 'left',
              }}
            >
              Education
            </Typography>
            {universityList}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Education;
