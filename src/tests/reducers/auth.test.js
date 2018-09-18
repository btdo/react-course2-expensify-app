import authReducer from '../../reducers/auth';


test('should set auth for login', () => {
    const state = authReducer(undefined, {
        type: 'LOGIN',
        uid: '2323'
    })
    expect(state.uid).toBe('2323');
})

test('should set auth for logout', () => {
    const state = authReducer(undefined, {
        type: 'LOGOUT'
    })
    expect(state).toEqual({});
})