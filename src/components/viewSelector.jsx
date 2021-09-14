import React from 'react';

// fonts module
import { FaUser, FaCalendarCheck, FaCalendarPlus } from 'react-icons/fa';


/*  Module schema
/*   *   *   *   *   *   *   *   *   *   */

const ViewSelector = ({ curr, views, selectView }) => {


    const setView = ( e ) => {

        const btn = e.target.closest( 'button' );

        selectView( prev => btn.value )
    };


    /*   *   *   *   *   *   *   *   */

    return(
    <nav id="selector" className="row p-3">

        <button onClick={ setView } value={ views.saved } type="button" className={ `col-2 selectItem mx-auto ${ curr === views.saved && 'active'}` }><FaCalendarCheck /></button>

        <button onClick={ setView } value={ views.select } type="button" className={ `col-2 selectItem mx-auto ${ curr === views.select && 'active'}` }><FaCalendarPlus /></button>

        <button onClick={ setView } value={ views.profile } type="button" className={ `col-2 selectItem mx-auto ${ curr === views.profile && 'active'}` }><FaUser /></button>

    </nav>
    );
};


/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default ViewSelector;