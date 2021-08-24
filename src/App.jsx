import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Bio from './components/Sections/Bio'
import Work from './components/Sections/Work'
import Contact from './components/Sections/Contact'
import './assets/css/App.css'
import './assets/css/Nav.css'

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Bio />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
