function hasCycle(head) {
  if (!head) return false; // empty list

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;         // move one step
    fast = fast.next.next;    // move two steps

    if (slow === fast) {
      return true; // cycle detected
    }
  }

  return false; // no cycle
}
