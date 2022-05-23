document.querySelector("#add_more_product").addEventListener("click",goto)
function goto(){
    window.location.href="index.html"
}
var arr=JSON.parse(localStorage.getItem("products"))
showProduct(arr)
function showProduct(arr)
{ document.querySelector("#all_products").innerHTML=null;
    for(var i=0;i<arr.length;i++)
    {
        var type= document.createElement("h1")
        type.innerText=arr[i].type;

        var desc=document.createElement("h1")
        desc.innerText=arr[i].desc;

        var price=document.createElement("h1")
        price.innerText=arr[i].price;

        var image=document.createElement("img")
        image.src=arr[i].image;
        var button=document.createElement("button")
        button.innerText="Remove";
        button.setAttribute("id","remove_product")
        button.addEventListener("click",function()
        {
            deleteData(i);
        })

        var box=document.createElement("div")
        box.append(image,desc,type,price,button);
        document.querySelector("#all_products").append(box);

        
    }
}
function deleteData(i)
{
    var arr=JSON.parse(localStorage.getItem("products"));
    var newarr=arr.filter(function(el,index) {
     return index !==i;
    }) 
    // console.log(newarr);
    localStorage.setItem("products",JSON.stringify(newarr));
     window.location.reload();
    // showProduct(arr)
}
