const icon = "data:image/png;base64,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"

class Gamepad {

  constructor() {}

  getInfo() {
    return {
      id: 'gamepad',
      name: 'Gamepad',

      color1: '#8BC34A',
      color2: '#7CB342',
      color3: '#689F38',

      menuIconURI: icon,

      blocks: [
        {
          opcode: 'checkKeys',

          blockType: Scratch.BlockType.HAT,

          text: 'when [key] is pressed',
          arguments: {
            key: {
              type: Scratch.ArgumentType.STRING,
              menu: 'keys'
            }
          }
        },
        {
          opcode: 'checkKeysBoolean',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'when [key] is pressed',
          arguments: {
            key: {
              type: Scratch.ArgumentType.STRING,
              menu: 'keys'
            }
          }
        },
      ],
      menus: {
        keys: {
            items: ['up', 'down', 'left','right','X', 'Y', 'A','B','left trigger','right trigger','start','select']
        }
      }
    }
  }

  checkKeys(key) {
    return true;
  }

  checkKeysBoolean(key) {
    return true;
  }

}

Scratch.extensions.register(new Gamepad());
