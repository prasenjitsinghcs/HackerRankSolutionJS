package DP;

public class MinimizeSteps {
    public static void main(String[] args) {
        int num = 1000;

        // System.out.println("number of operation (Rec): " + calcualteSteps(num));
        System.out.println("number of operation (Rec + Memo): " + calcualteStepsMemo(num, new int[num + 1]));
        System.out.println("number of operation (Tabulization): " + calcualteStepsTab(num));
    }

    static int calcualteSteps(int n) {
        if (n <= 1) return n;

        if (n % 2 == 0) {
            int stp1 = calcualteSteps(n / 2);
            int stp2 = calcualteSteps(n - 1);
            int min = Math.min(stp1, stp2);
            return min + 1;
        } else {
            return calcualteSteps(n - 1) + 1;
        }
    }

    static int calcualteStepsMemo(int n, int [] memo) {
        if (memo[n] > 0) return memo[n];
        if (n <= 1) return n;

        if (n % 2 == 0) {
            int stp1 = calcualteStepsMemo(n / 2, memo);
            int stp2 = calcualteStepsMemo(n - 1, memo);
            int min = Math.min(stp1, stp2);
            memo[n] = min + 1;
            return memo[n];
        } else {
            memo[n] = calcualteStepsMemo(n - 1, memo) + 1;
            return memo[n];
        }
    }

    static int calcualteStepsTab(int n) {
        if (n <= 1) return n;

        int dp[] = new int[n + 1];
        dp[1] = 1;
        dp[0] = 0;
        
        for (int i = 2; i <= n; i++) {
            if (i % 2 == 0) {
                int stp1 = dp[i / 2];
                int stp2 = dp[i - 1];
                int min = Math.min(stp1, stp2);
                dp[i] = min + 1;
            } else {
                dp[i] = dp[i - 1] + 1;
            }
        }

        return dp[n]; 
    }
}