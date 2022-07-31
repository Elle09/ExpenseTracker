const createAcc=document.getElementById('sinup');
const form=document.getElementById('form');
console.log(createAcc);

createAcc.addEventListener('click',(e)=>{
    e.preventDefault();
const name=document.getElementById('name').value;
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;
      
        // console.log(expense,desc,category);
        let obj ={
             name:name,
             email:email,
             password:password
    
        }
        console.log(obj);
        axios.post('http://localhost:3000',obj).then(res=>{console.log(res)
        alert("successfully signed up")
     } ).catch(err=>{
        alert("user alreaady exist! Please login");
        console.log(err)})
    });


 