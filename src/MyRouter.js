class MyRouter {
    constructor(){
        this._routes = [];
    }
    on(targetUrl, callback){
        this._routes.push({
            targetUrl,
            callback
        });
        return this;
    }
    navigate(){
        const curentUrl = location.hash.slice(1);

        for (const {targetUrl, callback} of this._routes){
            const params = MyRouter.matchUrls(curentUrl, targetUrl);
            if (params) {
                callback(params);
                break;
            }
        }
    }
    static matchUrls(curentUrl, targetUrl) {
        const curentUrlParts = curentUrl.split(/\//g);
        const targetUrlParts = targetUrl.split(/\//g);

        if (targetUrlParts.length !== curentUrlParts.length) {
            return false;
        }

        const params = {};

        const len = curentUrlParts.length;
        for (let i = 0; i < len; i+=1) {
            if (targetUrlParts[i][0] !== ':') {
                if (curentUrlParts[i] !== targetUrlParts[i]) {
                    return false;
                }
            }
            else {
                const paramName = targetUrlParts[i].slice(1);
                params[paramName] = curentUrlParts[i];
            }
        }
        return params;
    }
    static matchHashUrl(targetUrl) {
        const curentUrl = location.hash.slice(1);
        return matchUrls(curentUrl, targetUrl);
    }
}

export {MyRouter};