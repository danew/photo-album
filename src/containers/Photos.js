import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Panel from '../components/Panel';
import List from '../components/List';
import Photo from '../components/Photo';

class Photos extends Component {
  static propTypes = {
    errorMessage: PropTypes.string,
    isFetching: PropTypes.bool,
    photos: PropTypes.array,
  }

  componentDidMount() {
    const {match:{params:{albumId}}, fetchPhotos} = this.props;
    fetchPhotos(albumId); 
  }

  renderPhotos = () => {
    const { photos } = this.props;
    if (!photos) return null;
    return photos.map(({ id, url, title }) => (
      <Photo key={id}>
        <img src={url} alt={title} />
        <p>{title}</p>
      </Photo>
    ));
  }

  render() {
    const { errorMessage, isFetching } = this.props;
    return (
      <Panel title="Photos" errorMessage={errorMessage} isFetching={isFetching} goBack={() => alert('hi')}>
        <List>{this.renderPhotos()}</List>
      </Panel>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.errorMessage,
  isFetching: state.isFetching,
  photos: state.photos,
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: albumId => dispatch(actions.fetchPhotos(albumId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
