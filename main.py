nums = [3,7,2,7,5]

def sort(nums):
    n = 0
    for i in range(2,len(nums)):
        if nums[i]!=nums[n]:
            n+=1
    return n

print(sort(nums))

                


