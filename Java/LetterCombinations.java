import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

/**
 * Iterative Letter Combinations of a Phone Number
 * 
 * Given an integer array containing digits from [0, 9], the task is to print all possible letter combinations that the numbers could represent. 
 * A mapping of digit to letters (just like on the telephone buttons) is being followed. Note that 0 and 1 do not map to any letters. All the mapping are shown in the image below: 
 */

/**
 *    1          2         3    
 *    -        a,b,c     d,e,f
 * 
 *    4          5         6
 *  g,h,i      j,k,l     m,n,o
 * 
 *    7          8         9
 * p,q,r,s     t,u,v    w,x,y,z
 * 
 *    *          0         #  
 * 
 **/ 

public class LetterCombinations {
    public static void main(String[] args) {
        int [] digits = {2,3};
        System.out.println(Arrays.toString(digits));
        ArrayList<String> output = getLetterCombination(digits);
        System.out.println(Arrays.toString(output.toArray()));
    }
    static ArrayList<String> getLetterCombination(int[] digits) {

        ArrayList<String> output = new ArrayList<>();

        HashMap<Integer, ArrayList<String>> map = new HashMap<Integer, ArrayList<String>>();

        ArrayList<String> abc = new ArrayList<String>();
        abc.add("a"); abc.add("b"); abc.add("c");

        ArrayList<String> def = new ArrayList<String>();
        def.add("d"); def.add("e"); def.add("f");

        ArrayList<String> ghi = new ArrayList<String>();
        ghi.add("g"); ghi.add("h"); ghi.add("i");

        ArrayList<String> jkl = new ArrayList<String>();
        jkl.add("j"); jkl.add("k"); jkl.add("l");

        ArrayList<String> mno = new ArrayList<String>();
        mno.add("m"); mno.add("n"); mno.add("o");

        ArrayList<String> pqrs = new ArrayList<String>();
        pqrs.add("p"); pqrs.add("q"); pqrs.add("r"); pqrs.add("s");

        ArrayList<String> tuv = new ArrayList<String>();
        tuv.add("t"); tuv.add("u"); tuv.add("v");

        ArrayList<String> wxyz = new ArrayList<String>();
        wxyz.add("w"); wxyz.add("x"); wxyz.add("y"); wxyz.add("z");

        map.put(2, abc);
        map.put(3, def);
        map.put(4, ghi);
        map.put(5, jkl);
        map.put(6, mno);
        map.put(7, pqrs);
        map.put(8, tuv);
        map.put(9, wxyz);

        if (digits.length == 0) {
            return output;
        }
        output = map.get(digits[0]);
        for(int i = 1; i < digits.length; i++) {
            output = createCombination(output, map.get(digits[i]));
        }

        return output;
    }

    static ArrayList<String> createCombination(ArrayList<String>output, ArrayList<String> list) {
        ArrayList<String> result = new ArrayList<>();
        for(int i = 0; i < output.size(); i++) {
            for (int j = 0; j < list.size(); j++) {
                result.add(output.get(i) + list.get(j));
            }
        }
        return result;
    }
}
