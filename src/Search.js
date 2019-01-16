import React, { Component } from 'react';
import SearchBox from './SearchBox';

export default class Search extends Component {

    data = [
        {
            key: 'john',
            value: 'John Doe'
        },
        {
            key: 'jane',
            value: 'Jane Doe'
        },
        {
            key: 'mary',
            value: 'Mary Phillips'
        },
        {
            key: 'robert',
            value: 'Robert'
        },
        {
            key: 'karius',
            value: 'Karius'
        },
    ];

  render() {
    return (
      <div>
        <SearchBox
            placeholder='placeholder'
            value='Doe'
            data={this.data} />
      </div>
    );
  }
}
