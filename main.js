
function generator() {
    let input = document.getElementById("num").value;
     let output = document.getElementById("table");

     if (!input || input ==0 || input < 0) {
        alert("Enter A valid number");
        return
}
   let template = "<h3>Table of " + input + "</h3>" + "<ul>";
  for(let i = 0; i <= 10; i++) {
     template += `<li> ${input} * ${i} = ${input * i}</li>`
   }

        template += "</ul>"
        output.innerHTML = template;
   
}





