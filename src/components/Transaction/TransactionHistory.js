import React from 'react';

import PropTypes from 'prop-types';

import css from './Transaction.module.css'


export const TransactionHistory = ({ items }) =>
(
  <table className={css.transaction}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    {items.map(({ id, type, amount, currency }) =>

      <tbody key={id}>
        <tr>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>

      </tbody>
    )
    }
  </table>

)



TransactionHistory.propTypes = {

  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}
