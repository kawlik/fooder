import React, { useState } from 'react';

// global config
import config from '../configs/config';

// components
import ViewSelector from '../components/viewSelector';
import SavedSelects from '../components/savedSelects';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const View = () => {

    const [ view, setView ] = useState( config.view.select );


    let render;
    
    switch( view ) {

        case config.view.saved: render = <SavedSelects />; break;

        case config.view.select: render = <h2>SELECT</h2>; break;

        case config.view.profile: render = <h2>PROFILE</h2>; break;

        default: render = <SavedSelects />; break;
    };


    /*   *   *   *   *   *   *   *   */

    return(
    <>
        <ViewSelector curr={ view } views={ config.view } selectView={ setView } />

        <main id="view" className="p-2">

            { render }

        </main>
    </>
    );
};


/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default View;