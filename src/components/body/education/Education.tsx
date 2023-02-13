import {
  Box, Grid, Typography,
} from '@mui/material';

import { constants } from './Constants';
import { Item } from './ItemStyled';

function Education(): JSX.Element {
  const universityList = constants.educations.map((university) => (
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
