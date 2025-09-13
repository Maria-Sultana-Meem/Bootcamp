const loadPost = ()=>{
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        displayPosts(data);
    })
}
const displayPosts=(posts)=>{

    const postContainer = document.getElementById('post-container')
        postContainer.innerHTML=''
    posts.forEach((post)=>{
   console.log(post.id);
   const postCard = document.createElement('div')
   postCard.innerHTML= `
     <div class="post-card">
<h1>${post.title}</h1>
<p>${post.body}</p>

</div>
   `
   
   postContainer.appendChild(postCard)

   
})
}
loadPost()