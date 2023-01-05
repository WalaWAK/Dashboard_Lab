import './App.css';
import SentimentalAnalysis from './components/sentiment-analysis';
import AverageRating from './components/average-rating';
import Sidebar from './components/sidebar'
import Reviews from './components/reviews';
import WebsiteVisitors from './components/website-visitors';
function App() {
  return (

    <div className="App">
      <div className="main">
        <Sidebar />
        <div className='container1'>
          <div className='container2'>
            <Reviews />
            <AverageRating />
            <SentimentalAnalysis />
          </div>
          <WebsiteVisitors />
        </div>
      </div>
    </div>
  )
}

export default App;
