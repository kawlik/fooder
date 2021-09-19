import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

// global context & config
import { StoreContext } from '../configs/store';
import config from '../configs/config';

// local components
import SelectFriend from './selectFriend';
import MakeRates from './makeRates';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const MakeSelect = () => {

    const { user, foods, types, setFoods } = useContext( StoreContext );
    const [ friend, setFriend ] = useState( null );

    // send select to db
    const sendSelect = async ( set ) => {

        axios.post( config.API.makeSelect ,{
            participants: [ user._id, friend ],
            realizedBy: [ user._id ],
            sets: [ set ],
        })
        .finally(() => setFriend( prev => null ));
    };

    // render view
    let render = friend
    ? <MakeRates foods={ foods } types={ types } sendSelect={ sendSelect } />
    : <SelectFriend userFriends={ user.friends } setFriend={ setFriend } url={ config.API.userID } />;
    

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

export default MakeSelect;