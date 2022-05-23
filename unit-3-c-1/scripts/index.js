//store the products array in localstorage as "products"
document.querySelector("#show_products").addEventListener("click" ,nextpage);
var form=document.querySelector("#products");
document.querySelector("#add_product").addEventListener("click",myfun)
var arr=JSON.parse(localStorage.getItem("products"))|| []

function myfun()
{
    event.preventDefault();
    var obj={
        type:form.type.value,
        desc:form.desc.value,
        price:form.price.value,
        image:form.image.value
    }
    arr.push(obj)
    localStorage.setItem("products",JSON.stringify(arr))
}
function nextpage(){
    window.location.href="inventory.html"
}