import {
  Box, Grid, Paper, Rating, Stack, styled, Typography,
} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const skills = [
  {
    id: 1,
    name: 'ReactJS',
    value: 3.5,
  },
  {
    id: 2,
    name: 'NodeJS',
    value: 4,
  },
  {
    id: 3,
    name: 'TypeScript',
    value: 3,
  },
  {
    id: 4,
    name: 'JavaScript',
    value: 4,
  },
  {
    id: 5,
    name: 'HTML + CSS',
    value: 3.5,
  },
  {
    id: 6,
    name: 'Redux',
    value: 3.5,
  },
  {
    id: 7,
    name: 'JSX',
    value: 2.5,
  },
  {
    id: 8,
    name: 'Git',
    value: 4.5,
  }];

function Skills(): JSX.Element {
  const skillList = skills.map((skill) => (
    <div key={skill.id}>
      <Typography
        variant="h6"
        sx={{
          display: 'flex',
          justifyContent: 'left',
        }}
      >
        {skill.name}
        <Rating name="half-rating-read" defaultValue={skill.value} precision={0.5} readOnly />
      </Typography>
      {' '}
    </div>
  ));

  return (
    <Box sx={{ flexGrow: 1, m: 4 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={14}>
          <Item>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                display: 'flex',
                justifyContent: 'left',
              }}
            >
              Skills
            </Typography>
            <Stack direction="row" spacing={5}>
              <Stack>
                {skillList}
              </Stack>
              <Stack>
                {skillList}
              </Stack>
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Skills;
