import { Stage } from './Stage'
import History from './History'
import { Handler } from '../handle/Handler';
class Commands {
  constructor(tournament) {
    this.tournament = tournament
    console.log(this.tournament)
  }
  setWinners(winners = []) {
    this.tournament.winners = winners
    console.log(this.tournament.winners)
  }

  /**
   * 강을 전환한다
   */
  nextStep() {
    this.tournament.step++
  }
  prevStep() {
    this.tournament.step--
  }
  setStage() {
    this.nextStep()
    this.tournament.stage = new Stage(this.getStepName(), this.tournament.winners)
    History.addStage(this.stage)
  }

  nextMatch() {
    let step = this.tournament.stage.step
    // step++;  
    console.log(step)
    this.tournament.stage.Handler.render(step + 1);
    this.tournament.stage.step // ??
  }

  cancelStage() {
    if (History.hasBefore()) {
      History.before()
      this.tournament.stage = History.get()
      this.prevStep()
    }
  }
  /**
   * 현재 스테이지를 반환한다
   * @param {Object} stage
   */
  getStage() {
    return this.Stage
  }
  /**
   * 현재 스테이지 이름을 반환한다
   * @param {String}
   */
  getStepName() {
    const step = this.tournament.step
    return this.tournament.stepName[step]
  }
  getCandidate(id) {
    const candidates = this.tournament.candidates
    const candidate = candidates.filter(item => item.id === id)
    return candidate
  }
  getWinners() {
    return this.tournament.winners
  }
}

export default Commands
