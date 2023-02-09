import { Container, Divider, Grid } from '@mui/material';

import { ExperienceSection } from './ExperienceSection';
import { HobbySection } from './HobbySection';
import { SkillsSection } from './SkillsSection';

export function Main(): JSX.Element {
  return (
    <Container>
      <ExperienceSection />
      <Divider />
      <Grid
        container
        justifyContent="space-between"
        paddingTop={2}
      >
        <Grid item xs={4}>
          <SkillsSection />
        </Grid>
        <Grid item xs={7}>
          <HobbySection />
        </Grid>
      </Grid>
    </Container>
  );
}
