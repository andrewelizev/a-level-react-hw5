import { BASE_URL, API_KEY, AUTH_URL } from '../../constants';

const actions = Object.freeze({
    SET_TOKEN: 'auth/setToken',
})

const logIn = (email, password) => (dispatch) => {
    console.log('LOGIN', email, password)
    // fetch()
    // .then((res) => {
    //     dispatch(setToken({token: '', accessToken: ''}))
    // })



                                                        // 1:13 video


    // fetch(SIGNIN_URL, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         email: 'armen@me.com',
    //         password: '123456',
    //         returnSecureToken: true,
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log('[SIGN_IN]', data);
    //         setToken(data.idToken);
    //         setRefreshToken(data.refreshToken);
    //     })
}

const setToken = (payload) => ({ type: actions.SET_TOKEN, payload })

export { actions, logIn };