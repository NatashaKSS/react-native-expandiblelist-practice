import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  // @param library     is the library we're currently trying to render
  renderRow(library) {
    return <ListItem library={library} />
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

// Takes our global state object from the Redux store and map it to props here.
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
