import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { withStyles } from '../../utils/withStyles';
import CssBaseline from '@mui/material/CssBaseline';
import FavoriteIcon from '@mui/icons-material/Favorite';

import './App.css';
import styles from './styles';

import GameStart from '../../components/game-start';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';

const Talks = lazy(() => import('../../components/talks'));
const About = lazy(() => import('../../components/about'));
const Blogs = lazy(() => import('../../components/blogs'));
const Projects = lazy(() => import('../../components/projects'));
const BlogPost = lazy(() => import('../../components/blog-post'));

function App({ classes }) {
  const [open, setOpen] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  function renderMain() {
    if (!gameStarted) {
      return <GameStart onStart={() => setGameStarted(true)} />;
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header open={open} classes={classes} setOpen={setOpen} />
        <Sidebar open={open} setOpen={setOpen} />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <section id="about_section">
            <About />
          </section>
          <section id="blogs_section">
            <Blogs />
          </section>
          <section id="projects_section">
            <Projects />
          </section>
          <section id="talks_section">
            <Talks />
          </section>
          <footer className="footer">
            <p>Developed with</p>
            <FavoriteIcon fontSize="small" style={{ color: '#c05848' }} />
            <p>by Patti Shin</p>
          </footer>
        </main>
      </div>
    );
  }

  return (
    <Suspense fallback={<div style={{ color: 'white', padding: '20px' }}>Loading...</div>}>
      <Routes>
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={renderMain()} />
      </Routes>
    </Suspense>
  );
}

export default withStyles(styles)(App);
