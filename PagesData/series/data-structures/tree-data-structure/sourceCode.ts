export const sourceCode1 = `class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left_child = None
        self.right_child = None`;

export const sourceCode2 = `tree = BinaryTree('a')
print(tree.value) # a
print(tree.left_child) # None
print(tree.right_child) # None`;

export const sourceCode3 = `def insert_left(self, value):
    if self.left_child == None:
        self.left_child = BinaryTree(value)
    else:
        new_node = BinaryTree(value)
        new_node.left_child = self.left_child
        self.left_child = new_node`;

export const sourceCode4 = `def insert_right(self, value):
    if self.right_child == None:
        self.right_child = BinaryTree(value)
    else:
        new_node = BinaryTree(value)
        new_node.right_child = self.right_child
        self.right_child = new_node`;

export const sourceCode5 = `a_node = BinaryTree('a')
a_node.insert_left('b')
a_node.insert_right('c')

b_node = a_node.left_child
b_node.insert_right('d')

c_node = a_node.right_child
c_node.insert_left('e')
c_node.insert_right('f')

d_node = b_node.right_child
e_node = c_node.left_child
f_node = c_node.right_child

print(a_node.value) # a
print(b_node.value) # b
print(c_node.value) # c
print(d_node.value) # d
print(e_node.value) # e
print(f_node.value) # f`;

export const sourceCode6 = `def pre_order(self):
    print(self.value)

    if self.left_child:
        self.left_child.pre_order()

    if self.right_child:
        self.right_child.pre_order()`;

export const sourceCode7 = `def in_order(self):
    if self.left_child:
        self.left_child.in_order()

    print(self.value)

    if self.right_child:
        self.right_child.in_order()`;

export const sourceCode8 = `def post_order(self):
    if self.left_child:
        self.left_child.post_order()

    if self.right_child:
        self.right_child.post_order()

    print(self.value)`;

export const sourceCode9 = `def bfs(self):
    queue = Queue()
    queue.put(self)

    while not queue.empty():
        current_node = queue.get()
        print(current_node.value)

        if current_node.left_child:
            queue.put(current_node.left_child)

        if current_node.right_child:
            queue.put(current_node.right_child)`;

export const sourceCode10 = `class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.left_child = None
        self.right_child = None

    def insert_node(self, value):
        if value <= self.value and self.left_child:
            self.left_child.insert_node(value)
        elif value <= self.value:
            self.left_child = BinarySearchTree(value)
        elif value > self.value and self.right_child:
            self.right_child.insert_node(value)
        else:
            self.right_child = BinarySearchTree(value)`;

export const sourceCode11 = `class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.left_child = None
        self.right_child = None

    def find_node(self, value):
        if value < self.value and self.left_child:
            return self.left_child.find_node(value)
        if value > self.value and self.right_child:
            return self.right_child.find_node(value)

        return value == self.value`;

export const sourceCode13 = `bst = BinarySearchTree(15)`;

export const sourceCode14 = `bst.insert_node(10)
bst.insert_node(8)
bst.insert_node(12)
bst.insert_node(20)
bst.insert_node(17)
bst.insert_node(25)
bst.insert_node(19)`;

export const sourceCode15 = `print(bst.find_node(15)) # True
print(bst.find_node(10)) # True
print(bst.find_node(8)) # True
print(bst.find_node(12)) # True
print(bst.find_node(20)) # True
print(bst.find_node(17)) # True
print(bst.find_node(25)) # True
print(bst.find_node(19)) # True`;

export const sourceCode16 = `print(bst.find_node(0)) # False`;

export const sourceCode17 = `#        |50|                              |50|
#      /      \\                           /    \\
#    |30|     |70|   (DELETE 20) --->   |30|   |70|
#   /    \\                                \\
# |20|   |40|                             |40|`;

export const sourceCode18 = `#        |50|                              |50|
#      /      \\                           /    \\
#    |30|     |70|   (DELETE 30) --->   |40|   |70|
#   /    \\                             /
# |20|   |40|                        |20|`;

export const sourceCode19 = `def remove_node(self, value, parent):
    if value < self.value and self.left_child:
        return self.left_child.remove_node(value, self)
    elif value < self.value:
        return False
    elif value > self.value and self.right_child:
        return self.right_child.remove_node(value, self)
    elif value > self.value:
        return False
    else:
        if self.left_child is None and self.right_child is None and self == parent.left_child:
            parent.left_child = None
            self.clear_node()
        elif self.left_child is None and self.right_child is None and self == parent.right_child:
            parent.right_child = None
            self.clear_node()
        elif self.left_child and self.right_child is None and self == parent.left_child:
            parent.left_child = self.left_child
            self.clear_node()
        elif self.left_child and self.right_child is None and self == parent.right_child:
            parent.right_child = self.left_child
            self.clear_node()
        elif self.right_child and self.left_child is None and self == parent.left_child:
            parent.left_child = self.right_child
            self.clear_node()
        elif self.right_child and self.left_child is None and self == parent.right_child:
            parent.right_child = self.right_child
            self.clear_node()
        else:
            self.value = self.right_child.find_minimum_value()
            self.right_child.remove_node(self.value, self)

        return True`;

export const sourceCode20 = `def clear_node(self):
    self.value = None
    self.left_child = None
    self.right_child = None`;

export const sourceCode21 = `def find_minimum_value(self):
    if self.left_child:
        return self.left_child.find_minimum_value()
    else:
        return self.value`;

export const sourceCode22 = `#        |15|
#      /      \\
#    |10|     |20|
#   /    \\    /    \\
# |8|   |12| |17| |25|
#              \\
#              |19|`;

export const sourceCode23 = `print(bst.remove_node(8, None)) # True
bst.pre_order_traversal()

#     |15|
#   /      \\
# |10|     |20|
#    \\    /    \\
#   |12| |17| |25|
#          \\
#          |19|`;

export const sourceCode24 = `print(bst.remove_node(17, None)) # True
bst.pre_order_traversal()

#        |15|
#      /      \\
#    |10|     |20|
#       \\    /    \\
#      |12| |19| |25|`;

export const sourceCode25 = `print(bst.remove_node(15, None)) # True
bst.pre_order_traversal()

#        |19|
#      /      \\
#    |10|     |20|
#        \\        \\
#        |12|     |25|`;

export const sourceCode26 = `#        |50|                              |50|
#      /      \\                           /    \\
#    |30|     |70|   (DELETE 30) --->   |40|   |70|
#   /    \\                             /
# |20|   |40|                        |20|`;
