var positionAttributes = [
    { name: 'x', model: null, defaultValue: 0, type: 'number' },
    { name: 'y', model: null, defaultValue: 0, type: 'number' },
    { name: 'z', model: null, defaultValue: 0, type: 'number' }
];

var rotationAttributes = [
    { name: 'x', model: null, defaultValue: 0, type: 'number' },
    { name: 'y', model: null, defaultValue: 0, type: 'number' },
    { name: 'z', model: null, defaultValue: 0, type: 'number' },
    { name: 'order', model: null, defaultValue: 'XYZ', type: 'string' }
];

var scaleAttributes = [
    { name: 'x', model: null, defaultValue: 0, type: 'number' },
    { name: 'y', model: null, defaultValue: 0, type: 'number' },
    { name: 'z', model: null, defaultValue: 0, type: 'number' }
];

var geometryAttributes = [
    { name: 'type', model: null, defaultValue: 'Box', type: 'select', allowed: ['Box', 'Sphere', 'Cylinder', 'Plane', 'Circle'] },
    { name: 'width', model: null, defaultValue: null, type: 'number', enable: ['Box', 'Plane'] },
    { name: 'height', model: null, defaultValue: null, type: 'number', enable: ['Box', 'Plane', 'Cylinder'] },
    { name: 'depth', model: null, defaultValue: null, type: 'number', enable: ['Box'] },
    { name: 'radius', model: null, defaultValue: null, type: 'number' },
    { name: 'segments', model: null, defaultValue: null, type: 'number' },
    { name: 'radiusTop', model: null, defaultValue: null, type: 'number' },
    { name: 'radiusBottom', model: null, defaultValue: null, type: 'number' },
    { name: 'radiusSegments', model: null, defaultValue: null, type: 'number' },
    { name: 'openEnded', model: null, defaultValue: null, type: 'number' },
    { name: 'widthSegments', model: null, defaultValue: null, type: 'number' },
    { name: 'heightSegments', model: null, defaultValue: null, type: 'number' },
    { name: 'phiStart', model: null, defaultValue: null, type: 'number' },
    { name: 'phiLength', model: null, defaultValue: null, type: 'number' },
    { name: 'thetaStart', model: null, defaultValue: null, type: 'number' },
    { name: 'thetaLength', model: null, defaultValue: null, type: 'number' }
];

var materialAttributes = [
    { name: 'type', model: null, defaultValue: 'Standard', allowed: ['Text', 'Standard', 'Phong'] },
    { name: 'color', model: null, defaultValue: null },
    { name: 'emissive', model: null, defaultValue: null },
    { name: 'roughness', model: null, defaultValue: null },
    { name: 'metalness', model: null, defaultValue: null }
];

var ikObjectAttr = [
    { name: 'uuid', model: '12345678', defaultValue: '12345678', info: 'Universal unique identifier' }, //Required universal unique identifier.
    { name: 'type', model: null, defaultValue: 'Mesh', type: 'select', allowed: ['Mesh', 'Icon', 'Light', 'Comment', 'Event'] }, //Mesh, Light, Comment, Event or Alert, Icon
    { name: 'url', model: null, defaultValue: '', type: 'string' },
    { name: 'color', model: null, defaultValue: '' },
    { name: 'parentUuid', model: null, defaultValue: '', info: 'Uuid of object this object will be link to' }, //object type.
    { name: 'name', model: null, defaultValue: 'No name' }, //object name.
    { name: 'icon', model: null, defaultValue: '', info: 'Enter an unicode code from the great and free Font Awesome icon library.\n For example : \\f135 or "rocket".\n More info: http://fontawesome.io' }, //
    { name: 'message', model: null, defaultValue: '' }, //
    { name: 'matrix', model: null, defaultValue: '' }, //Object matrix. Attention si elle est définie, la position, la rotation et l’échelle ne seront pas prises en compte.
    { name: 'position', model: null, attributes: positionAttributes }, //Position x, y, z. if null, it will be set to 0, 0, 0.
    { name: 'rotation', model: null, attributes: rotationAttributes }, //Rotation x, y, z. if null, it will be set to 0, 0, 0. De l’objet en radians dans l’ordre défini par "order" ("XYZ" par défaut).
    { name: 'scale', model: null, attributes: scaleAttributes }, //Scale x, y, z. if null, it will be set to 0, 0, 0.
    { name: 'geometry', model: null, attributes: geometryAttributes }, //Définition de la géométrie. Pour éviter les temps de chargement, il est conseillé d’utiliser les primitives ("Box", "Sphere", "Cylinder", etc). Voir la doc Threejs.
    { name: 'material', model: null, attributes: materialAttributes }
];