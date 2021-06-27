import React from 'react';

import PropTypes from 'prop-types';
import s from './Statistic.module.css'



export const Statistics = ({ title, stats }) =>
(
  <section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}

    <ul className={s.statList}>
      {stats.map(({ id, label, percentage }) =>
        <li key={id} className={`${s.item} ${s[id]}`}>
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}</span>
        </li>
      )}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}


Statistics.defaultProps = {
  title: "",
}

