import React, { Component } from "react";
import Select from "react-select";
import axios, { HttpStatusCode } from "axios";

const baseUrl = "https://test-front.framework.team";

export default class SomeSelectLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
      id: "",
      name: "",
    };
  }

  async getOptions() {
    const res = await axios
      .get("https://test-front.framework.team/paintings")
      .catch(function (error) {
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
      label: d.authorId,
      year: d.created,
      img: d.imageUrl,
    }));

    this.setState({ selectOptions: options });
  }

  handleChange(e) {
    if (e) {
      this.setState({
        id: e.value,
        label: e.value,
        name: e.label,
        year: e.year,
        img: baseUrl + e.img,
      });
    } else if (!e) {
      this.setState({
        id: "",
        name: "",
        year: "",
        img: "",
      });
    }
  }

  componentDidMount() {
    this.getOptions();
  }

  render() {
    // console.log(this.state.selectOptions);
    console.log(
      "this.state.id/label/name/year is",
      this.state.id,
      this.state.label,
      this.state.name,
      this.state.year
    );
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
          <img
            style={{ width: "150px", marginTop: "15px" }}
            src={this.state.img}
          />
        )}
      </div>
    );
  }
}
