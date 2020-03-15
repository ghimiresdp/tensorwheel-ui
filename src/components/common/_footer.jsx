import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {AppRoutes} from "../../Routes";

export class Footer extends Component {
  render() {
    return (
      <footer className='my-footer'>
        <div className="container">
          <div className="row py-3">
            <div className="col-12 col-md-6 col-lg-4">
              <h4 className="text-center"><img src="/static/img/logo/logo.svg" width="32px" alt=""/> Prime Data Factory</h4>
              <p className="text-sm-center">
                Prime Data Factory is a virtual data factory and a blog site maintained for those who
                want to learn or teach data science and machine learning. If you want to learn or suggest
                something related to Data Science, Machine Learning or Artificial Intelligence, you can
                <Link to={AppRoutes.login}> Sign up</Link> here.
                <br/>
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <h4 className="text-center">Quick Links</h4>
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li><Link to={AppRoutes.index}>Home</Link></li>
                    <li><Link to={AppRoutes.blog.index}>Blog</Link></li>
                    <li><Link to={AppRoutes.project.index}>Projects</Link></li>
                    <li><Link to={AppRoutes.warehouse.index}>Warehouse</Link></li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li><Link to={AppRoutes.index}>Home</Link></li>
                    <li><Link to={AppRoutes.blog.index}>Blog</Link></li>
                    <li><Link to={AppRoutes.project.index}>Projects</Link></li>
                    <li><Link to={AppRoutes.warehouse.index}>Warehouse</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <h4 className="text-center">Connect with Us</h4>
            </div>
          </div>
        </div>
        <p className="copyright-info">Copyright &copy; Prime Data Factory {new Date().getFullYear()}</p>
      </footer>
    );

  }
}