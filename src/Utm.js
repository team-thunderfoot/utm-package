import JSUTIL from '@andresclua/jsutil/src/js_helper';
class UTM {
    constructor(payload){
        this.DOM = {
            allLinks : payload.allLinks,
            links : (payload.allLinks) ? document.querySelectorAll("a") : document.querySelectorAll(payload.linkTarget), // all links to be replaced by the utm
            currentURL: window.location.href, // compelte url
            originUrl : window.location.origin + window.location.pathname, // root url
        }
        this.JSUTIL = new JSUTIL();

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

export default UTM;   