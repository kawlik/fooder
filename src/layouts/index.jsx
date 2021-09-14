import React, { useContext } from 'react';

// global context
import { StoreContext } from '../configs/store';

// local modules
import Login from './login';
import View from './view';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const Index = () => {

    const { user } = useContext( StoreContext );

    /*   *   *   *   *   *   *   *   */
    
    const render = user ? <View /> : <Login />;


    /*   *   *   *   *   *   *   *   */

    return(
    <>

        { render }

    </>
    );
};


/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default Index;