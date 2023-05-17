import React from 'react'
import Layout from './component/layout/Layout'
import Header from './component/header/Header'
import Headerlg from './component/header/Headerlg'
import Sidebar from './component/sidebar/Sidebar'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Portfolio from './component/portfolio/Portfolio'
import Edu from './component/edu/Edu'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'

const App = () => {
  return (
   <>
   {/* <Layout/> */}
    <Headerlg/> 
    <Sidebar/>
   <Header/>
    <Nav/> 
   <About/>
<Edu/> 
   <Portfolio/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/dashboard" element={<Footer />} />
//         </Route>
//       </Routes>
//     </>
//   )
// }

// export default App
