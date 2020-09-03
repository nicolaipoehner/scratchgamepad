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

  checkKeys(args) {
    gamepad = navigator.getGamepads()[0];
    return args.key == "up";
  }

}

Scratch.extensions.register(new Gamepad());
