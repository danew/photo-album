import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Panel from '../components/Panel';
import List from '../components/List';
import Card from '../components/Card';
import * as actions from '../actions'

class Users extends Component {
  static propTypes = {
    errorMessage: PropTypes.string,
    isFetching: PropTypes.bool,
    users: PropTypes.array,
  }

  componentDidMount() {
    const { fetchUsersIfNeeded } = this.props;
    fetchUsersIfNeeded();
  }

  renderUsers = () => {
    const { users } = this.props;
    if (!users) return null;
    return users.map(({ id, name }) => (
      <Card key={id} link={`/albums/${id}`}>
        {name}
      </Card>
    ));
  }

  render() {
    const { errorMessage, isFetching } = this.props;
    return (
      <Panel title="Users" errorMessage={errorMessage} isFetching={isFetching}>
        <List>{this.renderUsers()}</List>
      </Panel>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    errorMessage: state.errorMessage,
    isFetching: state.isFetching,
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUsersIfNeeded: () => dispatch(actions.fetchUsersIfNeeded()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
