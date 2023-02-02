import './App.css';
import Seminar from './Components/page 2/Seminar';

import Youtube from './Components/page 3/Youtube';
import Footer from './Components/page 4/Footer';
import Media from './Components/page 4/Media';
import Feed from './Components/page1/Feed';
import Header from './Components/page1/Header';

function App() {
  return (
    <div className="App">
      {/* page 1  */}
      <Header/>
      <Feed/>

      {/* Page 2  */}
      <Seminar/>

      {/* page3 */}
      <Youtube/>

      {/* page 4 */}
      <Media/>
      <Footer/>

    </div>
  );
}

export default App;
