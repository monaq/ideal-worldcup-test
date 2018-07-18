import renderer from '../lib/renderer'

const idealItem = (id, title, imageSrc) => {
  return renderer.create(`
    <div class="ideal" data-id="${id}">
          <img src=${imageSrc} />
          <div class="title">${title}</div>
    </div>`)
}
const prevButton = () => {
  return renderer.create(`
    <button></button>`)
}


const ui = {
  idealItem,
  prevButton
}
export default ui
