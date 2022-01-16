
function passParams(
    title,
    author,
    createdOn,
    markdown,
    read,
    thumbnail,
){
    sessionStorage.setItem("title", title);
    sessionStorage.setItem("author", author);
    sessionStorage.setItem("createdOn", createdOn);
    sessionStorage.setItem("markdown", markdown);
    sessionStorage.setItem("read", read);
    sessionStorage.setItem("thumbnail", thumbnail);
    window.location = "http://127.0.0.1:5555/blogpost.html";
}


function readPost(){
window.addEventListener('load', () => {
    console.log(sessionStorage.getItem('title'));
    let html="";
    html+= `
    <div class="m-auto blog-post-content max-width-2 m-auto my-2">
    <h1 class="font1">${sessionStorage.getItem('title')}</h1>
    <div class="blogpost-meta">
        <div class="author-info">
            <div>
            <b>
              Author - ${sessionStorage.getItem('author')}
            </b>
            </div>
            <div>${sessionStorage.getItem('createdOn')}. ${sessionStorage.getItem('read')} min read</div>
        </div>
    </div>
    <div id="content">
    </div>   
    
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script>
    const marked = marked.parse(${sessionStorage.getItem('markdown')});
    console.log(marked);
    document.getElementById("content").innerHTML = marked;
    </script> 
</div>`;
document.getElementById("firebaseReadPost").innerHTML = html;   

});
}


var windowLoc = window.location.href;
console.log(windowLoc);

switch(windowLoc){      
  case "http://127.0.0.1:5555/blogpost.html":
    readPost();
    break;    
}