function Controller($scope) {

    var socket = io.connect();

    $scope.messages = [];
    $scope.roster = [];
    $scope.name = '';
    $scope.text = '';
    $scope.activeTab = 'AddObjectCommand';

    $scope.geometry = { type: "Box", width: 1, height: 1, depth: 1 };
    $scope.material = { type: "Standard", color: 0x666666, emissive: 0x000000, texture: "" };

    $scope.object = {
        uuid: "123456",
        type: "Mesh",
        icon: "",
        message: "Hello world"
    };

    $scope.projectId = 'FCSmNZ24k3aTNZERd';
    $scope.publicKey = 'xzzokSJFK2m2nEno0j2_aajD73ecJA5NNSBwGStAfGy';

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

    $scope.objectAttr = [
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

    $scope.commands = [{
        title: 'Set Object Value',
        command: 'SetValueCommand',
        infos: ['uuid: Unique identifier of the object', 'attributeName: Name of the value to change.', 'value: Your new value.'],
        values: [{ name: 'uuid', model: null, type: 'string' },
            { name: 'attributeName', model: null, type: 'string' },
            { name: 'value', model: null, type: 'string' }
        ]
    }, {
        title: 'Set Position',
        command: 'SetPositionCommand',
        values: [{ name: 'uuid', model: null }, { name: 'x', model: null }, { name: 'y', model: null }, { name: 'z', model: null }]
    }, {
        title: 'Set Rotation',
        command: 'SetRotationCommand',
        values: [{ name: 'uuid', model: null }, { name: 'x', model: null }, { name: 'y', model: null }, { name: 'z', model: null }, { name: 'order', model: null }]
    }, {
        title: 'Set Scale',
        command: 'SetScaleCommand',
        values: [{ name: 'uuid', model: null }, { name: 'x', model: null }, { name: 'y', model: null }, { name: 'z', model: null }]
    }, {
        title: 'Set Uuid',
        command: 'SetUuidCommand',
        values: [{ name: 'uuid', model: null }, { name: 'newUuid', model: null }]
    }, {
        title: 'Set Material Map',
        command: 'SetMaterialMapCommand',
        values: [{ name: 'uuid', model: null }, { name: 'materialIndex', model: null }, { name: 'mapName', model: null }, { name: 'url', model: null }]
    }, {
        title: 'Set Material',
        command: 'SetMaterialCommand',
        values: [{ name: 'uuid', model: null }, { name: 'materialIndex', model: null }, { name: 'material', model: null, defaultValue: 'Standard', allowed: ['Text', 'Standard', 'Phong'] }]
    }, {
        title: 'Set Material Value',
        command: 'SetMaterialValueCommand',
        values: [{ name: 'uuid', model: null }, { name: 'materialIndex', model: null }, { name: 'attributeNam', model: null }, { name: 'value', model: null }]
    }, {
        title: 'Set Material Color',
        command: 'SetMaterialColorCommand',
        values: [{ name: 'uuid', model: null }, { name: 'materialIndex', model: null }, { name: 'attributeName', model: null }, { name: 'color', model: null }]
    }, {
        title: 'Remove Object',
        command: 'RemoveObjectCommand',
        values: [{ name: 'uuid', model: null }]
    }, {
        title: 'Add Preset',
        command: 'AddPresetCommand',
        values: [{ name: 'name', model: null }]
    }];

    socket.on('error', function(msg) {

        if (!msg) return;
        if (msg.command == "AddObjectCommand") {

            $scope.object.error = msg.error;
            $scope.object.result = null;

        }

        $scope.commands.forEach(function(cmd) {

            if (cmd.command == msg.command) {
                cmd.error = msg.error;
                cmd.result = null;
            }

        });

        $scope.$apply();
    });

    socket.on('result', function(msg) {

        if (!msg) return;
        if (msg.command == "AddObjectCommand") {

            $scope.object.result = JSON.stringify(msg.result, null, 4);
            $scope.object.error = null;

        }

        $scope.commands.forEach(function(cmd) {

            if (cmd.command == msg.command) {
                cmd.result = JSON.stringify(msg.result, null, 4);
                cmd.error = null;
            }

        });

        $scope.$apply();

    });

    $scope.send = function send(commandName) {
        var message = {
            projectId: $scope.projectId,
            command: { name: commandName, value: {} }
        };

        $scope.commands.forEach(function(cmd) {

            if (cmd.command == commandName) {

                for (var i = 0; i < cmd.values.length; i++) {

                    if (cmd.values[i].model)
                        message.command.value[cmd.values[i].name] = cmd.values[i].model;

                }
            }
        });

        socket.emit('message', message);
    };

    function getUnicode(value) {

        var unicode;
        var reg = /\\f([0-9]*[a-z]*)*/g;

        var el = document.getElementById('icon-div');
        var regLength = reg.exec(value);

        // console.log( regLength );

        if (regLength && regLength.length) {

            unicode = value;

            el.className = 'fa fa-custom';

            document.styleSheets[0].insertRule(".fa-custom:before { content: '" + value + "'; }", 1);

        }
        else {

            el.className = 'fa fa-' + value;

        }

        var style = window.getComputedStyle(el, ':before');
        unicode = style.getPropertyValue('content').replace(/\"*/g, '');

        return unicode;

    }
    $scope.sendObject = function send() {
        var message = {
            projectId: $scope.projectId,
            command: { name: 'AddObjectCommand', value: {} }
        };

        $scope.objectAttr.forEach(function(attr) {

            if (attr.attributes !== undefined) {

                for (var i = 0; i < attr.attributes.length; i++) {

                    if (attr.attributes[i].model) {

                        if (message.command.value[attr.name] == undefined) message.command.value[attr.name] = {};

                        message.command.value[attr.name][attr.attributes[i].name] = attr.attributes[i].model;

                    }
                }

            }
            else {

                if (attr.model)
                    message.command.value[attr.name] = attr.model;

                if (attr.name == 'icon') {
                    message.command.value[attr.name] = getUnicode(attr.model);
                }
            }
        });
        //console.log(message);
        socket.emit('message', message);
    };

}
