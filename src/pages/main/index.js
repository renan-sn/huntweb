import React, { Component } from 'react';
import api from '../../services/api';

class Main extends Component {
  
  state = {
    user: [],
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    const get = await api.get('/users/renan-sn');

    const { name, bio, avatar_url, html_url } = get.data;

    this.setState({ user: {name, bio, avatar_url, html_url} });


    //console.log(this.state.user);
  }

  render() {
    return(
      <h3> {this.state.user.name} </h3>
    );
  };
  


}

export default Main;