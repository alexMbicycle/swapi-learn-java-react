import Bio from './bio';
import Contacs from './contacts';
import Experience from './experience';
import NamePosition from './name-position';
import Skills from './skills';
import styles from './styles.module.css';

const name = 'Sebastian' as const;
const surname = 'Petravic' as const;
const position = 'UI/UX Designer' as const;

const mobile = '0426502762' as const;
const email = 'sebastianpetravich@gmail.com' as const;
const portfolio = 'sebastianpetravich.com' as const;

const role = 'Lead UI/UX Designer' as const;
const company = 'VideoMyJob' as const;
const workPeriod = 'January 2019 - Current' as const;

function SimplePage(): JSX.Element {
  return (
    <>
      <header className={styles.header}>
        <NamePosition name={name} surname={surname} position={position} />
        <Contacs mobile={mobile} email={email} portfolio={portfolio} />
      </header>

      <hr className={styles.line} />

      <Bio />

      <Skills />

      <Experience role={role} company={company} workPeriod={workPeriod} />

    </>
  );
}

export default SimplePage;
