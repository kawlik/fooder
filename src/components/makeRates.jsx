import React, { useEffect, useState } from 'react';
import axios from 'axios';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const MakeRates = ({ foods, types, setSelect }) => {

    const [ onList, setOnList ] = useState( [] );
    const [ onWait, setOnWait ] = useState( [] );

    const addToList = ( e, elem, score ) => {

        elem.score = score - Math.random();

        e.target.closest( '.swipe' ).classList.add( elem.score > 5 ? 'right' : 'left' );

        setTimeout(() => {
            
            setOnList( prev => [...new Set([...prev, elem ])] );
            setOnWait( prev => prev.filter( el => el._id !== elem._id ));

        }, 500 );
    };

    const render = onWait.map( elem =>

        <div key={ elem._id } className={ `border rounded swipe p-1` } onClick={ ( e ) => addToList( e, elem, 3 - Math.random() ) }>

            <div className="col-12 mx-auto p-2 rounded" style={{
                border: `3px solid ${ types.filter( el => el.name === elem.type )[0]?.color || 'whitesmoke' }`,
            }}>

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

            <div className="col-12 row mx-auto my-2 p-2" >
                    
                    <button className="col-2 mx-auto my-1 btn-rate" onClick={ ( e ) => addToList( e, elem, 2 ) }>0</button>
                    
                    <button className="col-2 mx-auto my-1 btn-rate" onClick={ ( e ) => addToList( e, elem, 4 ) }>1</button>

                    <button className="col-2 mx-auto my-1 btn-rate" onClick={ ( e ) => addToList( e, elem, 6 ) }>2</button>

                    <button className="col-2 mx-auto my-1 btn-rate" onClick={ ( e ) => addToList( e, elem, 8 ) }>3</button>

            </div>

        </div>
    );

    if( onWait.length === 0 && onList.length == foods.length ) {

    }

    /*   *   *   *   *   *   *   *   */

    useEffect(() => {

        setOnWait( prev => [...foods]);
        
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

export default MakeRates;