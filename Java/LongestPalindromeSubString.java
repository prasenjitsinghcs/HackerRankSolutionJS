class LongestPalindromeSubString {
    public static void main(String[] args) {
        String s = longestPalindrome("gyaanvyaanwallah");
        System.out.println(s);
    }
    public static String longestPalindrome(String s) {
        if (s.length() <= 1) {
            return s;
        }
        int start = 0, end = 0;
        for (int i = 0; i < s.length(); i++) {
            int l1 = expandAroundCenter(s, i, i);
            int l2 = expandAroundCenter(s, i, i + 1);
            int l = Math.max(l1, l2);

            if (end - start < l) {
                start = i - (l - 1)/2;
                end   = i + l/2;
            }
        }
        return s.substring(start, end + 1);
    }

    public static int expandAroundCenter(String s, int start, int end) {

        char[] str = s.toCharArray();
        while (start >= 0 && end < str.length && str[start] == str[end]) {
            start--;
            end++;
        }
        return end - start - 1;
    }
}

        



