/**
 * Array A contains the price per unit for a day
 * Array B contains the consumption of the fule units/day
 * 
 * He can buy as much as fule on the day, caluclate the minimum cost of the
 * fule.
 */

class MinimumCostOfFule {
    public static void main(String[] args) {
        int[] a = { 3, 2, 4, 1 };
        int[] b = { 2, 1, 7, 3 };

        int index = 0;
        int sum = 0;
        int start = index;
        while (index < a.length) {
            start = index;
            while (start < a.length && index < a.length && a[index] <= a[start]) {
                sum = sum + (a[index] * b[start]);
                start++;
            }
            index = start;
        }

        System.out.println("Fule cost: " + sum);
    }
}