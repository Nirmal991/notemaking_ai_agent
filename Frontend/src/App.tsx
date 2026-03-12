import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import RegisterPage from './pages/RegisterPage'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './store/store'
import { setAuthLoad, setUser } from './store/slices/authSlice'
import { getCurrentUser } from './api/auth/auth.api'
import { Toaster } from './components/ui/sonner'
import ProtectedRoute from './routes/ProtectedRoute'
import Publicroute from './routes/Publicroute'

function App() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await getCurrentUser();
        console.log(response.data);
        dispatch(setUser(response.data));
      } catch (error) {
      } finally {
        dispatch(setAuthLoad());
      }
    }

    loadUser();
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>} />
        <Route path='/register' element={<Publicroute><RegisterPage /></Publicroute>} />
        <Route path='/login' element={<Publicroute><LoginPage /></Publicroute>} />
      </Routes>
    </>
  )
}

export default App
