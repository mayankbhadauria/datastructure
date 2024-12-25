    /**
     * 
        Design a stack class that supports the push, pop, top, and getMin operations.

        MinStack() initializes the stack object.
        void push(int val) pushes the element val onto the stack.
        void pop() removes the element on the top of the stack.
        int top() gets the top element of the stack.
        int getMin() retrieves the minimum element in the stack.
        Each function should run in O(1) time.

    */

    /**
    * * Time Complexity:
    * - All operations (push, pop, top, getMin) are O(1)
    * Space Complexity: O(n) where n is the number of elements in the stack
    */

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    /**
     * Example with string 2,1,3,4
        * Stack:     [2,1,3,4]
        * MinStack:  [2,1,1,1]
        * Top:       4
        * Min:       1
     */
    /**
     * Pushes an element onto the stack and updates the minimum stack.
     * @param {number} val - The value to be pushed onto the stack
     * 
     * Example sequence [2,1,3]:
     * Push 2: stack=[2], minStack=[2]
     * Push 1: stack=[2,1], minStack=[2,1]
     * Push 3: stack=[2,1,3], minStack=[2,1,1]
     */
    push(val) {
        this.stack.push(val);
        val = Math.min(
            val,
            this.minStack.length === 0
                ? val
                : this.minStack[this.minStack.length - 1],
        );
        this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length === 0) {
            throw new Error("Stack is empty");
        }
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.stack.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.minStack[this.minStack.length - 1];
    }
}