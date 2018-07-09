procedure bubbleSort( A : list of sortable items )
    n = length(A)
    repeat 
        swapped = true
        for i = 1 to n-1 inclusive do
            if A[i-1] > A[i] then
                swap(A[i-1], A[i])
                swapped = False
            end if
        end for
        n = n - 1
    until not swapped
end procedure
