import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

import { dateAndTime } from '../../util/helper_fns';

import DreamRowBody from './dream_row_body';

export default class DreamsTable extends Component {
  renderDreamRows() {
    const { dreams } = this.props;

    return dreams.reverse().map(dream => {
      return (
        <tr>
          <td> { dateAndTime(dream.created_at) } </td>
          <DreamRowBody dream={dream} />
        </tr>
      )
    })

  }

  render() {
    return (
      <Table striped variant hover className='dreams-table'>
        <thead>
          <th width='200px'>Date</th>
          <th>Dream</th>
        </thead>
        <tbody> { this.renderDreamRows() } </tbody>
      </Table>
    );
  }
}
