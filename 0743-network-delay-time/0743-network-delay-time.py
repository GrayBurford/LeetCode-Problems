class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        graph = defaultdict(list)
        for x, y, z in times:
            graph[x - 1].append([y - 1, z])
        
        distances = [inf] * n
        distances[k - 1] = 0
        heap = [(0, k - 1)]
        while heap:
            curr_dist, node = heappop(heap)
            if curr_dist > distances[node]:
                continue
            
            for nei, weight in graph[node]:
                dist = curr_dist + weight
                if dist < distances[nei]:
                    distances[nei] = dist
                    heappush(heap, (dist, nei))

        ans = max(distances)
        return ans if ans < inf else -1
    
# Here, we have a graph given as an array of edges, with each edge having an additional integer representing the weight of the edge. We can create a graph data structure as we did throughout the course, with each edge also having the weight associated with the neighbor.

# The answer to the problem can be found by finding the shortest path from k to every other node and then taking the maximum of these times. Dijkstra's algorithm is perfect for finding the shortest path from k to all other nodes. We can simply run Dijkstra's from k, then return the maximum value in distances. If the maximum value in distances is the initial large value (like infinity), it indicates a node is unreachable from the source, and thus we should return -1.

# Note: the nodes are labeled 1-indexed. When we build the graph, we will subtract 1 from each node to make them 0-indexed.