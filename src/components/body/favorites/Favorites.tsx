import {
  Avatar,
  Box, Grid, Paper, Stack, styled, Typography,
} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Favorites(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1, m: 4 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={13}>
          <Item>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                display: 'flex',
                justifyContent: 'left',
              }}
            >
              Favorites
            </Typography>
            <Stack direction="row" spacing={5} marginTop={2}>
              <Avatar
                alt="movie"
                src="/static/images/movie.png"
                sx={{
                  width: 110,
                  height: 110,
                }}
              />
              <Avatar
                alt="travel"
                src="/static/images/travel.png"
                sx={{
                  width: 110,
                  height: 110,
                }}
              />
            </Stack>

            <Stack direction="row" spacing={5} marginTop={2.5}>
              <Avatar
                alt="painting"
                src="/static/images/painting.png"
                sx={{
                  width: 110,
                  height: 110,
                }}
              />
              <Avatar
                alt="imagine"
                src="/static/images/imagine.png"
                sx={{
                  width: 110,
                  height: 110,
                }}
              />
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Favorites;
