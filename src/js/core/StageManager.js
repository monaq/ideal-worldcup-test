
const StageManager = {
  /**
   * 강을 전환한다
   */
  nextStep(step) {
    return ++step
  },
  prevStep(step) {
    return --step
  },
  getCandidate(id, candidates) {
    console.log(id, candidates)
    const candidate = candidates.filter(item => item.id === id)
    return candidate
  },
  setWinner(arr, winner) {
    console.log(arr)
    const newArr = arr.push(winner)
    return newArr
  }
}

export default StageManager
