import React from 'react';
import './style/index.css';

function App() {
  return (
    <div className="App">
      <header className="header"> 
        <a className="header__logo" href = "#">
          -
        </a>
          <menu className="menu">
            <a href="#" className="menu__item">
              About me
            </a>
            <a href="#" className="menu__item">
              Relationships
            </a>
            <a href="#" className="menu__item">
              Requirements
            </a>
            <a href="#" className="menu__item">
              Users
            </a>
            <a href="#" className="menu__item">
              Sign Up
            </a>
          </menu>
      </header>
      <section className="test">
            <p className="test__text">
            Test assignment for frontend developer position
          </p>
          <p className="test__text-long">
            We kindy remind you that your test assignment should be submitted as a link to github/bitbucket repository.
          </p>
          <button className="test__button">
            Sign up now
          </button>
      </section>
      <section className="acquainting">
        <p className="acquainting__text--heading">
          Let's get acquainting
        </p>
        <div className="acquainting__row">
          <div className="acquainting__image">
          </div>
          <div className="acquainting__column">
            <p className="acquainting__column--text1">
              I am cool frontend develop
            </p>
            <p className="acquainting__column--text2">
              We will evaluate how clean your approach to writing CSS and Javascript code is.
              You can use any CSS and Javascript 3rd party libraries without any restriction.
            </p>
            <p className="acquainting__column--text3">
              If 3rd party css/javascript libraries are added to the project via bower/npm/yarn will get bonus points.
              If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page PSD
              mockup into HTML5/CSS3.
            </p>
            <a href="#" className="acquainting__column--link">
              Sign up now
            </a>
          </div>
        </div>
      </section>
      <section className="users">
        <p className="users__text--heading">
          Our cheerful users
        </p>
        <div className="cards">
          <div className="card">
            <div className="card__img" />
            <p className="card__name">
              Maxmilian
            </p>
            <p className="card__position">
              position
            </p>
            <p className="card__email">
              email
            </p>
            <p className="card__phone">
              some numbers
            </p>
          </div>
          <div className="card">
            <div className="card__img" />
            <p className="card__name">
            Maxmilian
            </p>
            <p className="card__position">
            position
            </p>
            <p className="card__email">
            email
            </p>
            <p className="card__phone">
            some numbers
            </p>
          </div>
          <div className="card">
            <div className="card__img" />
            <p className="card__name">
            Maxmilian
            </p>
            <p className="card__position">
            position
            </p>
            <p className="card__email">
            email
            </p>
            <p className="card__phone">
            some numbers
            </p>
          </div>
        </div>
        <button className="users__button">
          Show more
        </button>
      </section>
      <section className="register">
        <p className="register__text--heading">
          Register to get a work
        </p>
        <form>
          <label>
            Name
            <input type="text"/>
          </label>
          <label>
            Email
            <input type="text"/>
          </label>
          <label>
            Phone number
            <input type="text"/>
          </label>
        </form>
      </section>
    </div>
  );
}

export default App;
