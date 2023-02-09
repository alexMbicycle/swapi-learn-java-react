import { Grid, Slider, Typography } from '@mui/material';

interface SkillProps {
  name: string,
  progressPercents: number,
}

export function Skill(props: SkillProps): JSX.Element {
  const { name, progressPercents } = props;
  const marks = [{
    value: progressPercents,
    label: `${progressPercents}%`,
  }];
  return (
    <Grid container justifyContent="space-between" direction="column">
      <Grid item>
        <Typography>{name}</Typography>
      </Grid>
      <Grid item>
        <Slider
          size="small"
          aria-label="Restricted values"
          defaultValue={progressPercents}
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Grid>
    </Grid>
  );
}
