import React, { useState } from 'react';

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


    let render;
    
    switch( view ) {

        default: render = <MakeSelect />; break;
        
        case config.view.saved: render = <SavedSelects />; break;
        
        case config.view.waiting: render = <FillSelect />; break;

        case config.view.profile: render = <ShowProfile />; break;
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