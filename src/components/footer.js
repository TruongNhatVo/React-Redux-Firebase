import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer text-center font-small mt-4 wow fadeIn">

        <div className="pt-4">
          <a className="btn btn-outline-white" href="https://mdbootstrap.com/getting-started/" target="_blank"
          rel="noopener noreferrer" role="button">Download MDB
        <i className="fa fa-download ml-2"></i>
          </a>
          <a className="btn btn-outline-white" href="https://mdbootstrap.com/education/bootstrap/" target="_blank"
          rel="noopener noreferrer" role="button">Start free tutorial
        <i className="fa fa-graduation-cap ml-2"></i>
          </a>
        </div>

        <hr className="my-4" />

        <div className="pb-4">
          <a href="https://www.facebook.com/mdbootstrap" target="_blank"
          rel="noopener noreferrer">
            <i className="fa fa-facebook mr-3"></i>
          </a>

          <a href="https://twitter.com/MDBootstrap" target="_blank"
          rel="noopener noreferrer">
            <i className="fa fa-twitter mr-3"></i>
          </a>

          <a href="https://www.youtube.com/watch?v=7MUISDJ5ZZ4" target="_blank"
          rel="noopener noreferrer">
            <i className="fa fa-youtube mr-3"></i>
          </a>

          <a href="https://plus.google.com/u/0/b/107863090883699620484" target="_blank"
          rel="noopener noreferrer">
            <i className="fa fa-google-plus mr-3"></i>
          </a>

          <a href="https://dribbble.com/mdbootstrap" target="_blank"
          rel="noopener noreferrer">
            <i className="fa fa-dribbble mr-3"></i>
          </a>

          <a href="https://pinterest.com/mdbootstrap" target="_blank"
          rel="noopener noreferrer">
            <i className="fa fa-pinterest mr-3"></i>
          </a>

          <a href="https://github.com/mdbootstrap/bootstrap-material-design" target="_blank"
          rel="noopener noreferrer">
            <i className="fa fa-github mr-3"></i>
          </a>

          <a href="http://codepen.io/mdbootstrap/" target="_blank"
          rel="noopener noreferrer">
            <i className="fa fa-codepen mr-3"></i>
          </a>
        </div>

        <div className="footer-copyright py-3">
          © 2018 Copyright:
      <a href="https://mdbootstrap.com/education/bootstrap/" target="_blank"
      rel="noopener noreferrer"> MDBootstrap.com </a>
        </div>

      </footer>
    )
  }
}
