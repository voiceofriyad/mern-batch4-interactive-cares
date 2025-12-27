class Invoice {
  constructor() {
    this.items = [];
  }
  addItem(items) {
    this.items.push(items);
  }
  print(printer) {
    if (printer instanceof Printer) {
      printer.print(this.items);
    } else {
      throw new Error("Invalid printer");
      //   console.log("Invalid printer");
    }
  }
}

class Printer {
  print(items) {
    console.log(`printing invoice on paper...Total items = ${items.length}`);
  }
}

class PDFPrinter extends Printer {
  print(items) {
    console.log(`printing invoice as PDF...Total items = ${items.length}`);
  }
}

class FilePrinter extends Printer {
  print(items) {
    console.log(`printing invoice as HTML...Total items = ${items.length}`);
  }
}

class PosPrinter extends Printer {
  print(items) {
    console.log(`printing invoice on POS...Total items = ${items.length}`);
  }
}

class User {}
const user = new User();

const invoice = new Invoice();
invoice.addItem("mouse 3 3000");
invoice.addItem("monitor 1 20000");
invoice.addItem("SSD 1TB 7500");

const paperPrinter = new Printer();
invoice.print(paperPrinter);

const pdfPrinter = new PDFPrinter();
invoice.print(pdfPrinter);

// invoice.print(user);
