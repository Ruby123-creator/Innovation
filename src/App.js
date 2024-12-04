import logo from './logo.svg';
import './App.css';
import Layout from './common/Layout';

import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Layout>
        Main Component
      </Layout>
      </Router>
    
    </div>
  );
}

export default App;
