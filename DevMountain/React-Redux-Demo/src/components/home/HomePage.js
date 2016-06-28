/**
 * Created by cjpowers on 6/25/16.
 */
import React from 'react';
import {Link} from 'react-router';
import Banner from './Banner';
import SearchBar from '../common/SearchBar';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <SearchBar />
      </div>
    );
  }
}

export default HomePage;
