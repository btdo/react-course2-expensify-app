import {login, logout} from '../../actions/auth'

test('should call login', () => {
    const action = login('abc123');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'abc123'
    });
})

test('should call logout', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
})