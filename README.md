# utm-package
Create a repository for urls that contain UTM in the url

## There are 4 differnt types of urls
- Empty link <a href=""></a>
- Link with an # on it  <a href="#"></a>
- Link with an external/internal link on it <a href="http://localhost/UTM-NPM"></a>
- Link with an external/internal link on it but with parameters <a href="http://localhost/UTM-NPM?s=search"></a>

### Install
```sh
npm i @teamthunderfoot/utm-package
```
### Setup
```sh
import UTM from '@teamthunderfoot/utm-package';
```
### Init for all links on the page
    allLinks: true  -> if the utm should set to all links
```sh
    new UTM({
        allLinks : true, 
    });
```

### Init for specifix links on the page
    allLinks: set false -> for only some  specific links
    linkTarget : all links with this class will be overwritten by the url with utms
```sh
    new UTM({
        allLinks : false, 
        linkTarget : ".js--utm" 
    });
```