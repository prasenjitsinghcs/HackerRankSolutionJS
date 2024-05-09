public class MinimumCost {
    public static void main(String[] args) {
        int[] A = {1,5,2,5,5};
        int[] B = {1,2,3,4,5};
        int N = A.length;
        long output = solution(N, A, B);
        System.out.println(output);
    }

    public static long solution(int N, int[] A, int[] B) {
        int cost = -1;
        for (int i = 0; i < A.length; i++) {
            if (A[i] == B[i]) {
                int min = A[0];
                for(int j = 0; j < A.length; j++) {
                    System.out.println(min);
                    if (i == j) {
                        continue;
                    }
                    if (A[j] < min && A[j] != A[i]) {
                        min = A[j];
                        int temp = A[i];
                        A[i] = A[j];
                        A[j] = temp;
                        cost = cost + i + j;
                    }
                }
            }
        }

        return cost;
    }
    
}
