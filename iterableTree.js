// algoritmo modificado de https://gist.github.com/jochasinga/8c0e1c60065aa42e90119e0acd190c65

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    whoAmI() {
        return `Node ${this.value}`;
    }
}

export default class BST {
    constructor() {
        this.root = null;
    }

    // insert a Node
    insert(data) {
        var n = new Node(data);
        if (!this.root) {
            this.root = n;
            return
        }

        var curr = this.root;

        while (data !== curr.data) {
            if (data < curr.data) {
                if (!curr.left) {
                    curr.left = n;
                    break;
                }
                curr = curr.left;
            } else if (data > curr.data) {
                if (!curr.right) {
                    curr.right = n;
                    break;
                }
                curr = curr.right;
            }
        }
    };

    // search a Node
    search(data) {

        if (!this.root) return;

        var curr = this.root;
        if (!curr) return;

        while (curr) {
            if (data === curr.data) {
                return curr;
            } else if (data < curr.data) {
                curr = curr.left;
            } else if (data > curr.data) {
                curr = curr.right;
            }
        }
    };

    // Invert the tree
    invert(root) {
        var curr = root;

        if (curr.left) {
            if (curr.right) {
                this.invert(curr.left);
                this.invert(curr.right);
            }
        }

        var temp = curr.left;
        curr.left = curr.right;
        curr.right = temp;
    };

    // In-order traversal print
    inOrder = function* (root = this.root) {
        var curr = root;
        if (curr) {
            yield* this.inOrder(curr.left);
            yield curr.data;
            yield* this.inOrder(curr.right);
        }
    }

    // Post-order traversal print
    postOrder = function* (root = this.root) {
        var curr = root;

        if (curr) {
            yield* this.inOrder(curr.left);
            yield* this.inOrder(curr.right);
            yield curr.data;
        }
    }

    // Pre-order traversal print
    preOrder = function* (root = this.root) {
        var curr = root;
        if (!curr) return;
        yield curr.data;
        yield* this.preOrder(curr.left);
        yield* this.preOrder(curr.right);
    };

    [Symbol.iterator] = function* () {
        yield* this.inOrder();
    };

}
