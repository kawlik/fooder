import React, { useState, useEffect } from 'react';

// global config
import config from '../configs/config';

// components
import ViewSelector from '../components/viewSelector';
import SavedSelects from '../components/savedSelects';
import MakeSelect from '../components/makeSelect';
import FillSelect from '../components/fillSelect';
import ShowProfile from '../components/showProfile';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const View = () => {

    const [ view, setView ] = useState( config.view.profile );
    const [ swipe, setSwipe ] = useState( null );

    let render;

    switch( view ) {

        case config.view.saved: render = <SavedSelects />; break;
        
        case config.view.select: render = <MakeSelect />; break;
        
        case config.view.waiting: render = <FillSelect />; break;
        
        case config.view.profile: render = <ShowProfile />; break;

        default: render = <ShowProfile />; break;
    };

    /*   *   *   *   *   *   *   *   */

    const touch = { x: null, y: null };

    const getTouch = ( event ) => event.touches;

    const handleTouchStart = ( event ) => {

        const firstTouch = getTouch( event )[0];

        touch.x = firstTouch.clientX;
        touch.y = firstTouch.clientY;
    };

    const handleTouchMove = ( event ) => {

        if( !touch.x || !touch.y ) {
            return;
        }

        const next_x = event.touches[0].clientX;
        const next_y = event.touches[0].clientY;
        
        const delta_x = touch.x - next_x;
        const delta_y = touch.y - next_y;
        
        if( Math.abs( delta_x ) > Math.abs( delta_y ) && Math.abs( delta_x ) > window.innerWidth / 2 ) {

            const min = 0;
            const max = config.views.length - 1;
            const index = config.views.indexOf( view );

            if( delta_x < 0 && index - 1 >= min ) {

                setView( config.views[ index - 1 ] );
                setSwipe( 'left' );
            }

            if( delta_x > 0 && index + 1 <= max ) {
                
                setView( config.views[ index + 1 ] );
                setSwipe( 'right' );                
            }
        }
    };

    useEffect(() => {

        // swipe events
        document.addEventListener( 'touchstart', handleTouchStart );
        document.addEventListener( 'touchmove', handleTouchMove );

        return(() => {

            document.removeEventListener( 'touchstart', handleTouchStart );
            document.removeEventListener( 'touchmove', handleTouchMove );
        });

    }, [ view ]);     // eslint-disable-line

    /*   *   *   *   *   *   *   *   */

    return(
    <>
        <ViewSelector curr={ view } views={ config.view } selectView={ setView } />

        <main id="view" className={ `p-1 ${ swipe }`} key={ view } >

            { render }

        </main>
    </>
    );
};


/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default View;