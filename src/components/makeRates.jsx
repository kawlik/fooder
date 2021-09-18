import React, { useEffect, useState } from 'react';

// global config
import config from '../configs/config';

// icons
import { BiHappyAlt, BiHappyHeartEyes } from 'react-icons/bi';
import { FaRegSadCry, FaRegSadTear } from 'react-icons/fa';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const MakeRates = ({ foods, types, sendSelect }) => {

    const [ onList, setOnList ] = useState( [] );

    const addToList = ( e, elem, score ) => {

        elem.score = score - Math.random();

        e.target.closest( 'button' ).classList.add( 'selected' );

        e.target.closest( '.swipe' ).classList.add( elem.score > 5 ? 'right' : 'left' );
            
        setOnList( prev => [...prev, elem ] );
    };

    const render = foods.map( elem =>

        <div key={ elem._id } className="rounded swipe p-1" >

            <div className="col-12 mx-auto p-2 rounded unrated" style={{
                border: `3px solid ${ types.filter( el => el.name === elem.type )[0]?.color || 'whitesmoke' }`,
                flexGrow: '1',
            }}>

                <img src={ config.API.image + elem.img } alt={ elem.name } className="rounded img-fluid mx-auto my-auto" />

                <div>

                    <blockquote className="blockquote">

                        <span style={{
                            fontSize: '28px',
                            fontWeight: '300',
                            lineHeight: '110%',
                            textAlign: 'center',
                        }}>{ elem.name }</span>

                    </blockquote>

                    <figcaption className="blockquote-footer" style={{
                        color: '#343434'
                    }}>

                        <cite title="food type">{ elem.type }</cite>

                    </figcaption>

                </div>

            </div>

            <div className="col-12 row mx-auto my-1 p-1" >
                    
                    <button className="col-2 mx-auto btn-rate" onClick={ ( e ) => addToList( e, elem, 2 ) } style={{ backgroundColor: '#dc3545' }}><FaRegSadCry /></button>
                    
                    <button className="col-2 mx-auto btn-rate" onClick={ ( e ) => addToList( e, elem, 4 ) } style={{ backgroundColor: '#ffc107' }}><FaRegSadTear /></button>

                    <button className="col-2 mx-auto btn-rate" onClick={ ( e ) => addToList( e, elem, 6 ) } style={{ backgroundColor: '#20c997' }}><BiHappyAlt /></button>

                    <button className="col-2 mx-auto btn-rate" onClick={ ( e ) => addToList( e, elem, 8 ) } style={{ backgroundColor: '#198754' }}><BiHappyHeartEyes /></button>

            </div>

        </div>
    );

    /*   *   *   *   *   *   *   *   */

    useEffect(() => {

        if( onList.length === foods.length ) {

            sendSelect( onList );
    
            setOnList( prev => [] );
        }
        
    }, [ onList ]);    // eslint-disable-line


    /*   *   *   *   *   *   *   *   */

    return(
    <>

        { render }

    </>
    );
};


/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default MakeRates;