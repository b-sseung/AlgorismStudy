var mergeTwoLists = function(list1, list2) {
    let arr = new Array();
    
    while (list1 !== null) {
        arr.push(list1.val);
        list1 = list1.next;
    }
    while (list2 !== null) {
        arr.push(list2.val);
        list2 = list2.next;
    }

    arr.sort((a, b) => a - b);

    if (arr.length === 0) return null;

    let result = new ListNode(arr.pop());
    while (arr.length != 0) {
        result = new ListNode(arr.pop(), result);
    }

    return result;
};
