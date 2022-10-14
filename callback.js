
const posts=[
     { title:'Post One',body:'This is post one',createdAt: new Date().getTime()},
 
     { title:'Post Two',body:'This is post two',createdAt: new Date().getTime()}
 
 ];
 
 function getPosts(){
     setTimeout(()=>{
         let output='';
         posts.forEach((posts,index)=>{
             output+=`<li>${posts.title} - last updated${Math.floor((new Date().getTime()-posts.createdAt)/1000)}seconds ago</li>`;
         });
         document.body.innerHTML=output;
 
     },1000)
 
 }
 
 function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({ ...post,createdAt: new Date().getTime()});
            const error=false;
            if(!error){
                resolve();
            }else{
                reject("Error:something went wrong");
            }
        },0)
    
    })
}
     function deletPost(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                posts.pop()
                
                if(Array.length==0){
                    reject("array is empty")
                }
                else{
                    resolve()
                }
            },1000)
         
        })
        
 
 }


 createPost({title:'Post Three',body:'This is post three', createdAt: new Date().getTime(),latTime:new Date})
 .then(()=>{
    getPosts();
    deletPost().then(()=>{
        getPosts()    
    })     
 }).catch(err=>console.log(err));
 
setTimeout(()=>{
    deletPost().then(()=>{
           getPosts()    
       })  
   },2000)
   setTimeout(()=>{
    deletPost().then(()=>{
           getPosts()    
       })  
   },4000)
   setTimeout(()=>{
    deletPost().then(()=>{
           getPosts()    
       })  
   },4000)
   
let updateTime={
    return new Promise(resolve,reject)={
        setTimeout(() => {
            posts.createdAt=new Date()
            resolve(posts.createdAt)
        },1000);
    }

}
function updatePost(){
    Promise.all([createPost,updateTime])
    .then([createPostresolve,updatePostrasolve])=>{
        console.log(updateTime)
    }
}