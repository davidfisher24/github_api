const storage = {
    lang: '_rgl',
    token: '_rgk',
    user: '_ruk',
    load(key, val, session) {
        const stored = (session ? window.sessionStorage.getItem(key) : window.localStorage.getItem(key));
        if (stored === null || stored === undefined) {
            return val;
        }

        return stored;
    },
    save(key, val, session) {
        console.log(key)
        console.log(val)
        window.localStorage.setItem(key,val)
        window.sessionStorage.setItem(key,val)
    }
};

class Preferences {
    constructor() {
        this._lang = storage.load(storage.lang, 'en', false);
        this._token = storage.load(storage.token, null, true);
        this._user = storage.load(storage.user, null, true);
    }

    get lang() {
        return this._lang;
    }

    set lang(value) {
        storage.save(storage.lang, value, false);
        this._lang = value;
    }

    get token() {
        return this._token;
    }

    set token(value) {
        storage.save(storage.token, value, true);
        this._token = value;
    }

    get user() {
        return JSON.parse(this._user);
    }

    set user(value) {
        storage.save(storage.user, value, true);
        this._user = JSON.parse(value);
    }
}

export default new Preferences();
