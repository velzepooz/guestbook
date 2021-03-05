import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './styles/App.scss';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { ReviewsPage } from './pages/ReviewsPage/ReviewsPage';
import { AddReviewPage } from './pages/AddReviewPage/AddReviewPage';
import { Alert } from './components/Alert/Alert';

const navLinks = [
  {
    path: '/',
    name: 'Review',
    isExact: true,
  },
  {
    path: '/addReview',
    name: 'Add review',
    isExact: true,
  },
];

function App() {
  return (
    <Alert>
      <div className="App">
        <Router>
          <Header>
            <Navigation links={navLinks} />
          </Header>
          <Switch>
            <Route path="/" exact>
              <ReviewsPage />
            </Route>
            <Route path="/addReview" exact>
              <AddReviewPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </Alert>
  );
}

export default App;
