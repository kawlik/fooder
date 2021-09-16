import React, { useEffect, useState } from 'react';
import axios from 'axios';

// global context & config
import config from '../configs/config';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const FetchWaiting = ({ user, setWaiting }) => {
    
    const [ onList, setOnList ] = useState( [] );

    // fetches list
    const fetchOnLIst = async () => {

        const fetchedData = await axios.get( config.API.waitingSelect + user._id );

        if( fetchedData.data.length ) {

            for( let i = 0; i < fetchedData.data.length; i++ ) {

                const elem = fetchedData.data[ i ];

                for( let j = 0; j < elem.participants.length; j++ ) {

                    const participant = elem.participants[ j ];

                    try {

                        const res = await axios.get( config.API.userID + participant );
                        const participantBody = res.data;
    
                        elem.participants[ j ] = participantBody;

                    } catch( err ) {

                        console.error( err );

                        elem.participants[ j ] = {
                            id: '0',
                            body: {
                                name: 'user',
                                picture: {
                                    data: {
                                        url: ''
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        setOnList( prev => fetchedData.data );
    };

    // delets select
    const deleteSelect = async ( id ) => {

        axios.delete( config.API.deleteSelect + id )
        .finally(() => setOnList( prev => prev.filter( el => el._id !== id )));
    }

    const render = onList.map( elem => 

        <div key={ elem._id } className="m-1 p-2 border rounded col-12">

            <p><em>{ elem.date.split( 'T' )[0] }</em></p>

            {
                elem.participants.map( participant =>
                    <div key={ participant._id }>

                        <img src={ participant.body.picture.data.url } alt={ participant.body.name } className="rounded mx-auto mx-2 my-1" style={{
                                maxWidth: 32,
                            }} />
                            
                        <span className="small mx-2">{ participant.body.name }</span>

                    </div>
                )
            }

            <div className="col-12 row p-1 mt-1">

                <button className="col-5 btn btn-success mx-auto mt-1" onClick={() => setWaiting( prev => elem )} >Wykonaj</button>

                <button className="col-5 btn btn-danger mx-auto mt-1" onClick={() => deleteSelect( elem._id )} >Anuluj</button>

            </div>

        </div>
    )


    /*   *   *   *   *   *   *   *   */

    useEffect(() => {

        fetchOnLIst();
        
    }, []);    // eslint-disable-line


    /*   *   *   *   *   *   *   *   */

    return(
    <>

        <h2 className="lead">Zaproszenia do zrealizowania</h2>

        { render }
        
    </>
    );
};


/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default FetchWaiting;