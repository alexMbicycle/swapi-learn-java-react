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

const projects = [
  {
    id: 1,
    name: 'Nursery Management System',
  },
  {
    id: 2,
    name: 'Research Services Architecture Security',
  },
  {
    id: 3,
    name: 'EdWeb Decommissioning',
  },
  {
    id: 4,
    name: 'Maths - JCMB 5205 - Synergy Tables',
  },
  {
    id: 5,
    name: 'Remote Support Camera Refresh 2023',
  },
  {
    id: 6,
    name: 'Wiki Annual Upgrade 22/23',
  }];

function Experience(): JSX.Element {
  const projectList = projects.map((project) => (
    <div key={project.id}>
      <Typography
        variant="h6"
        sx={{
          display: 'flex',
          justifyContent: 'left',
        }}
      >
        {project.name}
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
              Experience
            </Typography>
            {projectList}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Experience;
