var removeNthFromEnd = function(head, n) {
    let arr = new Array();
    while (head != null) {
        arr.push(head.val);
        head = head.next;
    }

    arr = arr.filter((value, index) => index !== arr.length - n);

    if (arr.length !== 0) {
        let result = new ListNode(arr[arr.length-1]);
        for (let i = arr.length-2; i >= 0; i--) {
            result = new ListNode(arr[i], result);
        }
        return result;
    }

    return head;
};
