/*  Config object
/*   *   *   *   *   *   *   *   *   *   */

const config = {

    // API endpoinds
    API: {

        host: 'https://fooder-back.herokuapp.com/',

        image: 'https://fooder-back.herokuapp.com/img/',

        types: 'https://fooder-back.herokuapp.com/type/',

        foods: 'https://fooder-back.herokuapp.com/food/',

        makeSelect: 'https://fooder-back.herokuapp.com/select/',

        authFacebook: 'https://fooder-back.herokuapp.com/auth/facebook/',

        userAuth: 'https://fooder-back.herokuapp.com/user/auth/',

        userName: 'https://fooder-back.herokuapp.com/user/name/',

        userID: 'https://fooder-back.herokuapp.com/user/id/',

        userAdd: 'https://fooder-back.herokuapp.com/user/friend/',

        newestSelect: 'https://fooder-back.herokuapp.com/select/newest/',

        waitingSelect: 'https://fooder-back.herokuapp.com/select/waiting/',

        putSelect: 'https://fooder-back.herokuapp.com/select/id/',

        deleteSelect: 'https://fooder-back.herokuapp.com/select/',
    },

    // views values
    view: {

        saved: 'saved',
        
        select: 'select',

        waiting: 'waiting',
        
        profile: 'profile',
    },

    views: [ 'saved', 'select', 'waiting', 'profile' ],
};

/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default config;