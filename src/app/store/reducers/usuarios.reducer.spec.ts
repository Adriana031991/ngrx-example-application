import * as fromReducer from './usuarios.reducer';
import * as fromActions from '../actions';
import { Usuario } from 'src/app/models/usuario.model';







describe('UsuariosReducer', () => {

  describe('estado devuelve la misma referencia cuando se supone que el reductor no debe manejar la acción (acción desconocida)', () => {
    it('should return the default state', () => {
      const { usuariosInitialState } = fromReducer;
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.usuariosReducer(usuariosInitialState, action);

      expect(state).toBe(usuariosInitialState);
    });
  });

  describe('cargarUsuarios() action', () => {
    it('should retrieve the state ', () => {
      const { usuariosInitialState } = fromReducer;

      const action = fromActions.cargarUsuarios();
      const state = fromReducer.usuariosReducer(usuariosInitialState, action);

      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
      expect(state.error).toEqual(null);
    });
  });

  describe('cargarUsuariosSuccess() action', () => {
    it('should retrieve all usuarios and update the state in an immutable way', () => {
      const { usuariosInitialState } = fromReducer;

      const usersInitialState: Usuario[] = [
        {id: 1, userId: 1, title: 'hola', body: 'hola'},
        {id: 1, userId: 1, title: 'hola', body: 'hola'}
      ]

      const action = fromActions.cargarUsuariosSuccess(  { usuarios: usersInitialState } );
      const state = fromReducer.usuariosReducer(usuariosInitialState, action);

      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
      expect(state.users).toEqual(usersInitialState);
      expect(state.users.length).toEqual(usersInitialState.length);

      expect(state.users).not.toBe(usersInitialState);
    });
  });

  describe('cargarUsuariosError() action', () => {
    it('should update error in state', () => {
      const { usuariosInitialState } = fromReducer;

      const usersInitialState = '';

      const action = fromActions.cargarUsuariosError(  { payload: usersInitialState}  );
      const state = fromReducer.usuariosReducer(usuariosInitialState, action);

      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(false);
    });
  });

});
