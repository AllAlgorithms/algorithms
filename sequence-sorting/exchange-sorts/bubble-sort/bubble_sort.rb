# Ruby implementation of bubble sort
#
# Author: Carlos Abraham Hernandez
# Repository: github.com/19cah/algorithms

def bubbleSort(array)
   swapped = true
   while swapped do
     swapped = false
     (array.length - 1).times do |i|
       if array[i] > array[i + 1]
         array[i], array[i + 1] = array[i + 1], array[i]
     swapped = true
       end
     end
   end
   array
end

# Test
arr = [46, 24, 33, 10, 2, 81, 50]
puts "Unsorted array"
p arr

puts "Sorted array"
p bubbleSort(arr)
