var mergeKLists = function(lists) {
    let data = new Array();
    
    for (let i = 0; i < lists.length; i++) {
        let listNode = lists[i];
        while (listNode !== null) {
            data.push(listNode.val);
            listNode = listNode.next;
        }
    }

    data.sort((a, b) => a - b);
    
    if (data.length === 0) return null;

    let result = new ListNode(data.pop());
    while (data.length !== 0) {
        result = new ListNode(data.pop(), result);
    }

    return result;
};
