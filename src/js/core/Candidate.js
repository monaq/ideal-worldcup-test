class Candidate {
  constructor(tournament, item) {
    this.tournament = tournament
    this.id = item.id
    this.title = item.title
    this.image = item.originalSrc
    this.won = 0
  }

}

export default Candidate
