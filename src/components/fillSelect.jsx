import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

// global context & config
import { StoreContext } from '../configs/store';
import config from '../configs/config';

// local components
import FetchWaiting from './fetchWaiting';
import MakeRates from './makeRates';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const FillSelect = () => {

    const { user, foods, types, setFoods } = useContext( StoreContext );   
    const [ waiting, setWaiting ] = useState( null );

    const sendSelect = async ( set ) => {

        axios.put( config.API.putSelect + waiting._id ,{
            participant: user._id,
            set: set,
        })
        .then(() => setFoods( prev  => prev.sort(( p, n ) => 0.5 - Math.random())))
        .finally(() => setWaiting( prev => null ));
    };

    const render = !waiting
    ? <FetchWaiting user={ user } setWaiting={ setWaiting } />  
    : <MakeRates foods={ foods } types={ types } sendSelect={ sendSelect } />;

    /*   *   *   *   *   *   *   *   */

    useEffect(() => {

        setFoods( prev  => prev.sort(( p, n ) => 0.5 - Math.random()));

    }, []);    // eslint-disable-line


    /*   *   *   *   *   *   *   *   */

    return(
    <>

        { render }

    </>
    );
};


/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default FillSelect;