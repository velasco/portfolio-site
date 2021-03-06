import React from 'react';
import styles from './entry.module.css';

const DateEntry = ({ date }) => (
  <div className={styles.dateEntry}>
    <h3>{date}</h3>
    <div className={styles.stroke} />
  </div>
);

const TimelineEntry = ({
  Icon,
  children,
  title,
  timestamp,
  divider = true,
}) => (
  <div className={styles.entry}>
    <div className={styles.thread}>
      <div className={styles.icon}>
        <Icon size={16} />
      </div>
      {divider && <div className={styles.line} />}
    </div>

    <div className={styles.contents}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        {timestamp && <span className={styles.date}>{timestamp}</span>}
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  </div>
);

export { DateEntry, TimelineEntry };
