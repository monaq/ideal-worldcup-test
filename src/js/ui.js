import renderer from './lib/renderer'

const thumbnail = (frameId, imageSrc) => {
  return renderer.create(`
    <li class="select" data-img-id="${frameId}">
          <img src=${imageSrc} />
    </li>`)
}

const ui = {
  thumbnail,
}
export default ui
