const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0RUMwRTI5OTYyQ0YxMUU0OEI4M0FDNTQzQkM2MTk1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0RUMwRTI5QTYyQ0YxMUU0OEI4M0FDNTQzQkM2MTk1NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRFQzBFMjk3NjJDRjExRTQ4QjgzQUM1NDNCQzYxOTU2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRFQzBFMjk4NjJDRjExRTQ4QjgzQUM1NDNCQzYxOTU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+B7Rt0AAAAddJREFUeNrs3dtRwkAUgOHE8R07kA6wA0qgBEvQEizBDrQDStAOpAPtgLGCuBmCoiPkQjZsmO+fOU/Mzob9szl7C+RFUWRIhwtNQAgIIQSEEAJCCAEhhIAQEEIICCEEhBACQggBISBkFJSnTppEokzKr1DFS4hliOtRt/OIhcxCrHeEbOO9EkXIwCz/kbGNp7EKyZs2dp7nyX3HuktOTYikbpQFQggBIYSAEBBCCAg5dyHzbLOqWkZx4qjj1NfXafW5zVpWubq6cg+35iPETWjnz757yIO27cQ0xGOMHuL96SMI7Zz33UNglEUICMEulwPUUZfMDBb0EEJACCEghBAQYh7S9zwj5XnKa/Z7Ffsq26zMTiOVq6fFYeuuG0VHX2KkeNtTX7mhtO67XIzT7+cmZHGgztu+y8U4/V5EemRlJ3pkdX1UdipnP8Qoa3TMDnw2j1BOUq+J5Z76JlXi7rWcpN58pDX7c4evY5QbMqmnPM9IBkldUgchhIAQQkAIvhniXJZzV3oIISCEECQmxPuF3VnFEPKsXTtz33xM2u4n/u6yZvsF4mffZNGmnXP/hSupgxBCQAghIIQQEEIICAEhhIAQQkAIISCEEBACQggBIYSgV74EGAAr52m2RnE42wAAAABJRU5ErkJggg==,"

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
          opcode: 'isExactly',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'is [A] exactly [B]?',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'APPLE'
            }
          }
        }
      ]
    }
  }

  isExactly({A, B}) {
    return A === B;
  }

}

Scratch.extensions.register(new Gamepad());
