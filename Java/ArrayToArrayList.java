import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ArrayToArrayList {
    public static void main(String[] args) {
        // ArrayList to array
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        Object[] arr = list.toArray();
        System.out.println(arr[0]);

        // Array to ArrayList
        Integer [] array = new Integer[] { 9, 2, 8, 3, 7, 4, 6, 5 };

        List<Integer> arrayList = Arrays.asList(array);

        System.out.println(arrayList.get(0));

    }
}
