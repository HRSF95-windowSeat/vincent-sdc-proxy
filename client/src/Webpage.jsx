import React from 'react';
import styles from '../styles/Webpage.css';

const Webpage = props => (
  <div>
    <nav className={`navbar navbar-expand-lg ${styles.navBorder} ${styles.navbar}`}>
      <div className={`${styles.navBorder} ${styles.navBrand}`}>
        <a className={`navbar-brand ${styles['navbar-brand']}`} href="#">{'CavaTable'}</a>
      </div>
      <div className={`${styles.navBorder} ${styles.locationSelectorContainer}`}>
        <span className={`fa fa-map-marker fa-lg ${styles.locationSelectorIcon}`}></span>
        <span className={styles.locationSelector}>
          {'San Francisco Bay Area   San Francisco'}
        </span>
      </div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <div className={styles.signupBtn}>
            <a className={styles.signupBtn_navlink} href="#">{'Sign Up'}</a>
          </div>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${styles['nav-link']}`} href="#">{'Sign In'}</a>
        </li>
      </ul>
    </nav>

    <nav aria-label="breadcrumb">
      <ol className={`breadcrumb ${styles.breadcrumbList}`}>
        <li className={`breadcrumb-item ${styles.breadcrumbItem}`}><a href="#">{'Home'}</a></li>
        <li className={`breadcrumb-item ${styles.breadcrumbItem}`}><a href="#">{'United States'}</a></li>
        <li className={`breadcrumb-item ${styles.breadcrumbItem}`}><a href="#">{'San Francisco Bay Area'}</a></li>
        <li className={`breadcrumb-item ${styles.breadcrumbItem} active`} aria-current="page">{'San Francisco'}</li>
      </ol>
    </nav>

    <div className={`jumbotron ${styles.jumbotron}`}></div>

    <div className={`container-fluid ${styles.bodyContainer}`}>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-6">
          <div className="container">
            <nav className={`navbar ${styles.navbar} ${styles.bodyNav} ml-auto sticky-top`}>
              <ul className={`navbar-nav navbar-expand mr-auto ${styles.moduleNav}`}>
                <li className={`nav-item ${styles.bodyNavActive} ${styles.bodyNavItem}`}>{'Overview'}</li>
                <li className={`nav-item ${styles.bodyNavItem}`}>{'Photos'}</li>
                <li className={`nav-item ${styles.bodyNavItem}`}>{'Menu'}</li>
                <li className={`nav-item ${styles.bodyNavItem}`}>{'Reviews'}</li>
              </ul>
            </nav>
            <div id="overviewModule"></div>
            <div id="photosModule">
              <h1>VINCENT'S PHOTO MODULE GOES HERE!</h1>
            </div>
            <div id="menusModule">
              <h1>ANOOP'S MENU MODULE GOES HERE!</h1>
            </div>
            <div id="reviewsModule">
              <h1>CHRYSTAL'S REVIEWS MODULE GOES HERE!</h1>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div id="reservationModule">
            <h1>ANDREW'S PHOTO MODULE GOES HERE!</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Webpage;