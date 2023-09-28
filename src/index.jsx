/* eslint-disable no-unused-vars */
import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './component/ContactApp';
import './style.css';

const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);