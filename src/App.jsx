import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './page/Home'
import { Dashboard } from './page/Dashboard'
import { Profile } from './page/Profile'
import { NotFound } from './page/NotFound'
import { Detail } from './page/Detail'
import { Login } from './page/Login'
import { AuthProvider } from './context'
/* import { AuthProvider } from './auth' */
import { Header } from './components/Header'
import { PrivateRoutes } from './router/PrivateRoutes'
import { Register } from './page/Register'

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
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/dashboard/:slug" element={<Detail />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </PrivateRoutes>
            } />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  )
}

export default App
