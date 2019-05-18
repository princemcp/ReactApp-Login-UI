import React from "react";
import Form from "../../Common/forms";
import NavBarTop from "../../Common/navBarTop";
import { Link } from "react-router-dom";

class dashboard extends Form {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <NavBarTop />
        <div className="container-fluid">
          <h3>Dashboard</h3>
          <div className="row justify-content-center ">
            <div className="col-xs-1 mx-3 p-2 ">
              <div className="card">
                {/* <img
                  className="card-img-top"
                  src="http://lorempixel.com/200/200/sports/"
                /> */}
                <div className="card-body">
                  <h4 className="card-title text-center">Sequrity</h4>
                  {/* <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illo, quas.
                  </p> */}

                  <Link className="btn btn-warning" to="/dashboard">
                    Go To Sequrity
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xs-1 mx-3 p-2 ">
              <div className="card">
                {/* <img
                  className="card-img-top"
                  src="http://lorempixel.com/200/200/sports/"
                /> */}
                <div className="card-body">
                  <h4 className="card-title text-center">Setup</h4>
                  {/* <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illo, quas.
                  </p> */}
                  <Link className="btn btn-warning" to="/dashboard">
                    Go To Setup
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xs-1 mx-3 p-2 ">
              <div className="card">
                {/* <img
                  className="card-img-top"
                  src="http://lorempixel.com/200/200/sports/"
                /> */}
                <div className="card-body">
                  <h4 className="card-title text-center">Account Managment</h4>
                  {/* <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illo, quas.
                  </p> */}
                  <Link className="btn btn-warning" to="/dashboard">
                    Go To Account Managment
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xs-1 mx-3 p-2 ">
              <div className="card">
                {/* <img
                  className="card-img-top"
                  src="http://lorempixel.com/200/200/sports/"
                /> */}
                <div className="card-body">
                  <h4 className="card-title text-center">Transaction</h4>
                  {/* <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illo, quas.
                  </p> */}
                  <Link className="btn btn-warning" to="/dashboard">
                    Go To Transaction
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xs-1 mx-3 p-2 ">
              <div className="card">
                {/* <img
                  className="card-img-top"
                  src="http://lorempixel.com/200/200/sports/"
                /> */}
                <div className="card-body">
                  <h4 className="card-title text-center">Remitance</h4>
                  {/* <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illo, quas.
                  </p> */}
                  <Link className="btn btn-warning" to="/dashboard">
                    Go To Remitance
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xs-1 mx-3 p-2 ">
              <div className="card">
                {/* <img
                  className="card-img-top"
                  src="http://lorempixel.com/200/200/sports/"
                /> */}
                <div className="card-body">
                  <h4 className="card-title text-center">Utility Bill</h4>
                  {/* <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illo, quas.
                  </p> */}
                  <Link className="btn btn-warning" to="/dashboard">
                    Go To Utility Bill
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default dashboard;
