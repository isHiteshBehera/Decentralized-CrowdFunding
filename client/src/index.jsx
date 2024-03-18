import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdWwebProvider desiredChainId={ChainId.Sepolia}>
        <Router>
            <App />
        </Router>
    </ThirdWwebProvider>
)