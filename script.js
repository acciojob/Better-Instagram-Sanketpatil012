let arr = ['div1' , 'div2' , 'div3' , 'div4' , 'div5' , 'div6']
const imageList= document.querySelectorAll('.image')
 let k=0; 
  for(let imageSection of imageList)
	 {
          imageSection.id= arr[k]
		  k++

		 imageSection.addEventListener( 'dragstart' , (e)=>{
			   let div= e.target
			   div.style.opacity='0.5'
			   e.dataTransfer.setData('text' , div.id)
			 
		 })

		 imageSection.addEventListener( 'dragend' , (e)=>{
			   let div=e.target 
			   div.style.opacity='1'
		 })
	 
	 }
  let  allEvents = [  'dragover'   , 'dragenter' ,'drop']

 for(let  events of allEvents){

    for(let imageSection of imageList){

	   imageSection.addEventListener(events , (e)=>{
            e.preventDefault()
		   if(events === 'drop'){
                 let drag1= e.dataTransfer.getData('text')
                 let dragElement= document.getElementById(drag1) 
			     let drag2 = imageSection.id 
			     imageSection.id= drag1
			     dragElement.id=drag2

			     let text1= dragElement.innerText
			     let text2=  imageSection.id
			     dragElement.innerText=text1
			      imageSection.id=text2
			     
		   }

		   
	   })
  

		
	}
	 
 }







