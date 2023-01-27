let myLeads = []
let inputEl = document.getElementById("input-el")
let saveBtn = document.querySelector("#save-btn")
let tabBtn = document.getElementById("save-tab")
let ulEl = 
document.getElementById("ul-el")
let dlt = document.getElementById("dlt-el")
let lclLeads = JSON.parse(localStorage.getItem("leads"))
//console.log( Boolean(lclLeads) )
if (lclLeads) {
  myLeads = lclLeads
  render(myLeads)
}
//console.log(myLeads)
saveBtn.addEventListener("click", function(){
 myLeads.push(inputEl.value)
// console.log(myLeads)
  render(myLeads)
   inputEl.value = "" 

  localStorage.setItem("leads", JSON.stringify(myLeads))

  
})

function render (leads) {
let listItems = ""
  for (let i = 0; i < leads.length; i++) {
  listItems += `<li>
  <a target = '_blank' href = '${leads[i]}'> ${leads[i]}
  </a>
  </li>`
//console.log(listItems)
//const li =   document.createElement("li")
//
listItems.textContent = leads[i]
//ulEl.append(li)
}
  ulEl.innerHTML = listItems
}
//console.log(localStorage.getItem("leads"))

tabBtn.addEventListener("click", function(){
  chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
    
    myLeads.push(tabs[0].url)
    
    localStorage.setItem("leads", JSON.stringify(myLeads))
    render(myLeads)
  })
})

//tabBtn.addEventListener("click", function(){    
//    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//        myLeads.push(tabs[0].url)
//        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//        render(myLeads)
//    })
//})


 //. tabUrl = location.href
//.  console.log(tabUrl)
  

dlt.addEventListener("dblclick", function() {
  localStorage.clear()
  myLeads = []
  render(myLeads)
   
})