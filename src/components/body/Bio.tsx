import { Avatar, Stack, Typography } from '@mui/material';

export function Bio(): JSX.Element {
  const text = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar '
    + 'lobortis nisl et porttitor. Maecenas in felis neque. Suspendisse et scelerisque lectus. '
    + 'Maecenas pretium felis ac massa interdum auctor. Orci varius natoque penatibus et magnis dis'
    + ' parturient montes, nascetur ridiculus mus. In ante nulla, varius in pellentesque ultrices, '
    + 'finibus eu arcu. Vivamus aliquet, justo id sollicitudin facilisis, justo eros consectetur nisi, '
    + 'in porta dolor odio in massa. Nullam in sagittis sem, eu rutrum elit. ';
  return (
    <Stack spacing={2}>
      <Avatar src="/avatar.png" sx={{ width: 200, height: 200 }} />
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Alexander Vaha</Typography>
      <Typography marginTop={3}>{text}</Typography>
    </Stack>
  );
}
