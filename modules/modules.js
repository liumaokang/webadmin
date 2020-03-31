var modules={
    // 冒泡排序法，从小到大
    bubblingMax:(array)=>{
        let len = array.length;
        for (var i = 0; i < len-1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                // 相邻元素两两对比，元素交换，大的元素交换到后面
                if (array[j] > array[j + 1]) {
                    var temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
        return array;
    },
    // 倒序输出
    reverseOrder:(array)=>{
        let newarray=[];
		for(let q=array.length-1;q>=0;q--){
			newarray.push(array[q])
		}
		return newarray
    },
    //冒泡排序法->从大到小
    bubblingMin:(array)=> {
        let len = array.length;
        for (let i = 0; i < len-1; i++) {
          for (let j = 0; j < len - 1 - i; j++) {
               // 相邻元素两两对比，元素交换，大的元素交换到前边
              if (array[j] < array[j + 1]) {
                  let temp = array[j];
                  array[j] = array[j+1];
                  array[j+1] = temp;
              }
          }
        }
        return array;
    },
    //从数组中删除某一个元素的方法
	deleteElement:(array,ele)=>{
		for(let e=0;e<array.length;e++){
			if(array[e]==ele){
				array.splice(e,1)
			}
		}
		return array
    },
    //url地址解析
	addressResolution : (url) =>{
       var num=url.indexOf("?")
       var a=url.slice(num+1);
       var b=a.split("&")
       var obj={}
       for(let i=0;i<b.length;i++){
           var c=b[i].split("=");
           var key=c[0]
           var value=c[1]
           obj[key]=value;
       }
       return obj;
   },
   //数组去重，只考虑数组中元素为数字或者字符串
	removeRepeat:(arr)=>{
		var arrs = [];
		for(var i =0;i<arr.length;i++){
			if(arrs.indexOf(arr[i])== -1){
				arrs.push(arr[i])
			}
		}
		return arrs;
	}

}
export default {
    modules
}
