function nodeDepths(root) {
    let sum = 0;
    return findNodeDepths(root, sum)
}

const findNodeDepths = (node, runningSum) => {
    if(node === null) return 0

    return runningSum + findNodeDepths(node.left, runningSum+1) + findNodeDepths(node.right, runningSum+1)
}