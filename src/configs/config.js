/*  Config object
/*   *   *   *   *   *   *   *   *   *   */

const config = {

    // API endpoinds
    API: {

        host: 'http://localhost:8080/',

        image: 'http://localhost:8080/img/',

        types: 'http://localhost:8080/type/',

        foods: 'http://localhost:8080/food/',

        makeSelect: 'http://localhost:8080/select/',

        authFacebook: 'http://localhost:8080/auth/facebook/',

        userAuth: 'http://localhost:8080/user/auth/',

        userName: 'http://localhost:8080/user/name/',

        userID: 'http://localhost:8080/user/id/',

        userAdd: 'http://localhost:8080/user/friend/',

        newestSelect: 'http://localhost:8080/select/newest/',

        waitingSelect: 'http://localhost:8080/select/waiting/',

        putSelect: 'http://localhost:8080/select/id/',

        deleteSelect: 'http://localhost:8080/select/',
    },

    // views values
    view: {

        saved: 'saved',
        
        select: 'select',

        waiting: 'waiting',
        
        profile: 'profile',
    },
};

/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default config;