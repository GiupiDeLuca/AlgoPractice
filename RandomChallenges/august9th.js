/*
a lucky number is a number that contains either 6 or 8. A number that cointains both is not a lucky number.
create a function that takes in 2 arguments, l and h, and returns the amount of lucky numbers between l and h (included). 
Example: lucky(1, 10) returns 2 (because between 1 and 10 you can find a 6 and an 8)
*/


function lucky(l, h) {
    let numbers = []
    for (let i = l; i <= h; i++) {
      numbers.push(i)
    }
    const numsAsStrings = numbers.map(String)
  
    let result  = 0
  
    numsAsStrings.forEach((num) => {
      if ((num.includes(6) || num.includes(8)) && !(num.includes(6) && num.includes(8))) {
        result += 1
      }
    })
  
    return result 
  }
  // testing the function: 
  console.log(lucky(361087, 773904))
  
  
  /*
  write a function that takes in 2 arguments. the first argument is the number of time inputs of the second argument. The second argument it can be any number of strings representing times in the format HH:MM:SS. The function returns the best time. 
  For Example: 
  bestTime(4, "10:15:46", "03:59:08", "04:00:08", "03:59:09") 
  returns 03:59:08 
  */
  
  
  function bestTime(number, ...times) {
    let array = []
  
    times.forEach((time) => {
      array.push(time.split(":"))
    })
  
    let best = ['99', '99', '99']
  
    array.forEach((time) => {
      if (time[0] < best[0]) {
        best = [time[0], time[1], time[2]]
      } else if (time[0] === best[0]) {
        if (time[1] < best[1]) {
          best = [time[0], time[1], time[2]]
        }
      } else if ((time[0] === best[0]) && (time[1] === best[1])) {
        if (time[2] < best[2]) {
          best = [time[0], time[1], time[2]]
        }
      }
    })
  
    
    return best.join(":")
  
  }
  
  // testing the function: 
  console.log(bestTime(4, "10:15:46", "03:59:08", "04:00:08", "03:59:09" ))
  
  
  /*
  create a queue that has: 
  - a constructor taking in the maximum number of elements in the queue
  - an add() method that allows you to add an element to the queue. If the queue has reached its limit, oldest item in the queue will be eliminated to make room for the new item. 
  - a remove() method that allows you to remove the oldest item from the queue.
  - a size() method that allows you to see how many items the queue contains.
  - a getLimit() method that allows to see how many items the queue may contain the at most. 
  
  */
  
  
  class LimitedQueue {
    constructor (n = 0) {
      this.elements = []
      this.maximumLength = n
    }
  
    add(object = {}) {
      this.elements.push(object)
      if (this.elements.length > this.maximumLength) {
        this.elements.shift()
      }
      
    }
  
    remove() {
      return this.elements.shift()
    }
  
    size() {
      return this.elements.length
    }
  
    getLimit() {
      return this.maximumLength
    }
  }
  
  
  
  
  
  // testing the class by creating a new queue and testing its methods:
  
  const object = {
    a: 1,
    b: 2
  }
  
  const object2 = {
    a: 2,
    b: 3
  }
  
  let q  = new LimitedQueue(5)
  q.add(object)
  q.add(object2)
  // q.remove()
  
  console.log(q.getLimit())
  
  