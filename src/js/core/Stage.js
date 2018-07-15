export class Stage {
    constructor(stage) {
        this.step = stage.step
        this.candidates = stage.candidates
        this.matchs = []

        this.init()
    }

    init() {
        console.log('init')
    }
}