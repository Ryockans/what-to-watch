import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function PrivatePage() {
  const user = useSelector((state: RootState) => state.auth.userInfo);

  if (user === null) {
    return (
      <h1>Эта страница доступна только зарегистрированным пользователям</h1>
    );
  }

  return (
    <div>
      <h1>Привет, {user.name}</h1>
      <h2>Секретная информация</h2>
    </div>
  );
}
