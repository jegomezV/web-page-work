import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Credits } from './pages/Credits';

const router = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/credits", element: <Credits /> },
];

const App: React.FC = (): JSX.Element => {
  return (
    <ParallaxProvider>
      <Router>
        <Routes>
          {router.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))};
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;