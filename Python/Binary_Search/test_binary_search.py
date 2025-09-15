# Test file for Binary Search Tree
from Python.Binary_Search.Binary_Search_Tree import TreeNode

def build_test_tree():
    """
    Build a test BST:
           5
         /   \
        3     8
       / \   / \
      2   4 7   9
    """
    root = TreeNode(5)
    root.left = TreeNode(3)
    root.right = TreeNode(8)
    root.left.left = TreeNode(2)
    root.left.right = TreeNode(4)
    root.right.left = TreeNode(7)
    root.right.right = TreeNode(9)
    return root

def test_binary_search():
    print("Testing Binary Search Tree Algorithm:")
    print("=" * 50)
    
    # Build test tree
    root = build_test_tree()
    print("Test tree structure:")
    print("       5")
    print("     /   \\")
    print("    3     8")
    print("   / \\   / \\")
    print("  2   4 7   9")
    print()
    
    # Test cases: (search_value, expected_result)
    test_cases = [
        (5, True),    # Root node
        (3, True),    # Left subtree
        (8, True),    # Right subtree
        (2, True),    # Leftmost leaf
        (9, True),    # Rightmost leaf
        (4, True),    # Middle node
        (7, True),    # Middle node
        (1, False),   # Not in tree (smaller than min)
        (6, False),   # Not in tree (between nodes)
        (10, False),  # Not in tree (larger than max)
        (0, False),   # Edge case
    ]
    
    print("Test Results:")
    print("-" * 30)
    
    for i, (search_val, expected) in enumerate(test_cases, 1):
        try:
            # Test your algorithm (static method)
            result = TreeNode.binarySearch(root, search_val)
            
            # Determine if test passed
            if expected is True:
                passed = result is True
            else:  # expected is False
                passed = result is False
            
            status = "✓" if passed else "✗"
            print(f"{status} Test {i:2d}: Search for {search_val:2d} -> {result} (expected {expected})")
            
        except Exception as e:
            print(f"✗ Test {i:2d}: Search for {search_val:2d} -> ERROR: {e}")
    
    print("\n" + "=" * 50)
    print("Additional Tests:")
    
    # Test with empty tree
    try:
        empty_result = TreeNode.binarySearch(None, 5)
        print(f"✓ Empty tree test: Search in None -> {empty_result} (expected False)")
    except Exception as e:
        print(f"✗ Empty tree test: ERROR: {e}")
    
    # Test with single node tree
    try:
        single_node = TreeNode(42)
        single_result = TreeNode.binarySearch(single_node, 42)
        print(f"✓ Single node test: Search for 42 -> {single_result} (expected True)")
    except Exception as e:
        print(f"✗ Single node test: ERROR: {e}")

if __name__ == "__main__":
    test_binary_search()