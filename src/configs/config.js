/*  Config object
/*   *   *   *   *   *   *   *   *   *   */

const config = {

    // API endpoinds
    API: {

        host: 'http://localhost:8080/',

        image: 'http://localhost:8080/img/',

        types: 'http://localhost:8080/type/',

        foods: 'http://localhost:8080/food/',

        authFacebook: 'http://localhost:8080/auth/facebook/',

        userAuth: 'http://localhost:8080/user/auth/',

        userID: 'http://localhost:8080/user/id/',

        newestSelect: 'http://localhost:8080/select/newest/',
    },

    // views values
    view: {

        saved: 'saved',
        
        select: 'select',
        
        profile: 'profile',
    },
};

/*  Module export
/*   *   *   *   *   *   *   *   *   *   */

export default config;