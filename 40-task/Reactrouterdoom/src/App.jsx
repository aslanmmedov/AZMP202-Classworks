import { Route, Routes } from "react-router-dom"
import './App.css'
import Header from "./layout/header"
import Footer from "./layout/footer"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import ClientLayout from "./components/client/clientlayout"
import AdminLayout from "./components/admin/adminlayout"
import AdminContact from "./components/admin/contact"
import AdminAbout from "./components/admin/about"

function App() {

  return (
    <>
      <Routes>
        {/* client */}
        <Route path = "/" element = {<ClientLayout/>}>
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        </Route>
        {/* Admin */}
        <Route path = "/admin" element = {<AdminLayout/>}>
        <Route path="admin/contact" element={<AdminContact />} />
        <Route path="admin/about" element={<AdminAbout />} />
        </Route>
      </Routes>

    </>
    
  )
}

export default App
