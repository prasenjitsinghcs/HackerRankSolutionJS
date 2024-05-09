class RotateMatrix {
    public static void main(String[] arg) {
        int [][] matrix = {
            {1,2,3,4},
            {5,6,7,8},
            {9,10,11,12},
            {13,14,15,16}
        };
        System.out.println("Input Matrix:");
        displayArray(matrix);
        rotateMatrix(matrix);
        System.out.println("Rotated Matrix:");
        displayArray(matrix);
    }

    static void rotateMatrix(int [][] matrix) {
        transposeMatrix(matrix);
        reverseRows(matrix);
    }

    static void transposeMatrix(int [][] matrix) {
        for(int i = 0; i < matrix.length; i++) {
            for (int j = i; j < matrix.length; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }

    static void reverseRows(int [][] matrix) {
        for(int i = 0; i < matrix.length; i++) {
            int start = 0;
            int end   = matrix.length - 1;
            while(start < end) {
                int temp = matrix[i][start];
                matrix[i][start]= matrix[i][end];
                matrix[i][end] = temp;
                start++;
                end--;
            }
        }
    } 
    
    static void displayArray(int [][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < matrix.length; j++) {
                sb.append(" " + matrix[i][j]);
            }
            System.out.println(sb.toString());
        }
    }
}  