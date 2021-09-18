import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

// global context & config
import { StoreContext } from '../configs/store';
import config from '../configs/config';



/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const ShowProfile = () => {

    const { user } = useContext( StoreContext );

    /*   *   *   *   *   *   *   *   */

    useEffect(() => {
        
    }, []);    // eslint-disable-line


    /*   *   *   *   *   *   *   *   */

    return(
    <>

        <section className="col-12 p-2 m-1">

            { console.log( user ) }

            <img src={ user.body.picture.data.url } alt={ user.body.name } className="rounded mx-auto mx-2 my-1" />
                            
            <span className="lead mx-2"><em>{ user.body.name }</em></span>

            <hr />

            <h2 className="lead">Znajomi</h2>

        </section>

    </>
    );
};


/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default ShowProfile;