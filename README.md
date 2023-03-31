# utm-package
Create a repository for urls that contain UTM in the url

### Install
```sh
npm i @teamthunderfoot/utm
```
### Setup
```sh
import UTM from '@teamthunderfoot/utm';
```
### Init class for all links 
    allLinks: true  -> if the utm should set to all links
```sh
    new UTM({
        allLinks : true, 
    });
```

### Init class for specific links 
    allLinks: set false -> for only some  specific links
    linkTarget : all links with this class will be overwritten by the url with utms
```sh
    new UTM({
        allLinks : false, 
        linkTarget : ".js--utm" 
    });
```