import React, { useEffect, useState, useContext } from 'react';

// global context & config
import { StoreContext } from '../configs/store';
import config from '../configs/config';

// local components
import SelectFriend from './selectFriend';
import MakeRates from './makeRates';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const MakeSelect = () => {

    const { user, foods, types } = useContext( StoreContext );

    const [ select, setSelect ] = useState( null );
    const [ friend, setFriend ] = useState( null );

    // render view
    let render = friend
    ? <MakeRates foods={ foods } types={ types } setSelect={ setSelect } />
    : <SelectFriend userFriends={ user.friends } setFriend={ setFriend } url={ config.API.userID } />;


    /*   *   *   *   *   *   *   *   */

    useEffect(() => {
        
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