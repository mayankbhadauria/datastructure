const list = 
{
    head: {
        value: 2,
        next: {
            value: 3,                                             
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
}

let createNode = (value) => {
    let node = {
        value:value,
        next: null
    }
    return node
}

const addNodeAtEnd = (linkList, newval, index) => {

    let list = linkList.head
    while(list.next) {
        list = list.next
    }
    list.next = createNode(newval)
    console.log(JSON.stringify(list, null, 2))
}
//addNodeAtEnd(list, 6, 0)

const addnodeAtIndex = (linkList, newval, index) => {

    let list = linkList.head, i = 0
    
    while(list.next) {
        if(i == index-1) {
            let temp = list.next
            list.next = createNode(newval)
            list.next.next = temp
            break
        }

        i++
        list = list.next
    }
    console.log(JSON.stringify(linkList, null, 2))
}
addnodeAtIndex(list, 6, 2)