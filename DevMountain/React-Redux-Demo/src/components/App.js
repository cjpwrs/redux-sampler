/**
 * Created by cjpowers on 6/25/16.
 */
import React, {PropTypes} from 'react';
import Header from './common/Header';
import SubHeader from './common/SubHeader';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
