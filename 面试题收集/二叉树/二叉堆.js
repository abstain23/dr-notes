class Heap {
  constructor(arr) {
    this.data = [...arr]
    this.size = this.data.length
  }
  maxHeapify(i) {
    let max = i;
  
    if(i >= this.size){
      return;
    }
    // 当前序号的左节点
    const l = i * 2 + 1;
    // 当前需要的右节点
    const r = i * 2 + 2;
  
    // 求当前节点与其左右节点三者中的最大值
    if(l < this.size && this.data[l] > this.data[max]){
      max = l;
    }
    if(r < this.size && this.data[r] > this.data[max]){
      max = r;
    }
  
    // 最终max节点是其本身,则已经满足最大堆性质，停止操作
    if(max === i) {
      return;
    }
  
    // 父节点与最大值节点做交换
    const t = this.data[i];
    this.data[i] = this.data[max];
    this.data[max] = t;
  
    // 递归向下继续执行
    return this.maxHeapify(max);
  }
  rebuildHeap(){
    // 叶子节点
    const L = Math.floor(this.size / 2);
    for(let i = L - 1; i >= 0; i--){
      this.maxHeapify(i);
    }
  }
}