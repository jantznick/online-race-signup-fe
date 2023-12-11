import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { App } from '../components/pages/App.js';
import { Sample } from '../components/pages/Sample.js';
import { NotFound } from '../components/pages/NotFound.js';

const AppRoutes = () => {
	return (
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/demo" element={<Sample/>} />
            <Route path="/404" element={<NotFound/>} />
            <Route path="/*" element={<NotFound/>} />
        </Routes>
	);
}

export default AppRoutes;