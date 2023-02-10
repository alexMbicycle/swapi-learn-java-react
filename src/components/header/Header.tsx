import {
  Avatar,
  Box, Grid, Paper, styled, Typography,
} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const name = 'Ivan Ivanov';
const position = 'ReactJS Developer';
const summary = `Experienced JavaScript Developer with 5 years in the industry. 
Proficient with React. Used problem-solving aptitude to enhance application 
performance by 14%. Created data visualization tools and integrated designs. 
Increased speed of product lifecycle and 100% of the time delivered projects 
within deadline. Seeking to join BravDev to leverage experience with JavaScript 
to impress existing clients and obtain new ones. Seeking to join BravDev to 
leverage experience with JavaScript to impress existing clients and obtain new ones.
Seeking to join BravDev to leverage experience with JavaScript 
to impress existing clients and obtain new ones.
Seeking to join BravDev to leverage experience with JavaScript.`;

function Header(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1, m: 6 }}>
      <Grid container spacing={2} columns={18}>
        <Grid item xs={3.5}>
          <Item>
            <Avatar
              alt="photo"
              src="./public/static/images/photo.png"
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
              {name}
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                display: 'flex',
                justifyContent: 'left',
              }}
            >
              {position}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                display: 'flex',
                justifyContent: 'left',
              }}
            >
              {summary}
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
