import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Grid, Typography } from '@mui/material';

export function BodyHead(): JSX.Element {
  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{
        padding: 1,
      }}
    >
      <Grid item xs={8} padding={2}>
        <Typography variant="h3">Just another one experienced Java software engineer</Typography>
      </Grid>
      <Grid item xs={4} padding={2} display="flex" alignItems="flex-end" justifyContent="flex-end">
        <LinkedInIcon />
        <TelegramIcon />
        <InstagramIcon />
        <FacebookIcon />
      </Grid>
    </Grid>
  );
}
