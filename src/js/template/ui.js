import renderer from '../lib/renderer'

const idealItem = (idealId, imageSrc) => {
  return renderer.create(`
    <div class="ideal" data-img-id="${idealId}">
          <img src=${imageSrc} />
    </div>`)
}
const prevButton = () => {
  return renderer.create(`
    <button> < </button>`)
}


const ui = {
  idealItem,
  prevButton
}
export default ui
