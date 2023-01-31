import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { Profile } from './pages/Profile'
import { NotFound } from './pages/NotFound'
import { Detail } from './pages/Detail'
import { Login } from './pages/Login'
import { AuthProvider } from './context'
/* import { AuthProvider } from './auth' */
import { Header } from './components/Header'
import { PrivateRoutes } from './router/PrivateRoutes'
import { Register } from './pages/Register'
import { CardProvider } from './context/cards/CardProvider'

function App() {

  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Header />
          <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Register />} />
            <Route path="*" element={
              <PrivateRoutes>
                <CardProvider>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/:slug" element={<Detail />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </CardProvider>
              </PrivateRoutes>
            } />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  )
}

export default App
