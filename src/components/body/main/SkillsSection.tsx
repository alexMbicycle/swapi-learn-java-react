import { Box, Stack } from '@mui/material';

import { Section } from './Section';
import { Skill } from './Skill';

export function SkillsSection(): JSX.Element {
  return (
    <Stack marginTop={2} spacing={-2}>
      <Box marginBottom={2}>
        <Section header="SKILLS" />
      </Box>
      <Skill name="Windows" progressPercents={80} />
      <Skill name="Linux" progressPercents={76} />
      <Skill name="Git" progressPercents={73} />
      <Skill name="Java" progressPercents={85} />
    </Stack>
  );
}
