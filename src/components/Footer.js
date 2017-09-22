import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  logout = () => {
    //TODO
  };

  render() {
    return (
      <footer id="footer" role="contentinfo">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-6">
              <h3>Site</h3>
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/portfolio">PORTFOLIO</Link>
                </li>
                <li>
                  <Link to="/blog">BLOG</Link>
                </li>
                <li>&nbsp;</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6">
              <h3>Social</h3>
              <ul className="social-links">
                <li>
                  <a
                    href="https://twitter.com/ek_kiz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fa-stack">
                      <i className="fa fa-square-o fa-stack-2x fa-inverse" />
                      <i className="fa fa-twitter fa-stack-1x fa-inverse" />
                    </span>{' '}
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/eric.kizaki"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fa-stack">
                      <i className="fa fa-square-o fa-stack-2x fa-inverse" />
                      <i className="fa fa-facebook fa-stack-1x fa-inverse" />
                    </span>{' '}
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/erickizaki"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fa-stack">
                      <i className="fa fa-square-o fa-stack-2x fa-inverse" />
                      <i className="fa fa-linkedin fa-stack-1x fa-inverse" />
                    </span>{' '}
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/KamiMoon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="fa-stack">
                      <i className="fa fa-square-o fa-stack-2x fa-inverse" />
                      <i className="fa fa-github fa-stack-1x fa-inverse" />
                    </span>{' '}
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <h3>Donate</h3>
              <ul>
                <li>
                  <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    target="_top"
                  >
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input
                      type="hidden"
                      name="hosted_button_id"
                      value="2MTXC7JJX9AA2"
                    />
                    <input
                      type="image"
                      src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                      name="submit"
                      alt="PayPal - The safer, easier way to pay online!"
                    />
                    <img
                      alt=""
                      src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                      width="1"
                      height="1"
                    />
                  </form>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <h3>Contact</h3>
              <ul>
                <li>
                  <a href="mailto:erickizaki@gmail.com">
                    erickizaki@gmail.com
                  </a>{' '}
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="cold-md-12">
              <hr />
              <div id="footer-author">Eric Kizaki 2017</div>
            </div>
          </div>
          <a id="go-to-top" href="#" />
        </div>
        <br />
      </footer>
    );
  }
}
