class Params {
    constructor(payload){
        this.DOM = {
            links : (payload && payload.linkTarget ) ? document.querySelectorAll(payload.linkTarget) : document.querySelectorAll("a"), // all links to be replaced by the utm
            currentURL: window.location.href, // compelte url
            originUrl : window.location.origin + window.location.pathname, // root url
        }
        if(this.DOM.links){
            this.init()
            this.events()
        }
    }
    init(){
        var seoParams = this.DOM.currentURL.replace(this.DOM.originUrl, "");
        seoParams = seoParams.replace("?", "");
        if(this.DOM.currentURL !== this.DOM.originUrl){
            this.DOM.links.forEach(element => { 
                if(element.getAttribute("href") != '#' && element.getAttribute("href") != '') {
                    if(element.href.includes('?')){
                        element.href = element.href  + '&' + seoParams;
                    }else{
                        element.href = element.href  + '?' + seoParams.replace("?", "");
                    }
                }
            });
        }
    }
    events(){  }
}

export default Params;   