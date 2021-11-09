export const sourceCode1 = `class Queue:
  def __init__(self):
    self.items = [];`;

export const sourceCode2 = `def enqueue(self, item):
  self.items.append(item)`;

export const sourceCode3 = `def size(self):
  return len(self.items)`;

export const sourceCode4 = `def is_empty(self):
  return self.size() == 0`;

export const sourceCode5 = `def dequeue(self):
  return self.items.pop(0)`;

export const sourceCode6 = `class Emptiness(Exception): pass`;

export const sourceCode7 = `def dequeue(self):
  if self.is_empty():
    raise Emptiness('The Queue is empty')
    
  return self.items.dequeue()`;

export const sourceCode8 = `def front(self):
  if self.is_empty():
    raise Emptiness('The Queue isempty')
    
  return self.items[0]`;

export const sourceCode9 = `def back(self):
  if self.is_empty():
    raise Emptiness('The Queue isempty')
  
  return self.items[-1]`;

export const sourceCode10 = `def test_enqueue(queue, item):
  queue.enqueue(item)
  print(queue.items)
  
def test_dequeue(queue):
  queue.dequeue()
  print(queue.items)
  
def test_emptiness(queue):
  is_empty = queue.is_empty()
  print(is_empty)
  
def test_size(queue):
  size = queue.size()
  print(size)
  
def test_front(queue):
  front = queue.front()
  print(front)
  
def test_back(queue):
  back = queue.back()
  print(back)`;

export const sourceCode11 = `queue = Queue()

test_emptiness(queue)  # True
test_size(queue)  # 0

test_enqueue(queue, 1)  # [1]
test_enqueue(queue, 2)  # [1, 2]
test_enqueue(queue, 3)  # [1, 2, 3]
test_enqueue(queue, 4)  # [1, 2, 3, 4]
test_enqueue(queue, 5)  # [1, 2, 3, 4, 5]

test_emptiness(queue)  # False
test_size(queue)  # 5
test_front(queue)  # 1
test_back(queue)  # 5

test_dequeue(queue)  # [2, 3, 4, 5]
test_dequeue(queue)  # [3, 4, 5]
test_dequeue(queue)  # [4, 5]
test_dequeue(queue)  # [5]

test_emptiness(queue)  # False
test_size(queue)  # 1
test_front(queue)  # 5
test_back(queue)  # 5

test_dequeue(queue)  # []

test_emptiness(queue)  # True
test_size(queue)  # 0`;

export const sourceCode12 = `queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)`;

export const sourceCode13 = `for item in queue.items:
  print(item)`;

export const sourceCode14 = `test_front(queue) # 1
test_back(queue) # 5`;

export const sourceCode15 = `while not queue.is_empty():
  queue.dequeue()`;

export const sourceCode16 = `test_size(queue) # 0`;
