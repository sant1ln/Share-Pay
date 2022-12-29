import { HashRouter,Routes, Route } from 'react-router-dom'
import { Home } from './page/Home'
import { Dashboard } from './page/Dashboard'
import { Profile } from './page/Profile'
import { NotFound } from './page/NotFound'
import { Menu } from './components/Menu'

function App() {

  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/dashboard/:slug" element={<Detail/>}/>
          <Route path="/profile" element={<Profile/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
