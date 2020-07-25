import Runtime from 'scratch-vm/src/engine/runtime'
import ArgumentType from 'scratch-vm/src/extension-support/argument-type'
import BlockType from 'scratch-vm/src/extension-support/block-type'
import Cast from 'scratch-vm/src/util/cast'

class DummyExtension {
  private runtime: Runtime

  constructor(runtime: Runtime) {
    this.runtime = runtime
  }

  getInfo() {
    return {
      id: 'dummy',
      name: 'Dummy',
      menuIconURI: require('../assets/images/menuIcon.png'),
      blockIconURI: require('../assets/images/blockIcon.png'),
      color1: '#a0a0a0',
      color2: '#808080',
      color3: '#606060',

      blocks: [
        {
          opcode: 'say',
          blockType: BlockType.REPORTER,
          text: 'say [MESSAGE]',
          arguments: {
            MESSAGE: {
              type: ArgumentType.STRING,
              defaultValue: 'Hello, World!'
            }
          }
        }
      ]
    }
  }

  say(args: any) {
    const message = Cast.toString(args.MESSAGE)
    console.log(message)

    return message
  }
}

export default DummyExtension
