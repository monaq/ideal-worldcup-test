class Candidate {
  constructor(item) {
    this.id = item.id
    this.title = item.title
    this.image = item.originalSrc || item.image
    this.won = 0
  }

}

export default Candidate
