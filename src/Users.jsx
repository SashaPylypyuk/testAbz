import React, { useState, useEffect } from 'react';

const API_URL = 'https://frontend-test-assignment-api.abz.agency';

async function getUsers() {
  let totalUsers = 0;
   return fetch(`${API_URL}/api/v1/users`).then(res => res.json().then((data) => {
    totalUsers = data.total_users;
      return fetch(`${API_URL}/api/v1/users?page=1&count=${totalUsers}`).then(res => res.json())
  }));

}

export const Users = () => {
  const [users, setUsers] = useState('');

 useEffect(() => {
   Promise.resolve(getUsers()).then((users) => {setUsers(users.users)});
 }, []);

const loadUsers = () => {
  Promise.resolve(getUsers()).then((users) => {setUsers(users.users)});
}

    return (
        <section className="users">
        <p className="users__text--heading">
          Our cheerful users
        </p>
        <div className="cards">
          {users.length ===0 ? (
            loadUsers()
          ) : (
            users.map(user => (
              <div className="card">
            <div className="card__img" />
            <p className="card__name">
              {user.name}
            </p>
            <p className="card__position">
              {user.position}
            </p>
            <p className="card__email">
              {user.email}
            </p>
            <p className="card__phone">
              {user.phone}
            </p>
          </div>
            ))
          )}
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
        <button className="button">
          Show more
        </button>
      </section>
    )
}
