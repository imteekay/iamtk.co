export const sourceCode1 = `class Stack:
  def __init__(self):
    self.items = []`;

export const sourceCode2 = `def push(self, item):
  self.items.append(item)`;

export const sourceCode3 = `def size(self):
  return len(self.items)`;

export const sourceCode4 = `def is_empty(self):
  return self.size() == 0`;

export const sourceCode5 = `def pop(self):
  return self.items.pop()`;

export const sourceCode6 = `class Emptiness(Exception): pass`;

export const sourceCode7 = `def pop(self):
  if self.is_empty():
    raise Emptiness('The Stack isempty')
  
  return self.items.pop()`;

export const sourceCode8 = `def top(self):
  if self.is_empty():
    raise Emptiness('The Stack isempty')
      
  return self.items[-1]`;

export const sourceCode9 = `stack = Stack()

stack.is_empty() # True

stack.push(1) # [1]
stack.push(2) # [1, 2]
stack.push(3) # [1, 2, 3]
stack.push(4) # [1, 2, 3, 4]
stack.push(5) # [1, 2, 3, 4, 5]

stack.is_empty() # False
stack.top() # 5

stack.pop() # 5
stack.pop() # 4
stack.pop() # 3
stack.pop() # 2

stack.is_empty() # False

stack.pop() # 1

stack.is_empty() # True`;

export const sourceCode10 = `def reverse(bookshelf):
  stack = Stack()

  for book in bookshelf:
      stack.push(book)

  reversed_bookshelf = []

  while not stack.is_empty():
      reversed_bookshelf.append(stack.pop())

  return reversed_bookshelf`;

export const sourceCode11 = `bookshelf = [
  'Harry Potter',
  'Atomic Habits',
  'Leonardo da Vinci',
  'Sapiens',
  'Peak'
]

reversed_bookshelf = reverse(bookshelf)

print(reversed_bookshelf) # ['Peak', 'Sapiens', 'Leonardo da Vinci', 'Atomic Habits', 'Harry Potter']
`;
