import React, {Component} from 'react';
import axios from 'axios';
import './Components.css';
import _ from "lodash";

class JobOpenings extends Component {
    state = {
        openings: [],
    }
    componentDidMount(){
        axios.get("https://refertest.pythonanywhere.com/job/openings")
        .then(res => {
            console.log(res.data)
            this.setState({
                openings: res.data.data
            })
        })
    }
    
  render() {
    var {openings} = this.state;
    var jo;
    if (openings) {
      jo = openings.map(opening => {
        return (
          <div class="col-lg-4 col-12 col-sm-6 px-3 py-3" key={opening.id}>
          <a href='#'>
          <div class="card border-success mb-3 h-100">
              <div class="card-header bg-transparent text-dark fs-1 border-success"><h2>{opening.company}</h2></div>
              <div class="card-body text-primary">
                <h5 class="card-title fs-3 fw-bold">{opening.designation}</h5>
                <p class="card-text text-end">Location : {opening.location} <br /> Minimum Experience : {opening.min_experience} Years </p>
              </div>
              <div class="card-footer bg-transparent border-success h-100">
              <h4>Skills</h4>
              <ul class="list-group list-group-horizontal">
              <div class="row justify-content-center text-center">
              {_.times(opening.skills.length, (i) => (
            <li class="list-group-item col-4 m-3 p-3 mx-4 bg-info" key={i}>{opening.skills[i]}</li>
          ))}
          </div>
              </ul>
              </div>
              
            </div>
            </a>
          </div>
        )
        }) 
    }
    else {
      jo = <div className="">
      <br />
      <br />
      <br />
      <center><h1><strong>Loading.......</strong></h1></center>
      </div>
    }
   
    
    return (
      <div class="container">
      <div class="d-flex justify-content-center px-3 py-3">
      <h1 class="text-primary fw-bold">Job Openings</h1>
      </div>
      <div class="row">
      {jo}
      </div>
      </div>
    )
  }
}

 
export default JobOpenings;