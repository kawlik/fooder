import React from 'react';

// stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

// global store
import { StoreProvider } from './configs/store';

// local modules
import Index from './layouts/index';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const App = () => {


    /*   *   *   *   *   *   *   *   */

    return(
    <StoreProvider>

        <Index />

    </StoreProvider>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default App;