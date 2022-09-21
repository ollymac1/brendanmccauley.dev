import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './globalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './globalStyle/theme'
import Index from './pages/Index'
import About from './pages/About'
import Work from './pages/Work'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/work' element={<Work />} />
          <Route path='/work/:title' element={<Work />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
