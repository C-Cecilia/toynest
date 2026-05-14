import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './context/ProductContext'
import { CartProvider }   from './context/CartContext'
import { TopBar, Navbar, Footer } from './components/Layout'
import CartModal from './components/ui/CartModal'
import AppRoutes from './router'
import { font, colors } from './styles/tokens'
import ScrollToTop from "./components/ScrollToTop"

const App = () => (
  <BrowserRouter>
    <ProductProvider>
      <CartProvider>
        <div style={{ fontFamily: font.family, color: colors.text }}>
          <ScrollToTop />
          <TopBar />
          <Navbar />
          <CartModal />
          <AppRoutes />
          <Footer />
        </div>
      </CartProvider>
    </ProductProvider>
  </BrowserRouter>
)

export default App
