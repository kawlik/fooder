import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// global config
import config from './config';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

// store context init
const StoreContext = createContext( null );

// store provider wrapper
const StoreProvider = ({ children }) => {

    const [ user, setUser ] = useState( null );
    const [ types, setTypes ] = useState( [] );
    const [ foods, setFoods ] = useState( [] );

    // reads and sets saved user
    const readSavedUser = async () => {

        const readUser = JSON.parse( localStorage.getItem( 'user' ));

        if( readUser?.hasOwnProperty( 'auth' )) {
            
            const restoredUser = await axios.get( config.API.userAuth + readUser.auth );

            if( restoredUser.data ) { setUser( perv => restoredUser.data ) }
        }
    };
    
    // saves usser on localStorage
    const saveUser = () => {

        localStorage.setItem( 'user', JSON.stringify( user ));
    };

    // reads available food types
    const fetchTypes = async () => {

        const fetchedTypes = await axios.get( config.API.types );

        setTypes( prev => fetchedTypes.data );
    };

    // reads available foods
    const fetchFoods = async () => {

        const fetchedTypes = await axios.get( config.API.foods );

        setFoods( prev => fetchedTypes.data );
    };

    /*   *   *   *   *   *   *   *   */

    const storeValues = {

        user, setUser,  //  user propeties

        types, setTypes,    //  food types propeties

        foods, setFoods,    //  available foods
    };


    /*   *   *   *   *   *   *   *   */

    useEffect(() => {

        if( !user ) {

            readSavedUser();
        }

        if( user ) {

            saveUser();

            fetchTypes();

            fetchFoods();
        }

    }, [ user ]);   // eslint-disable-line


    /*   *   *   *   *   *   *   *   */

    return(
    <StoreContext.Provider value={ storeValues } >
            
        { children }

    </StoreContext.Provider>
    );
};



/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default StoreProvider;
export { StoreContext, StoreProvider };