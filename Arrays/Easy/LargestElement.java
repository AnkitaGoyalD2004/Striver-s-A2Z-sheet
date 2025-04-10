package Arrays.Easy;

public class LargestElement {
    public static int largest(int[] arr) {
        // code here
        int max = -1;
        for(int i = 0 ; i < arr.length ; i++){
            if(max < arr[i]){
                max = arr[i];
            }
        }
        return max;
    }
}
