import { Box, Divider } from '@mui/material';

import { Project } from './Project';
import { Section } from './Section';

export function ExperienceSection(): JSX.Element {
  const text = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar '
    + 'lobortis nisl et porttitor. Maecenas in felis neque. Suspendisse et scelerisque lectus. '
    + 'Maecenas pretium felis ac massa interdum auctor. Orci varius natoque penatibus et magnis dis'
    + ' parturient montes, nascetur ridiculus mus. In ante nulla, varius in pellentesque ultrices, '
    + 'finibus eu arcu. Vivamus aliquet, justo id sollicitudin facilisis, justo eros consectetur nisi, '
    + 'in porta dolor odio in massa. Nullam in sagittis sem, eu rutrum elit. ';
  return (
    <Box>
      <Section header="EXPERIENCE" />
      <Project
        title="Token IO"
        period="June 2018 - September 2021"
        position="Group Leader"
        description={text}
      />
      <Divider />
      <Project
        title="Pollen technologies"
        period="October 2021 - Now"
        position="Backend Engineer"
        description={text}
      />
    </Box>
  );
}
