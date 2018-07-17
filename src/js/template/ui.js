import renderer from '../lib/renderer'

const idealItem = (idealId, imageSrc) => {
  return renderer.create(`
    <div class="ideal" data-img-id="${idealId}">
          <img src=${imageSrc} />
    </div>`)
}

const ui = {
  idealItem,
}
export default ui
