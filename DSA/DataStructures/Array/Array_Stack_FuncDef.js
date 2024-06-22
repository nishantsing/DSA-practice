function Stack() {
    this.arr = [];
    this.length = 0;
}

Stack.prototype.push = function (record) {
    this.arr.push(record);
    this.length++;
};

Stack.prototype.pop = function () {
    return this.arr.pop();
};

Stack.prototype.peek = function () {
    return this.arr[this.arr.length - 1];
};

Stack.prototype.print = function () {
    return this.arr;
};

Stack.print = function (stack) {
    return stack;
};

function print(stack) {
    console.log(stack);
}

const st = new Stack();
st.push(1);
st.push(2);
console.log(st.print()); // Function print using object
console.log(Stack.print(st)); // Function print using class (static method)
print(st); // Function print outside the class
console.log(st.pop());
console.log(st.pop());
