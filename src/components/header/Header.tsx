import {
  Avatar,
  Box, Grid, Typography,
} from '@mui/material';

import { constants } from './Constants';
import { Item } from './ItemStyled';

function Header(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1, m: 6 }}>
      <Grid container spacing={2} columns={18}>
        <Grid item xs={3.5}>
          <Item>
            <Avatar
              alt="photo"
              src="/static/images/photo.png"
              sx={{
                width: 190,
                height: 190,
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={14}>
          <Item>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                display: 'flex',
                justifyContent: 'left',
              }}
            >
              {constants.name}
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                display: 'flex',
                justifyContent: 'left',
              }}
            >
              {constants.position}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                display: 'flex',
                justifyContent: 'left',
              }}
            >
              {constants.summary}
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
