import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component {
    renderItem(library) {
        return <ListItem library={library} />
    }

    render() {
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(library) => library.id}
            />
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries }
}

// connect call returns a function and we call that function with LibraryList
export default connect(mapStateToProps)(LibraryList);