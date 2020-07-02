import React, { Component } from "react";

class Referral extends Component {
  handleDelete = () => {
    console.log("Option");
  };
  render() {
    return (
      <div className="container">
        <div className="row mb-3">
          <div className="col-4 themed-grid-col">Referrals</div>
          <div className="col-4 themed-grid-col"></div>
          <div className="col-4 themed-grid-col">
            <button className="btn btn-primary float-right">
              Add New Link
            </button>
          </div>
        </div>
        <div className="alert alert-light">
          <div className="row mb-2 ">
            <div className="col-4">Welcome to the Referrals Section!</div>
            <div className="col-4 themed-grid-col"></div>
            <div className="col-4 themed-grid-col">
              <button className="btn close float-right">x</button>
            </div>
          </div>
          <div className="row mb-2 ">
            <div className="col-4 themed-grid-col">
              Below you will Find three reference links to share with others.You
              can choose whether you want to share our landing page , voting for
              brands or the ICO page. You will get rewarded with free tokens.
            </div>
            <div className="col-4 themed-grid col"></div>
            <div className="col-4 themed-grid-col">
              <ul>
                <li> 10 BRND for a registered user</li>
                <li>100 BRND for registered brand</li>
                <li>10% of the value spent on our tokens paid in ICO </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-4  themed-grid-col">Referral Link</div>
          <div className="col-2 themed-grid-col">Clicks</div>
          <div className="col-2 themed-grid-col">SignUps</div>
          <div className="col-2 themed-grid-col">Tokens</div>
          <div className="col-2 themed-grid-col">Options</div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-4  themed-grid-col">
              <div className="card-body">
                <h5 className="card-title"> </h5>
                <h6 className="card-subtitle mb-2 ">
                  brandtokens.io/4Ew21Ast0x{" "}
                </h6>
                <p className="card-text">
                  Share this link to introduce your followers to our project.
                </p>
              </div>
            </div>
            <div className="col-2 themed-grid-col">
              <br></br>10,250
            </div>
            <div className="col-2 themed-grid-col">
              <br></br>60,325
            </div>
            <div className="col-2 themed-grid-col">
              <br></br>12,642
            </div>
            <div className="col-2 themed-grid-col">
              <br></br>
              <button onClick={this.handleDelete} className="btn btn-sm m-1">
                D
              </button>
              <button className="btn btn-sm m-1">V</button>
              <button className="btn btn-sm m-1">O</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Referral;
