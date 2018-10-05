import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types'

import Container from './Container';
import ErrorMessage from './ErrorMessage';
import Header from './Header';
import Loader from './Loader';

class Panel extends Component {
  static propTypes = {
    errorMessage: PropTypes.string,
    isFetching: PropTypes.bool,
    children: PropTypes.node,
  }

  renderContent = () => {
    const { errorMessage, isFetching, children } = this.props;
    if (errorMessage) return <ErrorMessage>{errorMessage}</ErrorMessage>;
    if (isFetching) return <Loader />
    if (children) return children;
    return null;
  }

  render() {
    const { title, goBack } = this.props;
    return (
      <Container>
        <Header title={title} goBack={goBack} />
        {this.renderContent()}
      </Container>
    );
  }
}

export default Panel;
