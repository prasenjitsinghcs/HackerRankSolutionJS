// Online Java Compiler
// Use this editor to write, compile and run your Java code online
class SecondLargest {
    public static void main(String[] args) {
        int[] arr = {6,3,0,1,0,4,4,7,8,0};
        
        int result = getSecondLargest(arr);
        System.out.println("Second Largest -> " + result);
    }
    static int getSecondLargest(int[] arr) {
        int first  = -1; 
        int second = -1;
        
        if (arr.length == 0) {
            return -1;
        } else if (arr.length == 1) {
            return arr[0];
        } 
        
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > first) {
                second = first;
                first  = arr[i];
            } else if (arr[i] > second && arr[i] < first) {
                second = arr[i];
            }
        }
        return second;
    }
}