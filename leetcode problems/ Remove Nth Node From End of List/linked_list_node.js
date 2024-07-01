/**Given the head of a linked list, remove the nth node from the end of the list and return its head.
Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 
Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
*/
class LinkedListNode {
    constructor(value,next=null){
        this.value=value;
        this.next=next;
    }
}
function getCount(head) {
  var temp = head;
  var count = 0;
while (temp != null) {
    count++;
    temp = temp.next;
}
return count;
}

 function removeNthFromEnd(head, n) {
  let Length = getCount(head);
  let nodeFromBeginning = Length - n + 1;
  let prev = null;
  let temp = head;
  let i = 1;
  while (i < nodeFromBeginning) {
      prev = temp;
      temp = temp.next;
      i++;
  }
  if (prev == null) {
      head = head.next;
      return head;
  } else {
      prev.next = prev.next.next;
      return head;
  }
}
 /*var removeNthFromEnd = function(head, n) {
  let Length=getCount(head)
  console.log(Length)
  let value=Length-n+1 
  if (!head) { 
    return null;
  }   
  while (head && head.value === value) {
   
    if (!head.next) {
      head = null;
      tail = null;
      return [];
  }else{
    console.log(head)
    head = head.next;
    return head
  }
  } 
  let currentNode = head;           
      while (currentNode.next) {          
        if (currentNode.next.value === value) {             
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }      
    }
    return head        
 };*/
 let head = new LinkedListNode(1);
 head.next = new LinkedListNode(2);
 head.next.next = new LinkedListNode(3);
head.next.next.next = new LinkedListNode(4);
head.next.next.next.next = new LinkedListNode(5);
console.log(removeNthFromEnd(head,2))

/*class LinkedListNode {
    constructor(value,next=null){
        this.value=value;
        this.next=next;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
        
    append(value){
        const newNode = new LinkedListNode(value);
        if (!this.head || !this.tail){
            this.head=newNode;
            this.tail=newNode;           
            return this;
        }
        this.tail.next=newNode
        this.tail=newNode
         return this;

    }
   
    getCount() {
      var temp = this.head;
      var count = 0;
    while (temp != null) {
        count++;
        temp = temp.next;
    }
    return count;
}
      toArray(){
        const nodes=[]
        let currentNode=this.head
        while(currentNode){
            nodes.push(currentNode)
            currentNode=currentNode.next
        }
        return nodes
    }
    removeNthFromEnd(n){
     let value=this.getCount()-n+1
      if (!this.head) {
        return null;
      }   
      while (this.head && this.head.value === value) {
        if (!this.head.next) {
          this.head = null;
          this.tail = null;
          return [];
      }else{
        this.head = this.head.next;
      }
      } 
      let currentNode = this.head;           
          while (currentNode.next) {          
            if (currentNode.next.value === value) {             
              currentNode.next = currentNode.next.next;
            } else {
              currentNode = currentNode.next;
            }      
        }           
    }
     
}
const list=new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)

list.removeNthFromEnd(1)
console.log(list.toArray())*/