from delete_node import TreeNode, deleteNode

def test_delete_node():
    # Test case 1: Delete leaf node
    root = TreeNode(5)
    root.left = TreeNode(3)
    root.right = TreeNode(7)
    root.left.left = TreeNode(2)
    
    result = deleteNode(root, 2)
    assert result.left.left is None
    print("Test 1 passed: Leaf node deleted")
    
    # Test case 2: Delete node with one child
    root = TreeNode(5)
    root.right = TreeNode(7)
    root.right.right = TreeNode(8)
    
    result = deleteNode(root, 7)
    assert result.right.val == 8
    print("Test 2 passed: Node with one child deleted")
    
    # Test case 3: Delete node with two children
    root = TreeNode(5)
    root.left = TreeNode(3)
    root.left.left = TreeNode(2)
    root.left.right = TreeNode(4)
    
    result = deleteNode(root, 3)
    assert result.left.val == 4
    print("Test 3 passed: Node with two children deleted")
    
    print("All tests passed!")

if __name__ == "__main__":
    test_delete_node()