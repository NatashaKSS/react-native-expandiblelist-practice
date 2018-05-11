import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import LibraryListType from '../reducers/LibraryListType';

type Props = {
  libraries: Array<Object>,
  library: LibraryListType,
};

class LibraryList extends Component<Props> {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={() => <ListItem library={this.props.library} />}
      />
    );
  }
}

// Takes our global state object from the Redux store and map it to props here.
const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
