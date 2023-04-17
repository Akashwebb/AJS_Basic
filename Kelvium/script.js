const Boxone = document.querySelector('.Boxone');
const whiteBoxes = document.getElementsByClassName('whiteBox');
const deleteBox= document.getElementsByClassName('black')
// Boxone.addEventListener('dragstart', (e) => {
//     // e.target.className += ' hold';
//     // setTimeout(() => {
//     //     e.target.className = 'hide';
//     // }, 0);

// });
// Boxone.addEventListener('dragend', (e) => {
//     //e.target.className = 'Boxone';
//     Boxone.style.position="absolute"
// });



for (Box of whiteBoxes) {
    Box.addEventListener('dragover', (e) => {
        e.preventDefault(); // by default we cant drop one element over another element ,  so we prevent default things
    });
    Box.addEventListener('drop', (e) => {
        e.target.append(Boxone);
        let namee= document.getElementById("name").value
        let z= Math.random()*42
        let m= z.toFixed(0)
        document.getElementById("display").innerHTML=`<h1> Hello ${namee}, </h1> <h2> Your Predicted age is: ${m} </h2>`
    })
}

for(bb of deleteBox){
    bb.addEventListener("dragover",(e)=>{
        e.preventDefault()
    })
    bb.addEventListener("drop",(e)=>{
       Boxone.addEventListener("dragend",(e)=>{
        e.target.className="hide"
       })
        
    })
}