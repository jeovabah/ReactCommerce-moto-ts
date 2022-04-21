import React from 'react';
import { Link} from 'react-router-dom';
import { Header } from './pages/Header';
import { RouterPage } from './router/RouterPage';
import styles from './styles.module.scss'


function App() {
  return (
    <div className={styles.container}>
      <Header />
      <RouterPage />

    </div >
  );
}

export default App;
