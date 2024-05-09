import java.util.HashMap;

public class FindDuplicateChar {
    public static void main(String[] args) {
        String str = "gyaanvyaanwallah";
        HashMap<Character, Integer> map = getDuplicateChar(str);
        
        map.forEach((k,v)-> {
            if (v > 1) {
                System.out.println(k + " -> " + v);
            }
        });
    }

    static HashMap<Character, Integer> getDuplicateChar(String str) {
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();
        for(char c: str.toCharArray()) {
            if (!map.containsKey(c)) {
                map.put(c, 1);
            } else {
                int count = map.get(c) + 1;
                map.put(c, count);
            }
        }
        return map;
    } 
}
