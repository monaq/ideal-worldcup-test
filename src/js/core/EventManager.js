class EventManager {
  constructor() {
    this.events = {}
  }

  on(event, listener) {
    console.log('on', event)
    if (typeof this.events[event] !== 'object') {
      this.events[event] = []
    }
    this.events[event].push(listener)
    console.log(this.events)
  }

  emit(event) {
    var i,
      listeners,
      length,
      args = [].slice.call(arguments, 1)

    listeners = this.events[event]
    length = listeners.length

    for (i = 0; i < length; i++) {
      listeners[i].apply(this, args)
    }
  }

  off(event, listener) {
    var idx
    if (typeof this.events[event] === 'object') {
      idx = this.events[event].indexOf(this.events[event], listener)

      if (idx > -1) {
        this.events[event].splice(idx, 1)
      }
    }
  }
}

export default EventManager
