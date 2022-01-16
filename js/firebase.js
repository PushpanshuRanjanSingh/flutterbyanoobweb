import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { getFirestore, doc, getDocs, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDue6SK4_tsmxJvV3Jk_Fj5G_tb4w_2ygU",
    authDomain: "pushpanshu-com.firebaseapp.com",
    projectId: "pushpanshu-com",
    storageBucket: "pushpanshu-com.appspot.com",
    messagingSenderId: "573450838239", 
    appId: "1:573450838239:web:37f62b3bd4c0f3b0fa096a",
    measurementId: "G-TPEELRLQ9W"
};
  
   
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const  db = getFirestore();
let firebasePost= "";
const querySnapshot = await getDocs(collection(db, "Articles"));


function getPosts() {
    for(var i=0; i<querySnapshot.docs.length; i++){
        var data = querySnapshot.docs[i].data();
        firebasePost+=  `
        <div class="home-article">
            <div class="home-article-img">
                <img src=${data['thumbnail']} alt="article"></img>
            </div>
            <div class="home-article-content font1">
                <a onclick= "return passParams('${data['title']}','${data['author']}','${data['createdOn'].toDate().toDateString()}','${data['markdown']}','${data['read']}','${data['thumbnail']}');">
                    <h3>${data['title']}</h3>
                </a>
                <div>${data['author']}</div>
                <div>${data['description']}</div>
                <span>${data['createdOn'].toDate().toDateString()} | ${data['read']} min read</span>
            </div>
        </div>`;
        // console.log(data);
    }
    document.getElementById("firebasePost").innerHTML = firebasePost;   
}


var windowLoc = window.location.href;
console.log(windowLoc);

switch(windowLoc){      
  case "http://127.0.0.1:5555/":
    getPosts();
    break;    
}



