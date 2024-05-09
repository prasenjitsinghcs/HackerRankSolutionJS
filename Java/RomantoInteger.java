import java.util.HashMap;

public class RomantoInteger {
    public static void main(String[] args) {
        String[] roman = {"II", "III", "IV", "VIII", "MD", "MCMXCIV"};
        for (String rm : roman) {
            int sum = romanToInt(rm);
            System.out.printf("Roman %s = %d\n", rm, sum);
        }
    }

    static int romanToInt(String s) {
        char[] arr = s.toCharArray();
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();

        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        int len = arr.length - 1;
        int sum = map.get(arr[arr.length - 1]);
        for (int i = len; i > 0; i--) {
            if (map.get(arr[i]) > map.get(arr[i - 1])) {
                sum = sum - map.get(arr[i - 1]);
            } else {
                sum = sum + map.get(arr[i - 1]);
            }
        }

        return sum;
    }
}
