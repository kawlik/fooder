import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

// global context & config
import { StoreContext } from '../configs/store';
import config from '../configs/config';



/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const ShowProfile = () => {

    const { user, setUser } = useContext( StoreContext );

    const [ friends, setFriends ] = useState( null );
    const [ searchs, setSearchs ] = useState( null );
    const [ value, setValue ] = useState( '' );

    const fetchFriends = async () => {

        const fetchedFriends = new Array( user.friends.length );

        for( let i = 0; i < user.friends.length; i++ ) {

            const friend = await axios.get( config.API.userID + user.friends[i] );

            fetchedFriends[i] = friend.data;
        }

        setFriends( prev => fetchedFriends );
    };

    const fetchSearchs = async ({ target }) => {

        setValue( prev => target.value );

        if( target.value.trim().length >= 3 ) {

            const fetchedSearchs = await axios.get( config.API.userName + target.value.trim());

            setSearchs( prev => fetchedSearchs.data.filter( el => !user.friends.includes( el._id ) && ( el._id !== user._id )));
                        
        } else {

            setSearchs( prev => null )
        }
    };

    const addFriend = async ( id ) => {

        try {

            await axios.put( config.API.userAdd + user._id + '/' + id );
            
            const patchUser = await axios.get( config.API.userAuth + user.auth );

            setUser( prev => patchUser.data );

            setSearchs( prev => null )

            setValue( prev => '' );

        } catch( err ) {

            console.error( err );
        }
    }

    const logout = async () => {

        localStorage.clear();

        setUser( prev => null );
    }

    // render friends
    const renderFriends = friends?.map( friend => 

        <div key={ friend._id } className="col-12 p-1 mx-auto my-1 border rounded">

            <img src={ friend.body.picture.data.url } alt={ friend.body.name } className="rounded mx-auto mx-2 my-1 float-left" style={{ maxWidth: 44, }} />

            <span className="leed mx-2">{ friend.body.name }</span>

        </div>
    );

    /*   *   *   *   *   *   *   *   */

    useEffect(() => {

        fetchFriends();
        
    }, [ user.friends ]);    // eslint-disable-line


    /*   *   *   *   *   *   *   *   */

    return(
    <>

        <section className="col-12 p-2 m-1">

            <div>

                <img src={ user.body.picture.data.url } alt={ user.body.name } className="rounded mx-auto mx-2 my-1" />
                                
                <span className="lead mx-2"><em>{ user.body.name }</em></span>

            </div>        

            <button className="col-12 btn btn-danger" onClick={ logout }>Wyloguj</button>

            <hr />

        </section>

        <section className="row col-12 my-3 mx-auto">

            <div className="col-12 input-group">
                
                <input type="text" className="form-control" placeholder="Dodaj znajomego" value={ value } onChange={ fetchSearchs } />
                <div className="input-group-text">&#128269;</div>

            </div>

            <div className="col-12 my-2">

                {
                    searchs?.map( elem => 
                        
                        <div className="col-12 card p-1 mx-auto my-1" key={ elem._id } >

                                <img src={ elem.body.picture.data.url } alt={ elem.body.name } className="rounded mx-auto mx-2 my-1" />
                                                
                                <p className="mx-auto"><em>{ elem.body.name }</em></p>           

                                <button className="btn btn-info" onClick={() => addFriend( elem._id )}>+</button>
                        </div>
                    )
                }

            </div>

        </section>

        <section  className="row col-12 p-2">

            <h2 className="lead">Znajomi</h2>

            { renderFriends }

        </section>
    </>
    );
};


/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default ShowProfile;