console.log("Welcome to aps mhow ")
 let clickheretoviewgallery= document.getElementById("clickheretoviewgallery")
 let myimage= document.getElementById("myimage")
 let mycarousel= document.getElementById("mycarousel")
 let btn1= document.getElementById("btn1")
 let modal1= document.getElementById("modal1")
 let exampleInputname1= document.getElementById("exampleInputname1")
 let modalbtn1= document.getElementById("modalbtn1")
 let name1 = document.getElementById("name1")

 let exampleInputname2= document.getElementById("exampleInputname2")
 let modalbtn2= document.getElementById("modalbtn2")
 let name2 = document.getElementById("name2")
 let btn2= document.getElementById("btn2")
 let modal2= document.getElementById("modal2")

 let exampleInputname3= document.getElementById("exampleInputname3")
 let modalbtn3= document.getElementById("modalbtn3")
 let name3 = document.getElementById("name3")
 let btn3= document.getElementById("btn3")
 let modal3= document.getElementById("modal3")

 let exampleInputname4= document.getElementById("exampleInputname4")
 let modalbtn4= document.getElementById("modalbtn4")
 let name4 = document.getElementById("name4")
 let btn4= document.getElementById("btn4")
 let modal4= document.getElementById("modal4")

 let exampleInputname5= document.getElementById("exampleInputname5")
 let modalbtn5= document.getElementById("modalbtn5")
 let name5 = document.getElementById("name5")
 let btn5= document.getElementById("btn5")
 let modal5= document.getElementById("modal5")

 let exampleInputname6= document.getElementById("exampleInputname6")
 let modalbtn6= document.getElementById("modalbtn6")
 let name6 = document.getElementById("name6")
 let btn6= document.getElementById("btn6")
 let modal6= document.getElementById("modal6")

 let btn7= document.getElementById("btn7")
 let modalbtn7b= document.getElementById("modalbtn7b")
 let modalbtn7a= document.getElementById("modalbtn7a")
 let modalbtn7c= document.getElementById("modalbtn7c")
 let academicul= document.getElementById("academicul")
 let exampleInputname7= document.getElementById("exampleInputname7")
 let modal7= document.getElementById("modal7")

 let changethepic= document.getElementById("changethepic")
 let modal8= document.getElementById("modal8")
 let modalbtn8a= document.getElementById("modalbtn8a")
 let image_input= document.getElementById("image_input")
 let display_image= document.getElementById("display_image")
 
 let visitorcounter= document.getElementById("visitorcounter")
 
 var uploaded_image = "";
 var counter = 0;
 


 /*js for when clicked on clickheretoviewgallery hide the image and show the carousel */
 clickheretoviewgallery.addEventListener("click",()=>{
    console.log("hide the imag myimage and show the carousel ")
    myimage.style.display = "none";
    mycarousel.style.display = "block"
    clickheretoviewgallery.style.display = "none"
 })

 /*js for student name chaneg */
 btn1.addEventListener("click",(event)=>{
    console.log("change the student name ")
    modal1.style.display = "block"
    modalbtn1.addEventListener("click",()=>{
        console.log("modal btn isclickeds")
        name1.innerHTML = `${exampleInputname1.value}`
        modal1.style.display = "none"
        
        
    })
 })

 /*js for dob name chaneg */
 btn2.addEventListener("click",(event)=>{
    console.log("change the dob ")
    modal2.style.display = "block"
    modalbtn2.addEventListener("click",()=>{
        console.log("modal btn isclickeds")
        name2.innerHTML = `${exampleInputname2.value}`
        modal2.style.display = "none"
        
        
    })
 })

 /*js for fathers name chaneg */
 btn3.addEventListener("click",(event)=>{
    console.log("change the dob ")
    modal3.style.display = "block"
    modalbtn3.addEventListener("click",()=>{
        console.log("modal btn isclickeds")
        name3.innerHTML = `${exampleInputname3.value}`
        modal3.style.display = "none"
        
        
    })
 })

 /*js for mothers name chaneg */
 btn4.addEventListener("click",(event)=>{
    console.log("change the mothers name ")
    modal4.style.display = "block"
    modalbtn4.addEventListener("click",()=>{
        console.log("modal btn isclickeds")
        name4.innerHTML = `${exampleInputname4.value}`
        modal4.style.display = "none"
        
        
    })
 })


 /*js for currentclass chaneg */
 btn5.addEventListener("click",(event)=>{
    console.log("change the class ")
    modal5.style.display = "block"
    modalbtn5.addEventListener("click",()=>{
        console.log("modal btn isclickeds")
        name5.innerHTML = `${exampleInputname5.value}`
        modal5.style.display = "none"
        
        
    })
 })

 /*js for fees paid till chaneg */
 btn6.addEventListener("click",(event)=>{
    console.log("change the fees paid till  ")
    modal6.style.display = "block"
    modalbtn6.addEventListener("click",()=>{
        console.log("modal btn isclickeds")
        name6.innerHTML = `${exampleInputname6.value}`
        modal6.style.display = "none"
        
        
    })
 })

 /*js for adding or deleting the achievements */
 btn7.addEventListener("click",()=>{
    console.log("add or delete the achievements")
    modal7.style.display = "block"
    modalbtn7b.addEventListener("click",()=>{
        console.log("deleting the all achievemnts")
        academicul.innerHTML = ` `;
        
        

        
        })

        modalbtn7a.addEventListener("click",()=>{
            console.log("add the acadeic achievements ")
            //creating li
            let elem = document.createElement("li")
            elem.className="mainh3";
            elem.innerHTML = `${exampleInputname7.value}`
            academicul.appendChild(elem)
            exampleInputname7.value = ` `
        
    })
    modalbtn7c.addEventListener("click",()=>{
        modal7.style.display = "none"

    })
 })



 /*js to change the pic */
 changethepic.addEventListener("click",()=>{
    console.log("changing the pic")
    modal8.style.display= "block"
    modalbtn8a.addEventListener("click",()=>{
        modal8.style.display= "none"


    })
    image_input.addEventListener("change",function(){
        console.log(image_input.value);
        const reader = new FileReader();
        reader.addEventListener("load",function(){
        uploaded_image = reader.result;
        display_image.style.backgroundImage = `url(${uploaded_image})`
        })
        reader.readAsDataURL(this.files[0]);
        
    })
    
 })



 /*JS FOR COUNTER VISITORS*/

 setInterval(() => {
    counter = counter + 1;
    console.log(`${counter}`)
    visitorcounter.innerHTML = `<p>VISITORS</p>
                                 <p>${counter}</p>`
    
 }, 3500);

 