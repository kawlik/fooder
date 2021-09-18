import React, { useEffect, useState } from 'react';
import axios from 'axios';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const SelectFriend = ({ userFriends, setFriend, url }) => {
    
    const [ friends, setFriends ] = useState( null );

    const fetchUsers = async () => {

        const fetchedFriends = new Array( userFriends.length );

        for( let i = 0; i < userFriends.length; i++ ) {

            const friend = await axios.get( url + userFriends[i] );

            fetchedFriends[i] = friend.data;
        }

        setFriends( prev => fetchedFriends );
    };

    // render view
    const render = friends?.map( friend => 

        <div key={ friend._id } className="col-12 p-1 m-1 border rounded" onClick={ () => { setFriend( friend._id ) }}>

            <img src={ friend.body.picture.data.url } alt={ friend.body.name } className="rounded mx-auto mx-2 my-1 float-left" style={{ maxWidth: 44, }} />

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

        <h2 className="lead">Zaproś znajomego do wyboru</h2>

        { render }

    </>
    );
};


/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default SelectFriend;