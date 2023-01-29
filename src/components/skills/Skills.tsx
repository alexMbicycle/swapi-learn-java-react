import { Typography } from '@mui/material';

import styles from './styles.module.css';

function Skills(): JSX.Element {
  return (
    <Typography
      variant="h5"
      sx={{
        display: 'flex',
        justifyContent: 'right',
      }}
    >
      <div className={styles.skills}>
        <p className={styles.sectionName}>Skills</p>
        <p className={styles.skillsText}>
          Adobe Creative Suite (Photoshop, Illustrator, InDesign),
          Sketch, Figma, InVision, conducting user interviews, surveys, usability testing,
          creating personas, empathy maps, creating user flows, wireframes, interactive prototypes,
          storyboards, and user journeys, understanding of layout, typography, color theory, and iconography,
          creating design systems, style guides, and UI patterns, understanding of user-centered design
          principles, user research, usability testing, and accessibility.
        </p>
      </div>
    </Typography>
  );
}

export default Skills;
