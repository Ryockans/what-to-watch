import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function PrivatePage() {
  const token = useSelector((state: RootState) => state.sign.token);

  if (token === null) {
    return (
      <h1>Эта страница доступна только зарегистрированным пользователям</h1>
    );
  }

  return <h1>Секретная информация</h1>;
}
