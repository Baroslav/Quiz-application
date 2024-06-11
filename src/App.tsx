import React from 'react';
import './App.css';
import QuizList from './components/QuizList';
import Add from './components/buttons/Add';
import Search from './components/Search';
import Quiz from './components/Quiz';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<QuizList/>}/>
          <Route path='quiz/:name' element={<Quiz/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
