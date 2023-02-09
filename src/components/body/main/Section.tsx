import { Box, Divider, Typography } from '@mui/material';

interface SectionProps {
  header: string,
}

export function Section(props: SectionProps): JSX.Element {
  const { header } = props;
  return (
    <Box marginBottom={2}>
      <Typography variant="h5" align="right" sx={{ fontWeight: 'bold' }}>{header}</Typography>
      <Divider />
    </Box>
  );
}
