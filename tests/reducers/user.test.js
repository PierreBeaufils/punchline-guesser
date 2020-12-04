import { should } from 'chai';

import userReducer, { initialState } from 'src/reducers/user';

import {
  changeFieldValue,
  handleLogin,
  saveSession,
  logout,
} from 'src/actions/user';
// Permet de rajouter le should à nos variables/méthodes
// Donc plus besoin d'utiliser le expect, on met .should direct
should();

describe('user reducer', () => {
  describe('structure', () => {
    it('is a function', () => {
      userReducer.should.be.a('function');
    });

    it('returns the state with initial state value when called without arguments', () => {
      userReducer().should.be.equal(initialState);
    });
  });

  describe('actions', () => {
    it('CHANGE_LOGIN_FIELD_VALUE', () => {
      let action = changeFieldValue('login', 'email', 'test@email.fr');
      userReducer({}, action).should.be.eql({ login: { email: 'test@email.fr' } });
      action = changeFieldValue('login', 'password', 'passtest');
      userReducer({}, action).should.be.eql({ login: { password: 'passtest' } });
    });

    it('LOGOUT', () => {
      const state = {
        isLogged: true,
        user: {
          email: 'test@mail.fr',
          password: 'test',
          username: 'User',
          role: 'regular',
        },
      };
      const action = logout();
      userReducer(state, action).should.be.eql({
        isLogged: false,
        user: {},
      });
    });
  });
});
