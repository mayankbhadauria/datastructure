class TreeNode:

    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


def deleteNode(node, val):
    
    if not node:
        return node
    
    if val > node.val:
        node.right = deleteNode(node.right, val)
    elif val < node.val:
        node.left = deleteNode(node.left, val)
    else:
        # case 1: node has zero or one child
        if not node.left:
            return node.right
        elif not node.right:
            return node.left

        # case 2: node has two child
        curr = node.right
        while curr.left:
            curr = curr.left
        node.val = curr.val
        node.right = deleteNode(node.right, curr.val)

    return node