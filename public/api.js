let btn = document.getElementById("background")

btn.onclick=()=>{
    let demo=document.getElementById("background").value
    // console.log(demo);
    let per_page=30
    window.fetch(`https://pixabay.com/api/?key=40770153-9cce4e28d381afe2288b3fa87&q=yellow+flowers&image_type=photo`)
    .then((x) => x.json())
    .then(x =>{
        console.log(x);
        console.log(x.hits[0].pageURL);
        for(let ele of x.hits){
            // console.log(ele);
            // console.log(ele.previewURL);
            let img=`<img src=${ele.previewURL} />`
            console.log(img);
            let demo1=document.getElementById("main")
            console.log(demo1);
            demo1.innerHTML += img
        }
    })
}
