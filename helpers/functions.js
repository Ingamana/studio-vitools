export const portableTextToPlainText = (blocks = []) => {
  return blocks.length === 0 || !blocks
    ? 'No title'
    : blocks
        .map((block) => {
          if (block._type !== 'block' || !block.children) return ''
          return block.children.map((child) => child.text).join('')
        })
        .join(' ')
}
