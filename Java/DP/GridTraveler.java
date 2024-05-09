package DP;

public class GridTraveler {
    public static void main(String[] args) {

        int[] nums = { 2, 3, 4, 15 };
        for (int num : nums) {
            System.out.printf("%d x %d => %d\n", num, num, countWays(num, num));
        }

        for (int num : nums) {
            int memo[][] = new int[num + 1][num + 1];

            System.out.printf("%d x %d => %d\n", num, num, countWaysMemo(num, num, memo));
        }

        for (int num : nums) {
            System.out.printf("%d x %d => %d\n", num, num, countWaysTab(num, num));
        }

        for (int num : nums) {
            System.out.printf("%d x %d => %d\n", num, num, countWaysTab2(num, num));
        }
    }

    public static int countWays(int n, int m) {
        if (n == 1 && m == 1)
            return 1;
        if (n == 0 || m == 0)
            return 0;

        return countWays(n - 1, m) + countWays(n, m - 1);
    }

    public static int countWaysMemo(int n, int m, int[][] memo) {
        if (memo[n][m] != 0)
            return memo[n][m];
        if (n == 1 && m == 1)
            return 1;
        if (n == 0 || m == 0)
            return 0;

        memo[n - 1][m] = countWaysMemo(n - 1, m, memo);
        memo[n][m - 1] = countWaysMemo(n, m - 1, memo);
        return memo[n - 1][m] + memo[n][m - 1];
    }

    public static int countWaysTab(int n, int m) {

        if (n == 1 && m == 1)
            return 1;
        if (n == 0 || m == 0)
            return 0;

        int dp[][] = new int[n + 1][m + 1];
        dp[1][1] = 1;
        dp[0][0] = 0;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                if (i != 0 && j != 0) {
                    if (i + 1 <= n)
                        dp[i + 1][j] += dp[i][j];
                    if (j + 1 <= m)
                        dp[i][j + 1] += dp[i][j];
                }
            }
        }

        return dp[n][m];
    }

    public static int countWaysTab2(int n, int m) {
        if (n == 1 && m == 1)
            return 1;
        if (n == 0 || m == 0)
            return 0;

        int dp[][] = new int[n + 1][m + 1];
        dp[1][1] = 1;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                if (i == 0 || j == 0) {
                    dp[i][j] = 0;
                } else {
                    dp[i][j] += dp[i - 1][j] + dp[i][j - 1];
                }
            }
        }
        return dp[n][m];
    }

}
