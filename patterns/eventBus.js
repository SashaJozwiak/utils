//---Good Bus---:

class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event, callback) {
		if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    );
  }

	emit(event, ...args) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    
    this.listeners[event].forEach(function(listener) {
      listener(...args);
    });
  }
}


//---badDraft---:

class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(callback);
    
  }

  off(event, callback) {
    if (this.listeners[event]) {
      for (let i = 0; i < this.listeners[event].length; i++) {
        if (this.listeners[event][i] === callback) {
          this.listeners[event].splice(i, 1);
          break;
        }
      }
    } else {
      throw new Error(`Нет события: ${event}`)
    }
  }

  emit(event, ...args) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(function(callback) {
        callback(...args);
      });
    } 
  }
}
