let arr:string[] = ['john', 'james', 'jasmine', 'javaria']
// arr[2] = 222 
arr[2] = '222' 

let arr2:any[] = ['john', 'james', 'jasmine', 'javaria']
arr2[2] = 222 

let arr3:number[] = [1,2,3,4,5,6,7]
// arr3[2] = '222'


let arr4:[string, number, string, number, string, number] = ['john', 12, 'james', 2221, 'javaria', 222, /* 'JANES' */]

// let arr5:string[] | number[] = [1,'2',3,'4','5',6,7]
// y array ki inference types hn