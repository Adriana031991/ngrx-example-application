import * as fromReducer from './usuario.reducer';
import * as fromActions from '../actions';
import { Usuario } from 'src/app/models/usuario.model';






describe('UsuariosReducer', () => {

  describe('return state default', () => {
    it('should return the default state', () => {
      const { usuarioInitialState } = fromReducer;
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.usuarioReducer(usuarioInitialState, action);

      expect(state).toBe(usuarioInitialState);
    });
  });

  describe('cargarUsuarios() action', () => {
    it('should retrieve the user by Id', () => {
      const { usuarioInitialState } = fromReducer;

      const userInitialState: fromReducer.UsuarioState = {
        id: '',
        user: {id: 1, userId: 1, title: 'hola', body: 'hola'},
        loaded: false,
        loading: false,
        error: null
      }

      const action = fromActions.cargarUsuario({ id: userInitialState.id });
      const state = fromReducer.usuarioReducer(usuarioInitialState, action);

      expect(state.loaded).toEqual(true);
      expect(state.id).toEqual(userInitialState.id)
  });
  });

  describe('cargarUsuarioSuccess() action', () => {
    it('should retrieve the usuario and charching true', () => {
      const { usuarioInitialState } = fromReducer;

      const userInitialState: Usuario =
        {id: 1, userId: 1, title: 'hola', body: 'hola'}


      const action = fromActions.cargarUsuarioSuccess(  { usuario: userInitialState } );
      const state = fromReducer.usuarioReducer(usuarioInitialState, action);

      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
      expect(state.user).toEqual(userInitialState);
      expect(state.user.title).toEqual(userInitialState.title);

      expect(state.user).not.toBe(userInitialState);
    });
  });

  describe('cargarUsuarioError() action', () => {
    it('should update error in state', () => {
      const { usuarioInitialState } = fromReducer;

      const userInitialState = '';

      const action = fromActions.cargarUsuarioError(  { payload: userInitialState}  );
      const state = fromReducer.usuarioReducer(usuarioInitialState, action);

      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(false);
    });
  });

});
