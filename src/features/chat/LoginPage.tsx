import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectLoginStatus, selectUsername, login } from './chatSlice';
import { useState } from 'react';

export default function LoginPage()
{
    const dispatch = useAppDispatch();
    const [loginName, setLoginName] = useState('');
    const loginStatus = useAppSelector(selectLoginStatus);
    const username = useAppSelector(selectUsername);

    const loginToChat = () => {
        dispatch(login(loginName));
    }
    return (<div>
        {loginStatus ? <div>You already logged as {username}</div> : null}
        <input placeholder="username" onChange={(event) => setLoginName(event.target.value)}></input>
        <button onClick={() => loginToChat()}>Login</button>
    </div>);
}