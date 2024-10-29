function mincost(arr)
{ 
//write your code here
// return the min cost
	const minHeap=new minHeap(arr);
	let total=0;
	while(minHeap.size()>1){
		let cost1=minHeap.extractMin();
		let cost2=minHeap.extractMin();

		let cost=cost1+cost2;

		totalCost += cost;
		minHeap.insert(cost);
	}
	return totalcost;
}

module.exports=mincost;
