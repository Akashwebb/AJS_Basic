const country = [
  "Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia",
	"Aruba","Australia","Austria","Azerbaijan","Bahamas (the)","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda",
	"Cambodia","Cameroon","Canada","Cayman Islands (the)","Central African Republic (the)","Chad","Chile","China","Christmas Island",
	"Dominica","Dominican Republic (the)","Ecuador","Egypt","Falkland Islands (the) [Malvinas]","Faroe Islands (the)","Fiji","Finland",
	"France","French Guiana","French Polynesia","French Southern Territories (the)","Gabon","Gambia (the)","Guernsey",
	"Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (the)","Honduras","Hong Kong","Hungary",
	"Iceland","India","Indonesia","Iran (Islamic Republic of)","Pakistan","Portugal","Puerto Rico","Qatar","Republic of North Macedonia",
	"Romania","Russian Federation (the)","Rwanda","Reunion"]

  let x=document.getElementById("tbody")
  let b=``
  for(let i=0;i<country.length;i++){
   b+=`<tr> <td> ${country[i]} </td> </tr>`
  }
  x.innerHTML=b

 

function handle(){
  let y=document.getElementById("input").value 
  let arr=[]
  y=y.toLowerCase()
  for(let i=0;i<country.length;i++){
    let letter=country[i]
    
    let flag="true"
    for(let j=0;j<y.length;j++){
        if(y[j]!=letter[j].toLowerCase()){
          flag="false"
          break
        }
      
    }
    if(flag=="true"){
      arr.push(letter)
    }
  }

 let x=document.getElementById("tbody")
 let m=document.getElementById("option")
 if(y.length==0){
  let c=``
  for(let i=0;i<country.length;i++){
    c+=`<tr > <td> ${country[i]} </td> </tr>`
  }
  x.innerHTML=c
 }else{
  let d=``
  let n=``
  for(let i=0;i<arr.length;i++){
    d+=`<tr  > <td onclick={handle2(this.innerText)} > ${arr[i]} </td> </tr>`
    
    n+=`<option  > ${arr[i]} </option>`
  }
  x.innerHTML=d
  m.innerHTML=n
 }

}
  let d=document.getElementById("display")
 function handle2(t){
     console.log(t)

      d.innerHTML= `<p>My country name is ${t} </p>`
 } 
 


