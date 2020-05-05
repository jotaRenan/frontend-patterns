// algoritmo encontrado em https://gist.github.com/jochasinga/8c0e1c60065aa42e90119e0acd190c65

class Node {
    constructor(data) {
        this.data = data;
        this.left = undefined;
        this.right = undefined;
    }

    whoAmI() {
        return `Node ${this.value}`;
    }
}

export default class BST {
    constructor() {
        this.root = undefined;
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
    }

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
    }

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
    }

    // In-order traversal print
    inOrder(root) {
        var curr = root;

        if (curr) {
            this.inOrder(curr.left);
            console.log(curr.data);
            this.inOrder(curr.right);
        }
    }

    // Post-order traversal print
    postOrder(root) {
        var curr = root;

        if (curr) {
            this.inOrder(curr.left);
            this.inOrder(curr.right);
            console.log(curr.data);
        }
    }

    // Pre-order traversal print
    preOrder(root) {
        var curr = root;
        if (curr) {
            console.log(curr.data);
            this.preOrder(curr.left);
            this.preOrder(curr.right);
        }
    }
}