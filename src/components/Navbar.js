import React, {Component} from 'react';
import axios from 'axios';
import './Components.css';

class Navbar extends Component {
  state = { user: [] }
  componentDidMount(){
    axios.get("https://refertest.pythonanywhere.com/user/data")
    .then(res => {
        console.log(res.data)
        this.setState({
            user: res.data.data
        })
    })
}
  render() {
    var {user} = this.state;
    var jo;
    if(user) {
      jo = <div class="row justify-content-center">
        <div class="offcanvas-header">
        
      
    </div>
    
    <div class="offcanvas-body text-center">
    <img src={user.pictureUrl} class="img-fluid" height={300} width={300} />
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">{user.name}</h5>
      <p>College: {user.college}</p>
    </div>
      </div>
    }
    else {

    }
    return (
      <div>
      <div class="offcanvas offcanvas-end bg-info" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  {jo}
</div>
        <nav class="navbar navbar-expand-xl">
  <div class="container">
    <a class="navbar-brand fs-1" href="#">Job Openings</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav1" aria-controls="nav1" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nav1">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 offset-lg-3 fs-4" >
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <form class="d-none d-xl-flex" role="search">
        <a class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
        <h3 class="text-dark py-3"><img src={user.pictureUrl} height={50} width={50} />  {user.name}</h3>
        </a>
      </form>

    </div>
  </div>
</nav>
</div>
    );
  }
}

export default Navbar;

