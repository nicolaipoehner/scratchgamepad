const icon = "data:image/png;base64,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"

class Gamepad {

  constructor() {}

  getInfo() {
    return {
      id: 'gamepad',
      name: 'Gamepad',

      color1: '#D8D8D8',
      color2: '#A4A4A4',
      color3: '#585858',

      menuIconURI: icon,
      blockIconURI: icon,

      blocks: [
        {
          opcode: 'checkKeys',

          blockType: Scratch.BlockType.HAT,

          text: 'when [key] is pressed',
          arguments: {
            image: {
              type: Scratch.ArgumentType.IMAGE,
              dataURI: icon,
              alt: 'This is an image',
              flipRTL: true
            },
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
            image: {
              type: Scratch.ArgumentType.IMAGE,
              dataURI: icon,
              alt: 'This is an image',
              flipRTL: true
            },
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
