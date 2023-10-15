import React, { Component } from "react";
import Select from "react-select";
import axios, { HttpStatusCode } from "axios";

const baseUrl = "https://test-front.framework.team";

export default class SomeSelectAuthor2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
      id: "",
      name: "",
    };
  }

  async getOptions() {
    const res = await axios.get(baseUrl + "/authors").catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
    const data = res.data;

    const options = data.map((d) => ({
      value: d.id,
      label: d.name,
    }));

    // console.log(options);
    this.setState({ selectOptions: options });
  }

  handleChange(e) {
    if (e) {
      this.setState({
        id: e.value,
        name: e.label,
      });
    } else if (!e) {
      this.setState({
        id: "",
        name: "",
      });
    }
  }

  componentDidMount() {
    this.getOptions();
  }

  render() {
    // console.log(this.state.selectOptions);
    console.log("authorId is ", this.state.id);
    return (
      <div style={{ width: "300px", margin: "10px" }}>
        <Select
          options={this.state.selectOptions}
          onChange={this.handleChange.bind(this)}
          placeholder="Author"
          isClearable={true}
        />
        {this.state.value === null && HttpStatusCode >= 200 ? (
          ""
        ) : (
          <p>{this.state.name}</p>
        )}
      </div>
    );
  }
}
