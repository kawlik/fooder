import React, { useContext, useState } from 'react';
import axios from 'axios';

// global context & config
import { StoreContext } from '../configs/store';
import config from '../configs/config';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const Login = () => {

    const { setUser } = useContext( StoreContext );

    const [ token, setToken ] = useState( '' );

    /*   *   *   *   *   *   *   *   */
    
    const updateToken = ( e ) => {

        setToken( prev => e.target.value )
    };

    const login = async ( e ) => {

        e.preventDefault();
        
        const res = await axios.get( config.API.userAuth + token );
        const user = res.data;

        if( user?.auth === token ) {

            setUser( user );
        }
    };


    /*   *   *   *   *   *   *   *   */

    return(
    <>

        <section className="container row my-auto">

            <form className="col-12 col-md-8 mx-auto p-2 card shadow bg-light">

                <div className="m-3">
                    <label className="form-label lead">Twój token logowania</label>
                    <input className="form-control" type="password" onChange={ updateToken } value={ token } />
                </div>
                

                <div className="m-3">
                    <a target="blank" href={ config.API.authFacebook } className="btn btn-primary me-1">Pobierz z Facebook</a>
                    <button type="button" className="btn btn-success ms-1" onClick={ login }>Zaloguj</button>
                </div>

            </form>

        </section>

    </>
    );
};


/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default Login;