import { Typography } from '@mui/material';

import styles from './styles.module.css';

function Bio(): JSX.Element {
  return (
    <Typography
      variant="h5"
      sx={{
        display: 'flex',
        justifyContent: 'right',
      }}
    >
      <div className={styles.bio}>
        <p className={styles.sectionName}>Bio</p>
        <p className={styles.bioText}>
          Java software developer with experience in developing web
          applications using Java and the Spring framework would have a strong understanding
          of the Java programming language, the Spring framework, and its various modules
          such as Spring MVC, Spring Boot, and Spring Security. They would have experience
          in developing RESTful web services, and be familiar with web technologies such as
          HTML, CSS, and JavaScript. They would have experience with Spring dependency
          injection and be able to work with different data access technologies such as JPA
          and Hibernate. They would have knowledge of database systems such as MySQL, Oracle,
          and SQL Server, and be able to perform basic database operations and understand
          database modeling concepts.
        </p>
      </div>
    </Typography>
  );
}

export default Bio;
