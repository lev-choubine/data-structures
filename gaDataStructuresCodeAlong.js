//ARRAY COMMANDS

myArray = [1,2]
myArray = newArray(size)
myArray.length
myArray[i]
myArray[i] = value

//////////////////////
let weatherData = [54, 57, 51, 51, 55, 58, 56] // array for statistics


// Data Structure||  Access  ||	Search ||	Insertion  ||	Deletion  ||
// Array         ||    O(1)  ||  O(N)  ||      O(N)    ||     O(N)    ||
// Linked list	 ||    O(N)  ||	 O(N)  ||	   O(1)	   ||     O(1)    ||

////Traversing Example 
let walker = this.head;
while(walker.next){
    walker = walker.next;
}
////


// Function	  || Name in a Stack || Name in a Queue || Complexity
// Access	  || Peek	           || Peek	          ||   O(1)
// Insert	  || Push	           || Enqueue	      ||   O(1)
// Delete	  || Pop	           || Dequeue	      ||   O(1)
// Check empty|| isEmpty	       || isEmpty	      ||   O(1)

///Linked list Stack Implementations

class Node {
    constructor (data, next = null) {
        this.data = data
        this.next = next
    }
}

class Stack {
    constructor () {
        this.head = null
    }

    push (data) {
        this.head = new Node(data, this.head)
    }

    pop () {
        let data = this.head.data
        this.head = this.head.next
        return data
    }

    peek () {
        return this.head.data
    }

    isEmpty(){
        return this.head == null
    }
}

///Array Stack implementation

class Stack {
    constructor() {
      this.items = []
    }
  
    push(item){
      this.items.push(item)
    }
  
    pop(){
      return this.items.pop()
    }
  
    peek(){
      return this.items[this.items.length - 1]
    }
  
    isEmpty(){
      return this.items.length === 0
    }
  }

  //Linked List Queue Implementatation

  class Node {
    constructor (data, next = null, prev = null) {
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
    }

    enqueue(data) {
        let newNode = new Node (data, null, this.head)

        if (!this.head) {
            this.head = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
        }

        this.tail = newNode
    }

    dequeue() {
        let data = this.head.data
        this.head = this.head.next
        return data
    }

    peek() {
        return isEmpty() ? 'empty list!' : this.head.data
    }

    isEmpty() {
        return this.head == null
    }
}

//Queue Array Implementation
class Queue {
    constructor() {
        this.items = []
    }

    enqueue(data) {
        this.items.push(data)
    }

    dequeue() {
        return this.items.shift()
    }

    peek() {
        return isEmpty() ? 'empty list!' : this.items[0]
    }

    isEmpty(){
        return this.items.length === 0
    }
}

////////////

hashSimple("April") == (1 + 16 + 18 + 9 + 12) % 11 == 56 % 11 == 1 
// => April goes at 1 N. Perfect Ave
hashSimple("Carol") == (3 + 1 + 18 + 15 + 12) % 11 == 49 % 11 == 5 
// => Carol goes at 5 N. Perfect Ave
hashSimple("Cary") == (3 + 1 + 18 + 25) % 11 == 47 % 11 == 3 
// => Cary goes at 3 N. Perfect Ave
hashSimple("David") == (4 + 1 + 22 + 9 + 4) % 11 == 40 % 11 == 7 
// => David goes at 7 N. Perfect Ave
hashSimple("Ellen") == (5 + 12 + 12 + 5 + 14) % 11 == 48 % 11 == 4 
// => Ellen goes at 4 N. Perfect Ave
hashSimple("Jim") == (10 + 9 + 13) % 11 == 32 % 11 == 10 
// => Jim goes at 10 N. Perfect Ave
hashSimple("Joel") == (10 + 15 + 5 + 12) % 11 == 42 % 11 == 9 
// => Joel goes at 9 N. Perfect Ave
hashSimple("Lucille") == (12 + 21 + 3 + 9 + 12 + 12 + 5) % 11 == 74 % 11 == 8 
// => Lucille goes at 8 N. Perfect Ave
hashSimple("Mary") == (13 + 1 + 18 + 25) % 11 == 57 % 11 == 2 
// => Mary goes at 2 N. Perfect Ave
hashSimple("Ruby") == (18 + 21 + 2 + 25) % 11 == 66 % 11 == 0 
// => Ruby goes at 0 N. Perfect Ave
hashSimple("Sara") == (19 + 1 + 18 + 1) % 11 == 39 % 11 == 6 
// => Sara goes at 6 N. Perfect Ave
///Chaining Court Residents
///
hash("Johann Sebastian") == (10 + 15 + 8 + 1 + 14 + 14 + 19 + 5 + 2 + 1 + 19 + 20 + 9 + 1 + 14) % 11 == 152 % 11 == 9 
// => Johann Sebastian can live at 9 N. Chaining Ct.
hash("Wolfgang") == (23 + 15 + 12 + 6 + 7 + 1 + 14 + 7) % 11 == 85 % 11 == 8 
// => Wolfgang can live at 8 N. Chaining Ct.
hash("Ludwig") == (12 + 21 + 4 + 23 + 9 + 7) % 11 == 76 % 11 == 10 
// => Ludwig can live at 10 N. Chaining Ct.
hash("Antonio") == (1 + 14 + 20 + 15 + 14 + 9 + 15) % 11 == 88 % 11 == 0 
// => Antonio can live at 0 N. Chaining Ct.
hash("Frederic") == (6 + 18 + 5 + 4 + 5 + 18 + 9 + 3) % 11 == 68 % 11 == 2 
// => Frederic can live at 2 N. Chaining Ct.
hash("Maurice") == (13 + 1 + 21 + 18 + 9 + 3 + 5) % 11 == 70 % 11 == 4 
// => Maurice can live at 4 N. Chaining Ct.
hash("Arvo") == (1 + 18 + 22 + 15) % 11 == 56 % 11 == 1 
// => Arvo can live at 1 N. Chaining Ct.
hash("Hildegard") == (8 + 9 + 12 + 4 + 5 + 7 + 1 + 18 + 4) % 11 == 68 % 11 == 2 
// => Hildegard can live at 2 N. Chaining Ct.
hash("Clara") == (3 + 12 + 1 + 18 + 1) % 11 == 35 % 11 == 2 
// => Clara can live at 2 N. Chaining Ct.
hash("Pyotr") == (16 + 25 + 15 + 20 + 18) % 11 == 94 % 11 == 6 
// => Pyotr can live at 6 N. Chaining Ct.
hash("Igor") == (9 + 7 + 15 + 18) % 11 == 49 % 11 == 5 
// => Igor can live at 5 N. Chaining Ct.