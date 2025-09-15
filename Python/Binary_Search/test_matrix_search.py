from matrix_search import Solution

def test_search_matrix():
    solution = Solution()
    
    # Test case 1: Target exists in matrix
    matrix1 = [[1,2,4,8],[10,11,12,13],[14,20,30,40]]
    assert solution.searchMatrix(matrix1, 10) == True
    assert solution.searchMatrix(matrix1, 4) == True
    assert solution.searchMatrix(matrix1, 40) == True
    
    # Test case 2: Target doesn't exist
    assert solution.searchMatrix(matrix1, 0) == False
    assert solution.searchMatrix(matrix1, 9) == False
    assert solution.searchMatrix(matrix1, 50) == False
    
    # Test case 3: Single element matrix
    matrix2 = [[1]]
    assert solution.searchMatrix(matrix2, 1) == True
    assert solution.searchMatrix(matrix2, 2) == False
    
    print("All tests passed!")

if __name__ == "__main__":
    test_search_matrix()