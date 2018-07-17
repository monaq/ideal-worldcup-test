export class Candidate {
  constructor(item) {
    this.title = item.title
    this.image = item.image
    this.won = 0

    this.init()
  }

  init() {
    console.log('item')
  }
}
