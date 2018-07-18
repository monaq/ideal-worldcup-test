import data from '../data'
import Candidate from './Candidate'
import HandleSelector from '../handle/HandleSelector';
import StageManager from './StageManager';

const createTournament = (candidateFactory, commandFactory) => {
  class Tournament {
    constructor() {
      this.step = -1
      this.stage = {}
      this.stepName = ['32강', '16강', '8강', '4강', '결승']
      this.candidates = []
      this.winners = []

      this.commands = new StageManager(this)
      
      this.init()
    }

    init() {
      this.fetchData(data)
      this.winners = this.candidates
      this.commands.setStage()
    
    }

    fetchData(data) {
      data.forEach(item => {
        const candidate = new Candidate(this, item)
        this.candidates.push(candidate)
      })
    }

  }

  const tournament = new Tournament()
}

export default createTournament
