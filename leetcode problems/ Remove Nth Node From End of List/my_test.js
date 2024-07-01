
class LinkedListNode {//создания наших узлов:
    constructor(value,next=null){//по умолчанию null;Первый будет значением этого узла, а второй параметр будет следующим узлом в нашем связанном списке.
        this.value=value;
        this.next=next;
    }
toString(){//метод приводит к строке
    return `${this.value}`
}
    
}
class LinkedList{//элементов нет
    constructor(){
        this.head=null;
        this.tail=null;
    }
    append(value){//создали один элемент,он как head так и tail
        const newNode = new LinkedListNode(value);//новый обьект со значением value;LinkedListNode { value: 1, next: null }, LinkedListNode { value: 2, next: null }       
        if (!this.head || !this.tail){//если элементов нет
            this.head=newNode;
            this.tail=newNode;
            //console.log(this)
            return this;//является первый элемент как и head и tail;LinkedList {  head: LinkedListNode { value: 3, next: null },  tail: LinkedListNode { value: 3, next: null } }
        }
        this.tail.next=newNode//записали новый элемент
        this.tail=newNode//tail смотрит на новую ноду
         return this;//возвращает текущий наш список

    }
    append_1(value){
      const newNode={value,next:null}
      if (this.tail){
        this.tail.next=newNode
      }
      if (!this.head){
        this.head=newNode
      }
      this.tail=newNode

    }
    prepend(value){
      const newNode=new LinkedListNode(value,this.head)
      //const newNode={value,next:this.head}     
        this.head=newNode
      if (!this.tail){//если список пуст
        this.tail=newNode
    }
  }
  find(value){
    if (!this.head){
      return
    }
    let current=this.head
    while(current){//крутимся в цикле пока current!==null
      if (current.value===value){
        return current
      }
      current=current.next//если не найдено совпадение
    }

  }
  insertAfter(after,data){
    const found=this.find(after)
    if (!found){
      return
    }
    const newNode=new LinkedListNode(data,found.next)//создаем новую ноду для вставки элемента
    found.next=newNode//меняем свойство некст на newNode

  }
    delete(value) {
        // Если нет head значит список пуст.
        if (!this.head) {
          return null;
        }
      
        let deletedNode = null;
      
        // Если head должен быть удален, то делаем следующий узел новым head.
        while (this.head && this.head.value === value) {
          deletedNode = this.head;        
          // Переназначаем следующий за head узел на новый head.
          this.head = this.head.next;
        }
      
        let currentNode = this.head;
      
        // Если следующий узел должен быть удален,
        // делаем узел через один, следующим для проверки.
        // Перебираем все узлы и удаляем их, если их значение равно указанному.
        if (currentNode !== null) {
          while (currentNode.next) {
            if (currentNode.next.value === value) {
              deletedNode = currentNode.next;
              // Перезаписываем, чтобы узел через один стал следующим узлом.
              currentNode.next = currentNode.next.next;
            } else {
              currentNode = currentNode.next;
            }
          }
        }
      
        // Проверяем, должен ли tail быть удален.
        // Так как, если в цикле мы удаляем последний узел,
        // то с предпоследнего узла убираем только ссылку на него.
        // Поэтому делаем проверку на его удаление с "tail".
        if (this.tail && this.tail.value === value) {
          // в данном случае currentNode это или предпоследний узел или head.
          this.tail = currentNode;
        }
      
        return deletedNode;
      }
    toArray(){//сможем сложить все элементы в массив
        const nodes=[]
        let currentNode=this.head//изначально смотрит на голову
        while(currentNode){
            nodes.push(currentNode)
            currentNode=currentNode.next//берем ссылку из некст и присваиваем currentNode
        }//до тех пор пока существует currentNode
        return nodes
    }
    toString(){
        return this.toArray().map(item=>item.toString())//.toString()
    }
}
const list=new LinkedList()
const list1=new LinkedList()
//list.append(3).append(4).append(5).append(6)
//list1.append_1(2)

list1.append_1(4)
list1.append_1(5)
list1.append_1(6)
list1.prepend(1)
list1.insertAfter(1,2)
list1.delete(5)
//console.log(list.toString())
console.log(list1.toArray())
//console.log(list1.toArray())
//console.log(list)
//console.log(list1.find(4))



