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
          <div className="col-4  themed-grid-col">REFERRAL LINK</div>
          <div className="col-2 themed-grid-col">CLICKS</div>
          <div className="col-2 themed-grid-col">SIGNUPS</div>
          <div className="col-2 themed-grid-col">TOKENS</div>
          <div className="col-2 themed-grid-col">OPTIONS</div>
        </div>
        <div className="card m-2">
          <div className="row">
            <div className="col-4  themed-grid-col">
              <div className="card-body">
                <h5 className="card-title"> </h5>
                <h6 className="card-subtitle mb-2 ">
                  brandtokens.io/4Ew21Ast0x
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
        <div className="card m-2">
          <div className="row">
            <div className="col-4  themed-grid-col">
              <div className="card-body">
                <h5 className="card-title"> </h5>
                <h6 className="card-subtitle mb-2 ">
                  brandtokens.io/4Ew21Ast0x
                </h6>
                <p className="card-text">
                  Share this link to invite your friends to our voting.
                </p>
              </div>
            </div>
            <div className="col-2 themed-grid-col">
              <br></br>1,2004,20
            </div>
            <div className="col-2 themed-grid-col">
              <br></br>320,436
            </div>
            <div className="col-2 themed-grid-col">
              <br></br>22,838
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
        <div className="card m-2">
          <div className="row">
            <div className="col-4  themed-grid-col">
              <div className="card-body">
                <h5 className="card-title"> </h5>
                <h6 className="card-subtitle mb-2 ">
                  brandtokens.io/4Ew21Ast0x{" "}
                </h6>
                <p className="card-text">
                  Share this link with potential investors to present them with
                  potential profits from buying our tokens .
                </p>
              </div>
            </div>
            <div className="col-2 themed-grid-col">
              <br></br>2,040,180
            </div>
            <div className="col-2 themed-grid-col">
              <br></br>631,084
            </div>
            <div className="col-2 themed-grid-col">
              <br></br>345,458
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
        <footer className="footer">
          <div className="container">
            <span className="text-muted">
              <div className="row m-3">
                <div className="col-2  themed-grid-col">PRODUCTS</div>
                <div className="col-2 themed-grid-col">SOLUTIONS</div>
                <div className="col-2 themed-grid-col">CLIENTS</div>
                <div className="col-2 themed-grid-col">COMPANY</div>
                <div className="col-2 themed-grid-col">BLOG</div>
                <div className="col-2 themed-grid-col">CONTACT US</div>
              </div>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Referral;
