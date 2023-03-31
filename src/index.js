
import Params from './Params';
class Page {
    constructor(){
        this.init()
        this.events()
    }
    init(){ 
        new Params({
            linkTarget : ".js--utm" //all links with this class will be wverwritten by the url with utms, only if the allLink is set to false
        })
    }
    events(){}
}
export default Page;

new Page()