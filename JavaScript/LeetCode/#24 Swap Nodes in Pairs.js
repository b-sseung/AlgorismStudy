var swapPairs = function(head) {
    let numbers = new Array();
    
    let tempHead = head
    while (tempHead !== null) {
        numbers.push(tempHead.val);
        tempHead = tempHead.next;
    }

    for (let i = 1; i < numbers.length; i += 2) {
        let num = numbers[i-1];
        numbers[i-1] = numbers[i];
        numbers[i] = num;
    }

    if (numbers.length === 0) return null;

    let result = new ListNode(numbers.pop());
    while (numbers.length > 0) {
        result = new ListNode(numbers.pop(), result);
    }
    
    return result;
};
