import React, { useState } from 'react';

export const Register = () => {
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [position, setPosition] = useState('');

  const addName = ({ target }) => {
    setName(target.value);
  };

  const addEmail = ({ target }) => {
    setEmail(target.value);
  };

  const addNumber = ({ target }) => {
    setNumber(target.value);
  };

  const addPosition = ({ target }) => {
    setPosition(target.value);
  }

  const addUser = (event) => {
    event.preventDefault();
    let token;
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
    token = data.token;
    });

    let formData = new FormData();
    formData.append('position_id', 2);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', number);
    console.log(token);
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST',
      body: formData,
      headers: {
        'Token': token, // get token with GET api/v1/token method
      },
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      if(data.success) {
        // process success response
      } else {
        // proccess server errors
      }
    })
    .catch(function(error) {
      // proccess network errors
    });

  }

    return (
        <section className="register">
            <p className="register__text--heading">
          Register to get a work
        </p>
        <form className="form">
          <p>
            Name
          </p>
            <input type="text" className="form__text-type" onChange={addName}/>
            <p>
            Email
          </p>
            <input type="text" className="form__text-type" onChange={addEmail}/>
            <p>
            Number
          </p>
            <input type="text" className="form__text-type" onChange={addNumber}/>
          <p>
            Select your position
          </p>
          <label>
          <input type="radio" value="Frontend developer" className="form__radio" name="position" onChange={addPosition}/>
                Frontend developer
          </label>
              <label>
              <input type="radio" value="Backend developer" className="form__radio" name="position" onChange={addPosition}/>
                Backend developer
              </label>
              <label>
              <input type="radio" value="Designer" className="form__radio" name="position" onChange={addPosition}/>
                Designer
              </label>
              <label>
              <input type="radio" value="QA" className="form__radio" name="position" onChange={addPosition}/>
                QA
              </label>
          <button type="button" className="button" onClick={addUser}>
            Sign up now
          </button>
        </form>
      </section>
    )
}
