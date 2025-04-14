/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let hashmap = new Map();

    for (let num of nums2) {
        while (stack.length !== 0 && stack[stack.length - 1] < num) {
            hashmap.set(stack.pop(), num);
        }
        stack.push(num);
    }

    for (let i = 0; i < nums1.length; i++) {
        if (hashmap.has(nums1[i])) {
            nums1[i] = hashmap.get(nums1[i]);
        } else {
            nums1[i] = -1;
        }
    }

    return nums1;
};