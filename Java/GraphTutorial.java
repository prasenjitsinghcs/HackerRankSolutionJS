import java.util.ArrayList;
import java.util.Queue;
import java.util.LinkedList;

class Vertex {
    private String data;
    private ArrayList<Edge> edges; 

    public Vertex(String data) {
        this.data = data;
        this.edges = new ArrayList<Edge>();
    }

    public void addEdge(Vertex endVertex, Integer weight) {
        this.edges.add(new Edge(this, endVertex, weight));
    }

    public void removeEdge(Vertex endVertex) {
        this.edges.removeIf(edge -> edge.getEnd().equals(endVertex));
    }

    public ArrayList<Edge> getEdges() {
        return this.edges;
    }

    public String getData() {
        return this.data;
    }

    public void print(boolean isWeighted) {
        this.edges.forEach((Edge edge) -> {
            System.out.println(edge.getStart().getData() + " ---> " + edge.getEnd().getData());
        });
    }
}

class Edge {
    private Vertex start;
    private Vertex end;
    private Integer weight;

    public Edge(Vertex start, Vertex end, Integer weight) {
        this.start = start;
        this.end = end;
        this.weight = weight;
    }

    public Vertex getStart() {
        return this.start;
    }

    public Vertex getEnd() {
        return this.end;
    }

    public Integer getWeight() {
        return this.weight;
    }
}

class Graph {
    private ArrayList<Vertex> vertices;
    private boolean isWeighted;
    private boolean isDirected;

    public Graph(boolean isWeighted, boolean isDirected) {
        this.vertices = new ArrayList<Vertex>();
        this.isWeighted = isWeighted;
        this.isDirected = isDirected;
    }

    public Vertex addVertex(String data) {
        Vertex newVertex = new Vertex(data);
        this.vertices.add(newVertex);
        return newVertex;
    }

    public void addEdge(Vertex v1, Vertex v2, Integer weight) {
        if (!this.isWeighted) {
            weight = null;
        }
        v1.addEdge(v2, weight);

        if (!this.isDirected) {
            v2.addEdge(v1, weight);
        }
    }

    public void removeEdge(Vertex v1, Vertex v2) {
        v1.removeEdge(v2);
        if (!this.isDirected) {
            v2.removeEdge(v1);
        }
    }

    public void removeVertex(Vertex v) {
        this.vertices.remove(v);
    }

    public ArrayList<Vertex> getVertices() {
        return this.vertices;
    }

    public boolean isWeighted() {
        return this.isWeighted;
    }

    public boolean isDirected() {
        return this.isDirected;
    }

    public Vertex getVertexByValue(String value) {
        for (Vertex v: this.vertices) {
            if (v.getData() == value) {
                return v;
            }
        }
        return null;
    }

    public void print() {
        for (Vertex v: this.vertices) {
            v.print(this.isWeighted);
        }
    }
}

class GraphTutorial {
    public static void main(String[] args) {
        Graph g = new Graph(false, false);
        
        Vertex v1 = g.addVertex("v1");
        Vertex v2 = g.addVertex("v2");
        Vertex v3 = g.addVertex("v3");
        Vertex v4 = g.addVertex("v4");
        Vertex v5 = g.addVertex("v5");
        Vertex v6 = g.addVertex("v6");

        g.addEdge(v1, v3, null);
        g.addEdge(v1, v4, null);
        g.addEdge(v3, v2, null);
        // g.addEdge(v2, v4, null);
        g.addEdge(v4, v6, null);
        g.addEdge(v2, v5, null);


        /**
         * 
         *        v3 ------v2 ---- v5
         *       /   \     
         *      /     \   
         *     v1 ---- v4------ v6
         *      
         *        
         */      

        System.out.println("----------- D F S ---------");    
        ArrayList<Vertex> visitedVertices = new ArrayList<Vertex>();
        depthFirstTraversal(v1, visitedVertices);

        System.out.println("----------- B F S ---------");
        visitedVertices = new ArrayList<Vertex>();
        bredthFirstTraversal(v1, visitedVertices);
    }

    public static void depthFirstTraversal(Vertex start, ArrayList<Vertex> visitedVertices) {
        System.out.println(start.getData());
        visitedVertices.add(start);
        for (Edge e: start.getEdges()) {
          Vertex neighbor = e.getEnd();
          if (!visitedVertices.contains(neighbor)) {
            visitedVertices.add(neighbor);
            GraphTutorial.depthFirstTraversal(neighbor, visitedVertices);
          }
        }
    }

    public static void bredthFirstTraversal(Vertex start, ArrayList<Vertex> visitedVertices) {
        Queue<Vertex> q = new LinkedList<Vertex>();
        q.add(start);
        while(!q.isEmpty()) {
            Vertex v = q.remove();

            if (!visitedVertices.contains(v)) {
                System.out.println(v.getData());
                visitedVertices.add(v);

                for (Edge e: v.getEdges()) {
                    Vertex neighbour = e.getEnd();
                    q.add(neighbour);
                }
            }
        }
    }
}