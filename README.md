## Import map from constructor page

* Copy `sid` of your map, then open page https://yandex.ru/maps/?um={your map sid}
* Open page source code
* Find code that starts with `<script class="config-view" data-block="config-view" type="text/json">` and copy inner part till `</script>`
* Open http://jsbeautifier.org/ and insert copied text, click button "Beautify Javascript"
* Find
```javascript
"userMaps": {
    "data": { // copy from this including curly brace

    } // till this including
}
```
* Then use it in the `<ConstructorJSONImport />` component.

# Run example

```
npm install
npm run build
```

Open `index.html`