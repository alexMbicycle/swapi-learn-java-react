import { Typography } from '@mui/material';

import styles from './styles.module.css';

interface ExperienceProps {
  role: string,
  company: string,
  workPeriod: string,
}

function Experience(props: ExperienceProps): JSX.Element {
  const {
    role,
    company,
    workPeriod,
  } = props;

  return (
    <Typography
      variant="h5"
      sx={{
      }}
    >
      <div className={styles.experience}>
        <div>
          <p className={styles.sectionName}>Experience</p>
        </div>
        <div>
          <p className={styles.experienceInfo}>
            {`${role} ${company} ${workPeriod}`}
          </p>
          <p className={styles.experienceDesc}>
            Start by describing the name of the project and
            a brief overview of what it was about. Your role: Explain what your role was
            in the project, such as lead UI/UX designer, design team member, or solo designer.
            Project objectives: Describe the goals and objectives of the project, and how your
            design work helped to achieve them. Key achievements: Highlight any significant achievements
            you made during the project, such as solving a particular design problem, improving user
            experience, or increasing user satisfaction. Design process: Describe the design process
            you followed, including any tools or techniques you used, such as user research, wireframing,
            prototyping, and usability testing. Project outcomes: Discuss the results and impact of
            the project, such as increased conversion rates, improved user satisfaction, or
            increased product usage. Collaboration: If you worked with a team, mention your contributions
            to the team effort and how you collaborated with other team members to achieve the project goals.
          </p>
        </div>
      </div>
    </Typography>
  );
}

export default Experience;
