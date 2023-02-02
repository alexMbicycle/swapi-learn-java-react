import { Typography } from '@mui/material';

import styles from './styles.module.css';

interface ContacsProps {
  mobile: string,
  email: string,
  portfolio: string
}

function Contacs(props: ContacsProps): JSX.Element {
  const { mobile, email, portfolio } = props;

  return (
    <div className={styles.contacts}>
      <Typography
        fontSize="14px"
        sx={{
          display: 'flex',
          justifyContent: 'right',
        }}
      >
        {`Mobile: ${mobile}`}
      </Typography>

      <Typography
        fontSize="14px"
        sx={{
          display: 'flex',
          justifyContent: 'right',
        }}
      >
        {`Email: ${email}`}
      </Typography>

      <Typography
        fontSize="14px"
        sx={{
          display: 'flex',
          justifyContent: 'right',
        }}
      >
        {` ${portfolio}`}
      </Typography>
    </div>
  );
}

export default Contacs;
