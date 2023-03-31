
The purpose of this package is to preserve all parameters in the URL while browsing a website, even when navigating to different pages. For instance, if you visit a website such as x.com/?utm_source="a" and then move to another page like x.com/foo/?utm_source="a", the "utm_source" parameter will remain in the URL. This package ensures that all links within the website retain their parameters, regardless of whether the links contain them or not.


### Install
```sh
npm i @teamthunderfoot/params
```
### Basic Setup

By default it will check all anchor tags
```sh
import Params from '@teamthunderfoot/params';
new Params();
```

### Custom links
Is it possible to track only certain elements on your page if that is what you desire
```sh
new Params({
    linkTarget : ".js--utm" 
});
```
