import React, { Component } from "react";
import axios from "axios";
import "./Components.css";
import _ from "lodash";

class JobOpenings extends Component {
  state = {
    openings: [], query : "", query2: "",
  };
  componentDidMount() {
    axios
      .get("https://refertest.pythonanywhere.com/job/openings")
      .then((res) => {
        console.log(res.data);
        this.setState({
          openings: res.data.data,
        });
      });
  }

  setQuery = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    this.setState({
      query: e.target.value,
    });
  }

  setQuery2 = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    this.setState({
      query2: e.target.value,
    });
  }

  render() {
    var { openings, query, query2 } = this.state;
    var jo;
    //console.log(query);
    if (openings) {
      if(query !== "" || query2 !== "") {
        jo = openings.filter(opening => {
          if (opening.designation.toLowerCase().includes(query.toLowerCase()) && query !== "" && query2 === "") {
            return opening;
          }
          else if(opening.location.toLowerCase().includes(query2.toLowerCase()) && query2 !== "" && query === "") {
            return opening;
          }
          else if(opening.designation.toLowerCase().includes(query.toLowerCase()) && opening.location.toLowerCase().includes(query2.toLowerCase()) && query2 !== "" && query !== "") {
            return opening;
          }
        }).map((opening) => {
          return (
            <div class="col-12 px-3 py-3" key={opening.id}>
              <div class="card mb-3 h-100">
                <div class="row">
                  <div class="card-body col-xl-6 h-100 col-12 px-5">
                    <h5 class="card-title fs-3 fw-bold">{opening.designation}</h5>
                    <h4 class="text-end">{opening.company}</h4>
                    <p class="card-text text-start">
                      <i class="material-icons">location_on</i> {opening.location}{" "}
                      <br /> <i class="material-icons">work</i>{" "}
                      {opening.min_experience} Years{" "}
                    </p>
                    <p class="card-text text-end fs-5 py-3 position-absolute bottom-0 end-50 d-none d-xl-flex">
                      <a href="#">
                        View Details{" "}
                        <i class="material-icons fs-6">keyboard_arrow_right</i>{" "}
                      </a>
                    </p>
                  </div>
                  <div class="card-footer bg-transparent h-100 col-xl-6 col-12">
                    <h4 class="px-3">Skills</h4>
                    <ul class="list-group list-group-horizontal">
                      <div class="row justify-content-center text-center">
                        {_.times(opening.skills.length, (i) => (
                          <li
                            class="list-group-item list-group-horizontal col-4 m-3 p-3 px-4 mx-4"
                            key={i}
                          >
                            {opening.skills[i]}
                          </li>
                        ))}
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        });
      } else {
        jo = openings.map((opening) => {
          return (
            <div class="col-12 px-3 py-3" key={opening.id}>
              <div class="card mb-3 h-100">
                <div class="row">
                  <div class="card-body col-xl-6 h-100 col-12 px-5">
                    <h5 class="card-title fs-3 fw-bold">{opening.designation}</h5>
                    <h4 class="text-end">{opening.company}</h4>
                    <p class="card-text text-start">
                      <i class="material-icons">location_on</i> {opening.location}{" "}
                      <br /> <i class="material-icons">work</i>{" "}
                      {opening.min_experience} Years{" "}
                    </p>
                    <p class="card-text text-end fs-5 py-3 position-absolute bottom-0 end-50 d-none d-xl-flex">
                      <a href="#">
                        View Details{" "}
                        <i class="material-icons fs-6">keyboard_arrow_right</i>{" "}
                      </a>
                    </p>
                  </div>
                  <div class="card-footer bg-transparent h-100 col-xl-6 col-12">
                    <h4 class="px-3">Skills</h4>
                    <ul class="list-group list-group-horizontal">
                      <div class="row justify-content-center text-center">
                        {_.times(opening.skills.length, (i) => (
                          <li
                            class="list-group-item list-group-horizontal col-4 m-3 p-3 px-4 mx-4"
                            key={i}
                          >
                            {opening.skills[i]}
                          </li>
                        ))}
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        });
      }
      
    }

    return (
      <div class="container">
        <div class="d-flex justify-content-center px-3 py-3">
          <h1 class="fw-bold db-text">Job Openings</h1>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-12">
            <div class="col-12 p-3">
              <div class="card mb-3 p-3">
                <h3 class="text-center fs-3">
                  <i class="material-icons fs-4">filter_list</i>Filters
                </h3>
                <form>
                  <div class="mb-3">
                    <label for="category" class="form-label">
                      Category
                    </label>
                    <input onChange={this.setQuery}
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="E.g. Software Engineer"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="location" class="form-label">
                      Location
                    </label>
                    <input 
                      onChange={this.setQuery2}
                      type="text"
                      class="form-control"
                      id="location"
                      placeholder="E.g. Delhi"
                    />
                  </div>
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="wfh" />
                    <label class="form-check-label" for="wfh">
                      Work From Home
                    </label>
                  </div>
                  <div class="mb-3 form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="fjobs"
                    />
                    <label class="form-check-label" for="fjobs">
                      Fresher Jobs
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-12">{jo}</div>
        </div>
      </div>
    );
  }
}

export default JobOpenings;
