import renderer from '../lib/renderer'

const idealItem = (id, title, imageSrc) => {
  return renderer.create(`
    <div class="ideal" data-id="${id}">
          <img src=${imageSrc} />
          <div class="title">${title}</div>
    </div>`)
}

const treeItem = (id, title, imageSrc) => {
  return renderer.create(`
    <div class="item" data-id="${id}">${title}</div>
  `)
}

const ui = {
  idealItem,
  treeItem
}
export default ui
