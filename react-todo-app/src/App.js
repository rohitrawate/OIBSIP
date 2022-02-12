import React from 'react';
import { Toaster } from 'react-hot-toast';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import styles from './styles/modules/app.module.scss';
import AppContent from './components/AppContent';

function App() {
  return (
    <>
      <div className="container">
        <div className={styles.bg}>
          <PageTitle>
            <span>TODO</span>: MUST-Do
          </PageTitle>
          <div className={styles.app__wrapper}>
            <AppHeader />
            <AppContent />
          </div>
        </div>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
