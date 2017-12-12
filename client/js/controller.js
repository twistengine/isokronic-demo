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
    
    $scope.demoCommands = [ {
            title:"Add rocket icon", 
            name:"AddObjectCommand",
            value:{
                uuid: "123456",
                type: "Mesh",
                icon: "",
                message: "Hello world"
            }
        },
        {
           title:"Move the red box", 
           name:"SetPositionCommand",
            value:{
                uuid: "6C16D678-392A-4A5E-AB3B-761A9FF4B8A3",
                x:"2",
                y:"3",
                z:"0"
            }
        },
        {
           title:"Add timeline tag", 
           name:"AddTagCommand",
            value:{
                time:"1.1",
                text:"First Step"
            }
        }];
    
    $scope.projectId = 'YOUR_PROJECT_ID';
    $scope.publicKey = 'YOUR_PUBLIC_KEY';

    $scope.objectAttr = ikObjectAttr;// from js/attributes.js
    $scope.commands = ikCommands;// from js/commands.js

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
    
    $scope.sendDemo = function(commandKey) {
        
        var message = {
            projectId: $scope.projectId,
            command: $scope.demoCommands[commandKey]
        };

        socket.emit('message', message);
    };

    $scope.send = function(commandName) {
        
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
        
        socket.emit('message', message);
    };

}
