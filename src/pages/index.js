import React from 'react';
import { Router } from '@reach/router';
import packageJson from '../../package.json';
import SideBar from 'component/sidebar';
import DashboardPage from './dashboard';
import LogsPage from './logsPage';
import HealthPage from './healthPage';
import SettingsPage from './settingsPage';
import { Provider } from '../component/context';

export default function AppIndex() {
  return (
    <Provider>
      <div className="container">
        <SideBar />
        <div className="scrollable">
          <main className="content">
            <Router>
              <LogsPage path="/logs" />
              <HealthPage path="/health" />
              <SettingsPage path="/settings" />
              <DashboardPage path="/" />
            </Router>
          </main>
          <footer>{`Version: ${packageJson.version}`}</footer>
        </div>
      </div>
    </Provider>
  );
}
