ikCommands = [
//Animation setting commands
{
    title: 'Add Keyframe',
    command: 'AddKeyframeCommand',
    values: [{ name: 'path', model: null }, { name: 'time', model: null }, { name: 'value', model: null }]
},
{
    title: 'Set Keyframe',
    command: 'SetKeyframeCommand',
    values: [{ name: 'path', model: null }, { name: 'time', model: null }, { name: 'value', model: null }]
},
{
    title: 'Remove Keyframe',
    command: 'RemoveKeyframeCommand',
    values: [{ name: 'path', model: null }, { name: 'time', model: null }]
},
{
    title: 'Move Keyframe',
    command: 'MoveKeyframeCommand',
    values: [{ name: 'path', model: null }, { name: 'index', model: null }, { name: 'time', model: null }, { name: 'z', model: null }]
},
{
    title: 'Set Interpolation',
    command: 'SetInterpolationCommand',
    values: [{ name: 'path', model: null }, { name: 'interpolation', model: null, defaultValue: 'Linear', type: 'select', allowed: ['Linear', 'Discrete', 'Smooth'] }]
},
//Tag setting commands
{
    title: 'Add Animation Tag',
    command: 'AddTagCommand',
    values: [{ name: 'time', model: null }, { name: 'text', model: null }]
},
{
    title: 'Set Animation Tag',
    command: 'SetTagCommand',
    values: [{ name: 'index', model: null }, { name: 'time', model: null }, { name: 'text', model: null }]
}, 
{
    title: 'Remove Animation Tag',
    command: 'RemoveTagCommand',
    values: [{ name: 'time', model: null }]
},
//Attribute setting commands
{
    title: 'Add Custom Attribute',
    command: 'AddAttributeCommand',
    values: [{ name: 'uuid', model: null }, { name: 'property', model: null }, { name: 'value', model: null }]
},
{
    title: 'Set Custom Attribute',
    command: 'SetAttributeCommand',
    values: [{ name: 'uuid', model: null }, { name: 'property', model: null }, { name: 'value', model: null }]
},
{
    title: 'Remove Custom Attribute',
    command: 'RemoveAttributeCommand',
    values: [{ name: 'uuid', model: null }, { name: 'property', model: null }]
},
//object setting commands
{
    title: 'Set Object Value',
    command: 'SetValueCommand',
    infos: ['uuid: Unique identifier of the object', 'attributeName: Name of the value to change.', 'value: Your new value.'],
    values: [{ name: 'uuid', model: null, type: 'string', info: 'uuid: Unique identifier of the object' },
        { name: 'attributeName', model: null, type: 'string', info: 'attributeName: Name of the value to change.' },
        { name: 'value', model: null, type: 'string', info: 'value: Your new value.' }]
}, 
{
    title: 'Set Position',
    command: 'SetPositionCommand',
    values: [{ name: 'uuid', model: null }, { name: 'x', model: null }, { name: 'y', model: null }, { name: 'z', model: null }]
}, 
{
    title: 'Set Rotation',
    command: 'SetRotationCommand',
    values: [{ name: 'uuid', model: null }, { name: 'x', model: null }, { name: 'y', model: null }, { name: 'z', model: null }, { name: 'order', model: null }]
}, 
{
    title: 'Set Scale',
    command: 'SetScaleCommand',
    values: [{ name: 'uuid', model: null }, { name: 'x', model: null }, { name: 'y', model: null }, { name: 'z', model: null }]
}, 
{
    title: 'Set Uuid',
    command: 'SetUuidCommand',
    values: [{ name: 'uuid', model: null }, { name: 'newUuid', model: null }]
}, 
{
    title: 'Set Material Map',
    command: 'SetMaterialMapCommand',
    values: [{ name: 'uuid', model: null }, { name: 'materialIndex', model: null }, { name: 'mapName', model: null }, { name: 'url', model: null }]
}, 
{
    title: 'Set Material',
    command: 'SetMaterialCommand',
    values: [{ name: 'uuid', model: null }, { name: 'materialIndex', model: null }, { name: 'material', model: null, defaultValue: 'Standard', allowed: ['Text', 'Standard', 'Phong'] }]
}, 
{
    title: 'Set Material Value',
    command: 'SetMaterialValueCommand',
    values: [{ name: 'uuid', model: null }, { name: 'materialIndex', model: null }, { name: 'attributeNam', model: null }, { name: 'value', model: null }]
}, 
{
    title: 'Set Material Color',
    command: 'SetMaterialColorCommand',
    values: [{ name: 'uuid', model: null }, { name: 'materialIndex', model: null }, { name: 'attributeName', model: null }, { name: 'color', model: null }]
}, 
{
    title: 'Remove Object',
    command: 'RemoveObjectCommand',
    values: [{ name: 'uuid', model: null }]
}, 
{
    title: 'Add Preset',
    command: 'AddPresetCommand',
    values: [{ name: 'name', model: null }]
}];