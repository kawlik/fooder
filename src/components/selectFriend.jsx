import React, { useEffect, useState } from 'react';
import axios from 'axios';

// global context & config
import config from '../configs/config';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const SelectFriend = ({ userFriends, setFriend, url }) => {
    
    const [ friends, setFriends ] = useState( [] );

    const fetchUsers = async () => {

        const fetchedFriends = new Array( userFriends.length );

        for( let i = 0; i < userFriends.length; i++ ) {

            const friend = await axios.get( url + userFriends[i] );

            fetchedFriends[i] = friend.data;
        }

        setFriends( prev => fetchedFriends );
    };

    // render view
    const render = friends.map( friend => 


        <div key={ friend._id } className="col-12 p-1 m-1 border rounded" onClick={ () => { setFriend( friend._id ) }}>

            <img src={ 'https://picsum.photos/200' || config.API.image + friend._id } alt={ friend.body.name } className="rounded mx-auto mx-2 my-1 float-left" style={{ maxWidth: 44, }} />

            <span className="leed mx-2">{ friend.body.name }</span>

        </div>
    );


    /*   *   *   *   *   *   *   *   */

    useEffect(() => {
        
        fetchUsers();

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

export default SelectFriend;