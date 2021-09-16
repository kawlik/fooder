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
                        const participantBody = res.data;
    
                        select.participants[ j ] = participantBody;

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
                    <div key={ participant._id }>
                        <img src={ 'https://picsum.photos/200' || config.API.image + participant.body.img } alt={ participant.body.name } className="rounded mx-auto mx-2 my-1" style={{
                                maxWidth: 32,
                            }} />
                        <span className="small mx-2">{ participant.body.name }</span>
                    </div>
                )
            }

            <details className="container lead mt-2">
                    
                <summary>Rezultat</summary>
                
                {
                    elem.result.map(( result, index ) =>

                        <div key={ result._id } className="my-2 p-1 row rounded" style={{
                            border: `1px solid ${ types.filter( el => el.name === result.type )[0]?.color || 'whitesmoke' }`,
                            boxShadow: `0 0 15px -5px ${ types.filter( el => el.name ===     result.type )[0]?.color || 'whitesmoke' }`,
                        }}>

                            <figure>

                                <blockquote className="blockquote">

                                    <span style={{
                                        fontSize: '28px',
                                        fontWeight: '300',
                                        lineHeight: '130%',
                                    }}>{ `${ index }. ${ result.name }` }</span>

                                </blockquote>

                                <figcaption className="blockquote-footer" style={{
                                    color: `${ types.filter( el => el.name === result.type )[0]?.color || 'whitesmoke' }`,
                                    textShadow: `1px 1px 5px ${ types.filter( el => el.name === result.type )[0]?.color || 'whitesmoke' }`
                                }}>

                                    <cite title="food type">{ result.type }</cite>

                                </figcaption>

                            </figure>

                            <img src={ 'https://picsum.photos/200' || config.API.image + result.img } alt={ result.name } className="rounded mx-auto m-1" style={{
                                maxWidth: 128,
                            }} />

                        </div>
                    )
                }

            </details>
            
        </div>
    );

    /*   *   *   *   *   *   *   *   */
                
    useEffect(() => {

        fetchSelects();

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

export default SavedSelects;