import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import { Typography } from '@mui/material';

import styles from './styles.module.css';

interface NamePositionProps {
  name: string,
  surname: string,
  position: string
}

function NamePosition(props: NamePositionProps): JSX.Element {
  const { name, surname, position } = props;

  return (
    <div className={styles.namePosition}>
      <StrikethroughSIcon fontSize="large" />
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          display: 'flex',
          justifyContent: 'left',
        }}
      >
        {`${name} ${surname}`}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          display: 'flex',
          justifyContent: 'left',
        }}
      >
        {`${position}`}
      </Typography>
    </div>
  );
}

export default NamePosition;
