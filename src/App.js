import logo from './logo.svg';
import './App.css';
import Layout from './common/Layout';

import { BrowserRouter } from 'react-router-dom';
import PartialViewRoute from './route/partialViewRoute';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <PartialViewRoute/>
        {/* Main Component */}
      </Layout>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
