import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

// global context & config
import { StoreContext } from '../configs/store';
import config from '../configs/config';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const SavedSelects = () => {

    const { user, types } = useContext( StoreContext );

    const [ selects, setSelects ] = useState( [] );

    const fetchSelects = async () => {

        const fetchSelects = await axios.get( config.API.newestSelect + user._id );

        if( fetchSelects.data.length ) {

            for( let i = 0; i < fetchSelects.data.length; i++ ) {

                const select = fetchSelects.data[ i ];

                for( let j = 0; j < select.participants.length; j++ ) {

                    const participant = select.participants[ j ];

                    try {

                        const res = await axios.get( config.API.userID + participant );
                        const name = res.data.body.name;
    
                        select.participants[ j ] = name;

                    } catch( err ) {

                        console.error( err );

                        select.participants[ j ] = 'user';
                    }
                }
            }

            setSelects( prev => fetchSelects.data );
        }
    };

    const render = selects.map( elem => 

        <div key={ elem._id } className="card col-12 p-2 m-1" >

            <p><em>{ elem.date.split( 'T' )[0] }</em></p>

            {
                elem.participants.map( participant => 
                    <span className="small" key={ participant }>{ participant }</span>
                )
            }

            <details className="container lead mt-2">
                    
                <summary>Rezultat</summary>
                
                {
                    elem.result.map(( result, index ) =>

                        <div key={ result._id } className="my-2 p-1 row rounded" style={{
                            border: `1px solid ${ types.filter( el => el.name === result.type )[0]?.color || 'whitesmoke' }`,
                            boxShadow: `0 0 15px -5px ${ types.filter( el => el.name === result.type )[0]?.color || 'whitesmoke' }`,
                        }}>

                            <span className="col-2 lead p-2">{ index + 1 }.</span>

                            <span className="col-10 lead p-2"><em>{ result.name }</em></span>

                            <img src={ config.API.image + result.img } alt={ result.name} className="rounded mx-auto m-1" style={{
                                maxWidth: 192,
                            }} />

                        </div>
                    )
                }

            </details>
            
        </div>
    );

    /*   *   *   *   *   *   *   *   */

    useEffect(() => {
        
        if( !selects.length ) {

            fetchSelects();
        }

    }, [ selects ]);

    /*   *   *   *   *   *   *   *   */

    return(
    <>
        
        { render }

    </>
    );
};


/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default SavedSelects;