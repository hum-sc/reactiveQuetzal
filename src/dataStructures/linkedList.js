export class ListNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

export default class LinkedList {
    constructor(head = null){
        this.head = head
        this.current = head
    }

    add(node){
        if(this.head){
            this.current.next = node;
        } else this.head = node;

        this.current = node;
    }

    print(){
        let now = this.head
        console.log(now.data)
        while (now.next){
            now = now.next;
            console.log(now.data)
        }
    }
}