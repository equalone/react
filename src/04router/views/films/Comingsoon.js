import React, { Component } from 'react'
import axios from 'axios';

export default class Comingsoon extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get(
        "/ajax/mostExpected?limit=10&offset=0&token=&optimus_uuid=C5CFD010424911EDAEF1533A8B2868444C9D66B8A1A64782A926BDB5C69A902E&optimus_risk_level=71&optimus_code=10"
      )
      .then((res) => {
        console.log(res.data);
      });
  }

  render() {
    return <div>Comingsoon</div>;
  }
}
