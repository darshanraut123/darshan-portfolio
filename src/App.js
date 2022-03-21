import React from 'react';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
import { Route, Navigate, Routes } from 'react-router-dom';
import About from './components/about/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import { AnimatePresence } from 'framer-motion'

function App() {

  return (

    <div className="app">
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 app__main-content">
            <Navbar />

            <AnimatePresence exitBeforeEnter>
                <Routes>
                  <Route path="/" element={<About />}/>
                  <Route path="/resume" element={<Resume />}/>
                  <Route path="/projects" element={<Projects/>}/>
                  <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;