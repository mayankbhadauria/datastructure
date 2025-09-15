# Binary search Tree


class TreeNode:

    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def search(root, val):

    if not root:
        return False
    
    if val > root.val:
        return search(root.right, val)
    elif val < root.val:
        return search(root.left, val)
    else:
        return True
    
def insert(root, val):

    if not root:
        return TreeNode(val)
    
    if val > root.val:
        root.right = insert(root.right, val)
    elif val < root.val:
        root.left = insert(root.left, val)
    else:
        return root
        
