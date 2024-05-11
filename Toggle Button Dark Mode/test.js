
/// remove duplicates from an array 


// using filter method


const name=['arun', 'rohan', 'siddhant', 'arun', 'rohan','vivek']; 

const unique1=name.filter((item, index)=>
      name.indexOf(item)===index); 
 console.log(unique1);

 // using set method

const unique=[...new Set(name)];
console.log(unique);

// using forEach loop 

let unique2=[]; 
name.forEach((element)=>{
	if(!unique2.includes(element)){
		unique2.push(element);
	}
});

console.log(unique2);

// using indexOf method 

let unique3=[]; 

for(index =0; index<name.length; index++){
  if(unique3.indexOf(name[index])=== -1){
  	unique3.push(name[index]); 
  }
  
}
console.log(unique3);