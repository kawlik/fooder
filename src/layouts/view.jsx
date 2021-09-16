import React, { useState } from 'react';

// global config
import config from '../configs/config';

// components
import ViewSelector from '../components/viewSelector';
import SavedSelects from '../components/savedSelects';
import MakeSelect from '../components/makeSelect';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const View = () => {

    const [ view, setView ] = useState( config.view.select );


    let render;
    
    switch( view ) {

        default: render = <MakeSelect />; break;
        
        case config.view.saved: render = <SavedSelects />; break;

        case config.view.profile: render = <h2>PROFILE</h2>; break;
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