import i18n from './i18n';

class Form {
    constructor(obj) {
        Object.keys(obj).forEach(item => {
            this[item] = obj[item];
        });
        this._errors = {};
    }

    get data() {
        let data = Object.assign({}, this);
        delete data._errors;
        return data;
    }

    has(field) {
        return (this._errors[field] !== undefined);
    }
    
    error(field) {
        if (!this._errors[field]) {
            return null;
        }

        let components = this._errors[field].split('|');
        if (components.length < 2) {
            return this._errors[field];
        }

        let rule = components[0];
        let fieldName = components[1];
        let params = [fieldName];
        for (let i = 2; i < components.length; i++) {
            params.push(components[i]);
        }

        return i18n.t('validation.'  + rule, params);
    }

    push(field, errorMessage) {
        this._errors[field] = errorMessage;
        this._errors = Object.assign({}, this._errors);
    }

    clear(field) {
        if (field === undefined) {
            this._errors = {};
        } else {
            delete this._errors[field];
        }
    }

    parse(err) {
        if (err && err.response && err.response.data && err.response.status === 422 && err.response.data.details) {
            this._errors = {};
            Object.keys(err.response.data.details).forEach(item => {
                this._errors[item] = err.response.data.details[item][0];
            });
            return true;
        }

        return false;
    }
}

export default Form;
