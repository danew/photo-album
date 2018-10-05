import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Panel from '../components/Panel';
import List from '../components/List';
import Card from '../components/Card';
import * as actions from '../actions'

class Albums extends Component {
  static propTypes = {
    errorMessage: PropTypes.string,
    isFetching: PropTypes.bool,
    albums: PropTypes.array,
  }

  componentDidMount() {
    const {match:{params:{userId}}, fetchAlbums} = this.props;
    fetchAlbums(userId); 
  }

  renderAlbums = () => {
    const { albums } = this.props;
    if (!albums) return null;
    return albums.map(({ id, title }) => (
      <Card key={id} link={`/photos/${id}`}>
        {title}
      </Card>
    ));
  }

  render() {
    const { errorMessage, isFetching } = this.props;
    return (
      <Panel title="Albums" errorMessage={errorMessage} isFetching={isFetching} goBack={() => alert('hi')}>
        <List>{this.renderAlbums()}</List>
      </Panel>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.errorMessage,
  isFetching: state.isFetching,
  albums: state.albums,
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: userId => dispatch(actions.fetchAlbums(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
