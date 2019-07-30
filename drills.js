'use strict';

// Ex 1
//     3
//   /   \
// 1       4
//   \       \
//     2       6
//           /   \
//          5     9
//               /
//              7

//       E
//      / \
//     A   S 
//        /  \
//       Q     Y
//     /      /
//   E       U
//    \     /
//     I   S
//      \   \
//       O    T
//      /
//     N

// Ex 2
//     4
//   /   \
// 1       5
//   \       \
//     2       6
//              \
//               9
//              /
//             7

//       E
//      / \
//     A   S 
//        /  \
//       Q     Y
//     /      /
//   I       U
//    \       \
//     O       S
//    /         \
//   N            T

// Ex 4
// This function returns the sum of all the values in a tree

const BinarySearchTree = require('./BinarySearchTree');

function findBSTHeight(t) {
  let height = 0;
  if (t.left) {
    let leftHeight = 1 + findBSTHeight(t.left);
    if (leftHeight > height) {
      height = leftHeight;
    }
  } if (t.right) {
    let rightHeight = 1 + findBSTHeight(t.right);
    if (rightHeight > height) {
      height = rightHeight;
    }
  } if (!t.left && !t.right) {
    height = 1;
  }
  return height;
}

function checkBST(t) {
  let isBSTLeft = true;
  let isBSTRight = true;
  if (t.left) {
    if (t.left.key < t.key) {
      isBSTLeft = checkBST(t.left);
    } else {
      isBSTLeft = false;
    }
  } if (t.right) {
    if (t.right.key > t.key) {
      isBSTRight = checkBST(t.right);
    } else {
      isBSTRight = false;
    }
  }
  return (isBSTLeft && isBSTRight);
}

function main() {
  let bstNums = new BinarySearchTree();
  bstNums.insert(3);
  bstNums.insert(1);
  bstNums.insert(4);
  bstNums.insert(6);
  bstNums.insert(9);
  bstNums.insert(2);
  bstNums.insert(5);
  bstNums.insert(7);
  // console.log(bstNums);
  let bstChars = new BinarySearchTree();
  bstChars.insert('E');
  bstChars.insert('A');
  bstChars.insert('S');
  bstChars.insert('Y');
  bstChars.insert('Q');
  bstChars.insert('U');
  bstChars.insert('E');
  bstChars.insert('S');
  bstChars.insert('T');
  bstChars.insert('I');
  bstChars.insert('O');
  bstChars.insert('N');
  // console.log(bstChars);
  // console.log(findBSTHeight(bstChars));
  console.log(checkBST(bstNums));
}

main();