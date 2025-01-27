const elForm = document.querySelector("#inputBox");
const elInput = document.querySelector("#input");
const box = document.querySelector(".wrapper");

elForm.addEventListener("submit" , (e)=> {
    e.preventDefault();
    const inputQiymati = elInput.value;
    const newItem = document.createElement("li");

    if(elInput.value){
        newItem.innerHTML =  
        `
        <div class="flex items-center gap-[10px]">
        <input class="check" type="checkbox">
        <span class="soz text-white font-bold">${elInput.value}</span>
        </div>
        <div class="flex items-center gap-[10px]">
        <button class="edit w-[100px] bg-green-900 p-[10px] rounded-[40px] text-white">Edit<button>
        <button class="delete w-[100px] bg-red-900 p-[10px] rounded-[40px] text-white">Delete</button>
        </div>
        
        `
    
        const checkInput = newItem.querySelector(".check");
        const checkText = newItem.querySelector(".soz");
        const todoDelete = newItem.querySelector(".delete");
        const todoEdit = newItem.querySelector(".edit");
    
    
        checkInput.addEventListener("change", ()=> {
            if(checkInput.checked){
                checkText.style.textDecoration = "line-through";
            }else{
                checkText.style.textDecoration = "none"
            }
        })
    
        todoDelete.addEventListener("click", ()=> {
            newItem.remove();
        });
        todoEdit.addEventListener("click", ()=> {
            const newEdit = prompt(`Iltimos mana shu narsani o'zgartiring"${checkText.textContent}"`);
            checkText.innerHTML = newEdit;
        })
    
    
        newItem.className = "bg-gray-700 w-full rounded-[50px] p-[10px] flex justify-between"
        box.append(newItem)
    
        elInput.value = "";
    }else{
        alert("Iltimos nimadur kiriting")
    }
});


const btn = document.querySelector(".button1");

btn.addEventListener("click", function() {
   
    document.body.classList.toggle("addcolor");

    const a = document.querySelector(".button1");
    const b = document.querySelector("#input");
    const b1 = document.querySelector("#h1");
    const c = document.querySelector(".img2");
    const d = document.querySelector(".img1");

    if (document.body.classList.contains("addcolor")) {
        a.style.backgroundColor = "gray";
        b.style.color = "white";
        b1.style.color = "white";
        c.style.display = "block";  
        d.style.display = "none";   
    } else {
        a.style.backgroundColor = "black";
        b.style.color = "black";
        b1.style.color = "black";
        c.style.display = "none";   
        d.style.display = "block";  
    }
});







