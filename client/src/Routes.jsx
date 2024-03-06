import React, { useContext } from 'react';
import { LoginorRegister } from './LoginorRegister';
import { UserContext } from './Usercontext';
import Chat from './Chat';

export const Routes = () => {
  const {username,id} = useContext(UserContext);
  if(username){
    return <Chat />
  }
  return (
    <LoginorRegister />
  )
}
