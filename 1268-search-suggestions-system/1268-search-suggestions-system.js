/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
class TrieNode {
    constructor() {
        this.children = new Map();
        this.suggestions = [];
    }
}

var suggestedProducts = function(products, searchWord) {
    let root = new TrieNode();
    
    for (const product of products) {
        let node = root;
        for (const c of product) {
            if (!node.children.has(c)) {
                node.children.set(c, new TrieNode());
            }
            node = node.children.get(c);
            
            node.suggestions.push(product);
            node.suggestions.sort();
            if (node.suggestions.length > 3) {
                node.suggestions.pop();
            }
        }
    }
    
    let ans = [];
    let node = root;
    
    for (const c of searchWord) {
        if (node.children.has(c)) {
            node = node.children.get(c);
            ans.push(node.suggestions);
        } else {
            node.children = new Map();
            ans.push([]);
        }
    }
    
    return ans;
};

// The brute force approach would be to iterate over products for each prefix and check which ones match. This would have a time complexity of O(n⋅m^2), where n = products.length and m = searchWord.length. It would cost us O(n⋅k) to build a trie from products where k is the average length of each product, and then we could find all the words with matching prefixes in just O(m) time. Because k is small, this time complexity of O(n⋅k+m) is much better.
// Remember: each node in the trie represents a prefix, with the root representing the empty string. We can use an attribute suggestions to store the 3 products that should be returned. To stay in line with the problem's constraints, we will limit the size to 3 and keep it sorted (which is cheap since the size is limited to 3).
// Once the trie is built, we can traverse the tree by starting at the root and iterating over searchWord. At each node, the trie instantly gives us the answer.
