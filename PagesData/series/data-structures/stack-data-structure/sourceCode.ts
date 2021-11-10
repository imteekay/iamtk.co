export const sourceCode1 = `class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next`;

export const sourceCode2 = `new_node = Node(1)
new_node.value  # 1
new_node.next  # None`;

export const sourceCode3 = `next_node = Node(2)

new_node = Node(1, next_node)
new_node.value  # 1
new_node.next.value  # 2`;

export const sourceCode4 = `class LinkedList:
  def __init__(self):
    self.head = None`;

export const sourceCode5 = `def is_empty(self):
  return self.head is None`;

export const sourceCode6 = `Node(value, previous_head)`;

export const sourceCode7 = `Node(value, self.head)`;

export const sourceCode8 = `self.head = Node(value, self.head)`;

export const sourceCode9 = `def prepend(self, value):
  self.head = Node(value, self.head)`;

export const sourceCode10 = `current_node = self.head`;

export const sourceCode11 = `while current_node.next is not None:
  current_node = current_node.next`;

export const sourceCode13 = `current_node.next = Node(value)`;

export const sourceCode14 = `current_node = self.head

while current_node.next is not None:
  current_node = current_node.next

current_node.next = Node(value)`;

export const sourceCode15 = `def append(self, value):
  if self.is_empty():
      self.head = Node(value)
      return

  current_node = self.head

  while current_node.next is not None:
      current_node = current_node.next

  current_node.next = Node(value)`;

export const sourceCode16 = `while current_node is not None:
  current_node = current_node.next`;

export const sourceCode17 = `def size(self):
  list_length = 0
  current_node = self.head

  while current_node is not None:
      list_length += 1
      current_node = current_node.next

  return list_length`;

export const sourceCode18 = `while current_node is not None:
  current_node = current_node.next`;

export const sourceCode19 = `while current_node is not None:
  if current_node.value == value:
      return True

  current_node = current_node.next`;

export const sourceCode20 = `while not found and current_node is not None:
  found = current_node.value == value
  current_node = current_node.next`;

export const sourceCode21 = `def search(self, value):
  found = False
  current_node = self.head

  while not found and current_node is not None:
      found = current_node.value == value
      current_node = current_node.next

  return found`;

export const sourceCode22 = `if self.is_empty():
  return`;

export const sourceCode23 = `if self.head.value == value:
  self.head = self.head.next
  return`;

export const sourceCode24 = `while current_node.next is not None:
  if current_node.next.value == value:
      current_node.next = current_node.next.next
      return

  current_node = current_node.next`;

export const sourceCode25 = `if current_node.next.value == value:`;

export const sourceCode26 = `def remove(self, value):
  if self.is_empty():
      return

  if self.head.value == value:
      self.head = self.head.next
      return

  current_node = self.head

  while current_node.next is not None:
      if current_node.next.value == value:
          current_node.next = current_node.next.next
          return

      current_node = current_node.next`;

export const sourceCode27 = `class Node:
def __init__(self, value, next=None):
    self.value = value
    self.next = next


class LinkedList:
  def __init__(self):
      self.head = None

  def append(self, value):
      if self.is_empty():
          self.head = Node(value)
          return

      current_node = self.head

      while current_node.next is not None:
          current_node = current_node.next

      current_node.next = Node(value)

  def prepend(self, value):
      self.head = Node(value, self.head)

  def remove(self, value):
      if self.is_empty():
          return

      if self.head.value == value:
          self.head = self.head.next
          return

      current_node = self.head

      while current_node.next is not None:
          if current_node.next.value == value:
              current_node.next = current_node.next.next
              return

          current_node = current_node.next

  def search(self, value):
      found = False
      current_node = self.head

      while not found and current_node is not None:
          found = current_node.value == value
          current_node = current_node.next

      return found

  def is_empty(self):
      return self.head is None

  def size(self):
      list_length = 0
      current_node = self.head

      while current_node is not None:
          list_length += 1
          current_node = current_node.next

      return list_length`;

export const sourceCode28 = `def print_all(linked_list):
  print('All values:', end=' ')
  current_node = linked_list.head

  while current_node is not None:
      print(current_node.value, end=' ')
      current_node = current_node.next

  print()


  def print_found(linked_list, value):
  found = linked_list.search(value)
  print('For value:', value, '-->', 'Found:', found, )


  def print_size(linked_list):
  list_length = linked_list.size()
  print('Size:', list_length)`;

export const sourceCode29 = `linked_list = LinkedList()`;

export const sourceCode30 = `print_all(linked_list)
print_size(linked_list)  # 0`;

export const sourceCode31 = `linked_list.append(1)
print_all(linked_list)  # 1
print_size(linked_list)  # 1`;

export const sourceCode32 = `linked_list.remove(0)
print_all(linked_list)  # 1
linked_list.remove(1)
print_all(linked_list)`;

export const sourceCode33 = `linked_list.append(2)
linked_list.append(3)
print_all(linked_list)  # 2 3
print_size(linked_list)  # 2`;

export const sourceCode34 = `print_found(linked_list, 1)  # False
print_found(linked_list, 2)  # True
print_found(linked_list, 3)  # True`;

export const sourceCode35 = `linked_list.remove(1)
print_all(linked_list)  # 2 3
linked_list.remove(2)
print_all(linked_list)  # 3
linked_list.remove(3)
print_all(linked_list)`;

export const sourceCode36 = `linked_list.prepend(4)
linked_list.prepend(3)
linked_list.prepend(2)
linked_list.prepend(1)
print_all(linked_list)  # 1 2 3 4`;

export const sourceCode37 = `linked_list.remove(3)
print_all(linked_list)  # 1 2 4`;
