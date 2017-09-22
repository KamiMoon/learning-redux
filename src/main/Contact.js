import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form name="form" noValidate>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-horizontal">
                    <div className="form-group">
                      <div className="col-lg-2" />
                      <div className="col-lg-10">
                        <h3>CONTACT ME</h3>
                      </div>
                    </div>
                    {/* <b-input model="vm.contact.name" required="true"></b-input>
                            <b-input type="email" model="vm.contact.email" required="true"></b-input>
                            <b-input type="textarea" rows="6" cols="5" model="vm.contact.message" required="true"></b-input> */}
                    <div className="form-group">
                      <label className="col-lg-2 control-label" />
                      <div className="col-lg-10">
                        {/* <div vc-recaptcha key="'6LdS5BMTAAAAACcWJA-nZhB34kFMfM5Rfyu6RrAV'"></div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-12">
                  {/* <div align="center">
                    <b-input type="submit" />
                  </div> */}
                  <br />
                  <br />
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="contact-info text-center">
              <h3 />
              <p style={{ textDecoration: 'underline' }}>
                <b>Main Office</b>
              </p>
              <p>
                <a href="mailto:erickizaki@gmail.com">erickizaki@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
