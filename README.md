<h1>ISOKRONIC</h1>

<p>L'API ISOKRONIC permet d'alimenter facilement un projet en donn&eacute;es sur isokronic.com. ISOKRONIC se base sur un m&eacute;lange technologie&nbsp;Websocket et WebGL qui permet de connecter un projet 3D &agrave; des utilisateurs distants et des objets connect&eacute;s en temps r&eacute;el.</p>

<p>ISOKRONIC est d&eacute;velopp&eacute; par TWISTENGINE. Plus d'infos sur : <a href="http://twistengine.com">http://twistengine.com</a></p>

<h2>Documentation</h2>

<p>Toute la documentation sur ISOKRONIC et l'API se trouve sur le site <a href="https://isokronic.com/documentation">https://isokronic.com/documentation</a>.</p>

<h2>Support</h2>

<p>Pour toute question relative &agrave; l'utilisation de l'outil, il faut se rendre sur la page r&eacute;serv&eacute;e aux utilisateurs inscrits :&nbsp;<a href="https://isokronic.com/support">https://isokronic.com/support</a>.</p>

<h2>Installation</h2>

<p>L'API n&eacute;cessite l'installation pr&eacute;alable de node.js</p>

```bash
npm install isokronic
```

<h2>Utilisation</h2>

<p>Pour alimenter un projet, l'API envoie sur le site une commande qui contient la cl&eacute; priv&eacute;e, l'ID du projet &agrave; alimenter ainsi que la commande de modification. La cl&eacute; priv&eacute;e peut &ecirc;tre g&eacute;n&eacute;r&eacute;e dans l'espace priv&eacute; de chaque utilisateur de isokronic.&nbsp;</p>

<p>C&ocirc;t&eacute; serveur :</p>

```js
var ik = require('isokronic');

//
ik.setCredentials({
  email:'john.doe@mail.com',
  secretAccessKey:'XXXXXX_XXXX_XXXXXX'
});

//
var projectId = 'XXXXXXXXX';
ik.setProjectId( projectId );

//Exemple de commande
var command = {
    'name': 'AddObjectCommand',
    'value': {
        'uuid': '12345678',
        'type': 'Icon',
        'name': 'Hello world',
        'message': 'hello',
        'position': {
            'x': '1',
            'y': '1',
            'z': '1'
        }
    }
}

//Envoi de la commande
ik.sendCommand( command, function(error, result){       
    if(error !== undefined) console.log(error);
    else console.log(result);
});
```

<h3>C&ocirc;t&eacute; client :</h3>

<p>Afin de voir le r&eacute;sultat de vos actions vous pouvez int&eacute;grer une vue 3D &agrave; votre site web.</p>

```html
<iframe width='600' height='300' src='https://isokronic.com/3d/embed/YOUR_PROJECT_ID?key=YOUR_PUBLIC_KEY' frameborder='0' allowfullscreen></iframe>
```

<h3>Les commandes&nbsp;:</h3>

<p>Set Object Value</p>

```js
{
    name: 'SetValueCommand',
    values: {
         uuid:'xxxxx',
         attributeName:'xxxxx',
        value:'xxxx',
    }
}
```

<p>Set Position</p>

```js
{
    name: 'SetPositionCommand',
    values: {
         uuid:'xxxxx',
         x:'x.x',
         y:'x.x',
         z:'x.x'
    }
}
```

<p>Set Rotation</p>

```js
{
    name: 'SetRotationCommand',
    values: {
         uuid:'xxxxx',
         x:'x.x',
         y:'x.x',
         z:'x.x', 
       order:'XYZ'
    }
}
```
<p>Set Scale</p>

```js
{
    name: 'SetScaleCommand',
    values: {
         uuid:'xxxxx',
         x:'x.x',
         y:'x.x',
         z:'x.x'
    }
}
```

<p>Set Uuid</p>

```js
{
    name: 'SetUuidCommand',
    values: {
         uuid:'xxxxx',
         newUuid:'xxxxx'
    }
}
```

<p>Set Material Map</p>

```js
{
    name: 'SetMaterialValueCommand',
    values: {
         uuid:'xxxxx',
         materialIndex: x,
         mapName:'xxxxx',
         url:'https://xxxxx'
    }
}
```

<p>Set Material</p>

```js
{
    name: 'SetMaterialCommand',
    values: {
         uuid:'xxxxx',
         materialIndex: x,
         material:'xxxxx'
    }
}
```

<p>Set Material Value</p>

```js
{
    name: 'SetMaterialValueCommand',
    values: {
         uuid:'xxxxx',
         materialIndex: x,
         attributeName:'xxxxx',
         value:'xxxxx'
    }
}
```

<p>Set Material Color</p>

```js
{
    name: 'SetMaterialValueCommand',
    values: {
         uuid:'xxxxx',
         materialIndex: x,
         attributeName:'xxxxx',
         color:'#666666'
    }
}
```

<p>Remove Object</p>

```js
{
    name: 'RemoveObjectCommand',
    values: {
         uuid:'xxxxx'
    }
}
```

<p>Add Preset</p>

```js
{
    name: 'AddPresetCommand',
    values: {
         name:'xxxxx'
    }
}
```

<p>Add Object</p>

```js
{
    name: 'AddObjectCommand',
    values: {
         object3d
    }
}
```

<h2>License</h2>

<p>Copyright (c) 2017&nbsp;Twist Engine &lt;<a href="mailto:contact@twistengine.com">contact@twistengine.com</a>&gt;</p>

<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>

<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>

<p>THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
