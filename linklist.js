const list1 = 
{
    head: {
        value: 7,
        next: {
            value: 1,                                             
            next: {
                value: 6,
                next: null
                }
            }
        }
}

const list2 = 
{
    head: {
        value: 5,
        next: {
            value: 9,                                             
            next: {
                value: 2,
                next: null
                }
            }
        }
}

let iterateLinklist = (list) => {
    if(list.head){
        list = list.head
        while(list){
            //console.log(list.value)
            list = list.next
        }
    }
}

iterateLinklist(list1)

let createNode = (value) => {
    let node = {
        value:value,
        next: null
    }
    return node
}

let addNodes = (arr) => {

    let lengthOfArray = arr.length,
    node, head, list

    if(lengthOfArray>0) {

        for(let i=0; i<lengthOfArray; i++) {

            node = createNode(arr[i])
            
            if(i == 0) {
                head = node
            }
            else {
                list = head
                while(list.next) {
                    list = list.next
                }
                list.next = node
            }
        }
        return head
    }
}

let createLinkList = (data) => {
    let list = addNodes(data)
    let linklist = LinkList(list)
    console.log(JSON.stringify(linklist))
    return linklist
}

createLinkList([2,3,4,5])