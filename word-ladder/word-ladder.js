/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

function ladderLength (beginWord, endWord, wordList) {
  const len = beginWord.length;
  const queue = [[beginWord, 1]];
  const dict = new Map();
  const seen = new Set();

  if (wordList.indexOf(endWord) < 0) return 0;

  // Generate dictionary
  wordList.forEach((word) => {
    for (let i = 0; i < len; i++) {
      const node = word.substring(0, i) + '*' + word.substring(i + 1, len);
      if (dict.has(node)) {
        dict.get(node).push(word);
      } else {
        dict.set(node, [word]);
      }
    }
  });

  // Perform BFS
  while (queue.length) {
    const [word, lvl] = queue.shift();

    if (word === endWord) return lvl;
    for (let i = 0; i < len; i++) {
      const node = word.substring(0, i) + '*' + word.substring(i + 1, len);
      
      if (!dict.has(node)) continue;
      dict.get(node).forEach((w) => {
        if (!seen.has(w)) {
          queue.push([w, lvl + 1]);
          seen.add(w);
        }
      });
    }
  }

  return 0;
};