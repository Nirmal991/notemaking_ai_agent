import React, { type JSX } from 'react'
import type { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { Spinner } from '../components/ui/spinner';
import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

const Publicroute = ({ children }: Props) => {
    const { isAuthenticated, loading } = useSelector(
    (state: RootState) => state.auth,
  );

   if (loading) {
    return <Spinner />;
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default Publicroute;
