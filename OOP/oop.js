function createPencil(name, price, color, company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    this.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text
        h1.style.color = color
        document.body.append(h1)
    }
}

 let pencil1 = new createPencil("pencil", 10, "green", "dollar");
 let pencil2 = new createPencil("pencil", 12, "blue", "dollar");
 let pencil3 = new createPencil("pencil", 15, "red", "dollar");


pencil1.write("hy how r u");
pencil2.write("fine what about u ");   
pencil3.write("fine mate");
