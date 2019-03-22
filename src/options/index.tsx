import Option from './Option'

export { default as Option } from './Option'
export { default as OptionContext, OptionContextState } from './OptionContext'
export { default as Selector } from './Selector'

export const ColorOption = new Option({
  key: 'color',
  label: '🎨 Circle Color',
})

export const FaceOption = new Option({
  key: 'faceType',
  label: '🤖 Face',
})

export const FaceColorOption = new Option({
  key: 'faceColor',
  label: '↳ 🎨 Color',
})

export const TextureOption = new Option({
  key: 'textureType',
  label: '↳ 🤚 Texture',
})

export const EyesOption = new Option({
  key: 'eyeType',
  label: '👁 Eyes',
})

export const MouthOption = new Option({
  key: 'mouthType',
  label: '👄 Mouth',
})

export const TopOption = new Option({
  key: 'topType',
  label: '🎩 Top',
})

export const TopColorOption = new Option({
  key: 'topColor',
  label: '↳ 🎨 Top',
})

export const SidesOption = new Option({
  key: 'sideType',
  label: '👂 Sides',
})

export const SidesColorOption = new Option({
  key: 'sidesColor',
  label: '↳ 🎨 Sides',
})

export const allOptions = [
  ColorOption,
  TopOption,
  TopColorOption,
  FaceOption,
  FaceColorOption,
  TextureOption,
  EyesOption,
  MouthOption,
  SidesOption,
  SidesColorOption,
]
