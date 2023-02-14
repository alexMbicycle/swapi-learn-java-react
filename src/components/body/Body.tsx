import {
  Box, Grid,
} from '@mui/material';

import Experience from './experience/Experience';
import Skills from './skills/Skills';
import Education from './education';
import Favorites from './favorites';

function Body(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1, m: 4 }}>
      <Grid container spacing={2} columns={16}>
        <Experience />
        <Education />
      </Grid>
      <Grid container spacing={2} columns={16}>
        <Skills />
        <Favorites />
      </Grid>
    </Box>
  );
}

export default Body;
