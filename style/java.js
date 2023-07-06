

var hotel=[
			 { image:"images/chf1.jpg",
			   heading:"Walter White",
			   para:"Master Chef",
			   icon:"fa fa-twitter",icon2:"fa fa-facebook-official",icon3:"fa fa-instagram",icon4:"fa fa-linkedin-square"},
			 
			 { image:"images/chf2.jpg",
			   heading:"Sarah Johnson",
			   para:"Patissier",
			   icon:"fa fa-twitter",icon2:"fa fa-facebook-official",icon3:"fa fa-instagram",icon4:"fa fa-linkedin-square"},
			 
			 { image:"images/chf3.jpg",
			   heading:"William Anderson",
			   para:"cook",
			   icon:"fa fa-twitter",icon2:"fa fa-facebook-official",icon3:"fa fa-instagram",icon4:"fa fa-linkedin-square"},
			 
			 ] 


 
	 var sec=document.querySelector("#sec")
      sec.setAttribute("style","background-image:linear-gradient(#ffffffe0,#ffffffa3),url('./images/bg.jpeg')")

	var container=document.createElement("div")
	container.setAttribute("class","container")
	sec.append(container)

    var col=document.createElement("div")
	col.setAttribute("class","col-12 text-center pt-5")
	container.append(col)
	
	var heading= document.createElement("h1")
	heading.setAttribute("class","fw-bolder")
	heading.innerHTML=("Our Proffesional")
	col.appendChild(heading)

	var headings= document.createElement("span")
	headings.innerHTML=("Chefs")
	heading.appendChild(headings)

	var heading= document.createElement("p")
	heading.innerHTML=("Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.")
	col.appendChild(heading)

	var row=document.createElement("div")
	row.setAttribute("class","row justify-content-center align-items-center x")
	container.append(row)

 
 
 
 
 
 
 
	hotel.map((e)=>{
	var col=document.createElement("div")
	col.setAttribute("class","col-lg-4 col-12,col-sm-6 text-center",)
	row.append(col)

	var item=document.createElement("div")
	item.setAttribute("class","img-item")

	var photo = document.createElement("img")
	photo.setAttribute("src",e.image)
    photo.style.width="100%"
	item.append(photo)
	col.append(item)
	
	var content= document.createElement("div")
	content.setAttribute("class","content border bg-light w-75 py-3")
	col.append(content)
   
    var headings= document.createElement("h1")
     headings.setAttribute("class","head")
	headings.innerHTML=(e.heading)
	content.appendChild(headings)

    var paras= document.createElement("p")
	paras.innerHTML=(e.para)
	content.appendChild(paras)

    var icon= document.createElement("i")
    icon.setAttribute("class",e.icon)
	content.appendChild(icon)

    var icon2= document.createElement("i")
    icon2.setAttribute("class",e.icon2)
	content.appendChild(icon2)

    var icon3= document.createElement("i")
    icon3.setAttribute("class",e.icon3)
	content.appendChild(icon3)

    var icon4= document.createElement("i")
    icon4.setAttribute("class",e.icon4)
	content.appendChild(icon4)





	})