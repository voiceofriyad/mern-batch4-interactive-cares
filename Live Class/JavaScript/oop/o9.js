class Invoice {
  constructor() {
    this.items = [];
  }
  addItem(items) {
    this.items.push(items);
  }
  print(media = "paper") {
    if (media === "paper") {
      console.log(
        `printing invoice on paper...Total items = ${this.items.length}`
      );
    } else if (media === "pdf") {
      console.log(
        `printing invoice on PDF...Total items = ${this.items.length}`
      );
    } else if (media === "html") {
      console.log(
        `printing invoice on HTML...Total items = ${this.items.length}`
      );
    }
  }
}

const invoice = new Invoice();
invoice.addItem("mouse 3 3000");
invoice.addItem("monitor 1 20000");
invoice.addItem("SSD 1TB 7500");
invoice.print("html");
invoice.print("pdf");
