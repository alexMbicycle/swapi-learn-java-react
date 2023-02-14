import {
  Box, Grid, Rating, Stack, Typography,
} from '@mui/material';

import { constants } from './Constants';
import { Item } from './ItemStyled';

function Skills(): JSX.Element {
  const skillList = constants.skills.map((skill) => (
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
