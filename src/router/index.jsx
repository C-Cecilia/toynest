import { Routes, Route } from 'react-router-dom'
import Home    from '../pages/Home'
import Catalog from '../pages/Catalog'
import Delivery from '../pages/Delivery'
import About    from '../pages/About'
import Contacts from '../pages/Contacts'
import Detail   from '../pages/Detail'
import Cart     from '../pages/Cart'
import Admin    from '../pages/Admin'

const AppRoutes = () => (
  <Routes>
    <Route path="/"           element={<Home />}     />
    <Route path="/catalog"    element={<Catalog />}  />
    <Route path="/delivery"   element={<Delivery />} />
    <Route path="/about"      element={<About />}    />
    <Route path="/contacts"   element={<Contacts />} />
    <Route path="/detail/:id" element={<Detail />}   />
    <Route path="/cart"       element={<Cart />}     />
    <Route path="/admin"      element={<Admin />}    />
  </Routes>
)

export default AppRoutes
