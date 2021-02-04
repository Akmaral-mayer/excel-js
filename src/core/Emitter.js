export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // dispatch, fire, trigger
  // уведомлять слушателей, если они есть
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
  }

  // on, listen
  // Подписываемся на уводомления
  // Добавляем нового слушателя
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
        this.listeners[event].filter(listener => listener != fn)
    }
  }
}

// Example
// const emitter = new Emitter()
//
// emitter.subscribe('vladilen', data => console.log('Sub: ', data))
// emitter.emit('vladilen', 42)