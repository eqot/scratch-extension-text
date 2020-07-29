import Runtime from 'scratch-vm/src/engine/runtime'
import ArgumentType from 'scratch-vm/src/extension-support/argument-type'
import BlockType from 'scratch-vm/src/extension-support/block-type'
import StageLayering from 'scratch-vm/src/engine/stage-layering'
import Cast from 'scratch-vm/src/util/cast'

class TextExtension {
  private runtime: Runtime

  private penSkinId: any
  private penDrawableId: any

  private skin: any

  private width: number
  private height: number
  private centerX: number
  private centerY: number

  private context: any

  constructor(runtime: Runtime) {
    this.runtime = runtime

    this.runtime.on('targetWasCreated', () => {
      this.createLayer()
    })
  }

  private createLayer() {
    if (!this.runtime.renderer) {
      return
    }

    if (!this.penSkinId) {
      this.penSkinId = this.runtime.renderer.createPenSkin()
      this.penDrawableId = this.runtime.renderer.createDrawable(StageLayering.PEN_LAYER)
      this.runtime.renderer.updateDrawableProperties(this.penDrawableId, {
        skinId: this.penSkinId
      })
    }

    if (!this.skin) {
      this.skin = this.runtime.renderer._allSkins[this.penSkinId]

      this.width = this.skin.size[0]
      this.height = this.skin.size[1]
      this.centerX = this.width / 2
      this.centerY = this.height / 2
    }

    if (!this.context) {
      this.context = this.skin._canvas.getContext('2d')
      this.context.font = '24px serif'
      this.context.fillStyle = 'rgb(0, 0, 0)'
    }
  }

  getInfo() {
    return {
      id: 'text',
      name: 'Text',
      menuIconURI: require('../assets/images/menuIcon.png'),
      blockIconURI: require('../assets/images/blockIcon.png'),
      color1: '#a0a0a0',
      color2: '#808080',
      color3: '#606060',

      blocks: [
        {
          opcode: 'drawText',
          blockType: BlockType.COMMAND,
          text: 'draw [MESSAGE] at x: [X] y: [Y]',
          arguments: {
            MESSAGE: {
              type: ArgumentType.STRING,
              defaultValue: 'Hello, World!'
            },
            X: {
              type: ArgumentType.STRING,
              defaultValue: '0'
            },
            Y: {
              type: ArgumentType.STRING,
              defaultValue: '0'
            }
          }
        },
        {
          opcode: 'clear',
          blockType: BlockType.COMMAND,
          text: 'clear'
        }
      ]
    }
  }

  drawText(args) {
    const message = Cast.toString(args.MESSAGE)
    const x = Cast.toNumber(args.X)
    const y = Cast.toNumber(args.Y)

    this.context.fillStyle = 'rgb(0, 0, 0)'
    this.context.fillText(message, this.centerX + x, this.centerY - y)

    this.redraw()
  }

  clear(args) {
    this.context.fillStyle = 'rgb(255, 255, 255)'
    this.context.fillRect(0, 0, this.width, this.height)

    this.redraw()
  }

  private redraw() {
    this.skin._canvasDirty = true
    this.runtime.requestRedraw()
  }
}

export default TextExtension
