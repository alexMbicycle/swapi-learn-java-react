import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';
import {
  Box, Grid, Paper, Stack, styled, Typography,
} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const email = 'ivanov.ivan@gmail.com';
const gihub = 'ivanov.ivan';
const intagram = 'ivanov';
const githubIo = 'ivanov.github.io';

function Contacts(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1, m: 4 }}>
      <Grid item xs={12}>
        <Item>
          <Typography
            variant="h5"
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 7 }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
              >
                <EmailIcon sx={{
                  marginTop: 0.6,
                  marginRight: 0.5,
                }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {email}
                </Typography>
              </Stack>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
              >
                <GitHubIcon sx={{
                  marginTop: 0.6,
                  marginRight: 0.5,
                }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {gihub}
                </Typography>
              </Stack>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
              >
                <InstagramIcon sx={{
                  marginTop: 0.6,
                  marginRight: 0.5,
                }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {intagram}
                </Typography>
              </Stack>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
              >
                <LinkIcon sx={{
                  marginTop: 0.6,
                  marginRight: 0.5,
                }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {githubIo}
                </Typography>
              </Stack>
            </Stack>
          </Typography>
        </Item>
      </Grid>
    </Box>
  );
}

export default Contacts;
