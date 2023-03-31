
import UTM from './Utm';
class Page{
    constructor(){
        this.init()
        this.events()
    }
    init(){ 
        new UTM({
            allLinks : true, // Set true if the utm should set to all links, set false for only some links
            linkTarget : ".js--utm" //all links with this class will be wverwritten by the url with utms, only if the allLink is set to false
        });
    }
    events(){}
}
export default Page;

new Page()