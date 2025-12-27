class Invoice {
  constructor(customerName) {
    this.customerName = customerName;
    this.items = [];
  }

  addItem(description, quantity, price) {
    this.items.push({
      description,
      quantity,
      price,
      total: quantity * price,
    });
  }

  printInvoice() {
    console.log(`\n--- Invoice for ${this.customerName} ---`);
    let grandTotal = 0;

    this.items.forEach((item, index) => {
      console.log(
        `${index + 1}. ${item.description} x ${item.quantity} = ${item.total}`
      );
      grandTotal += item.total;
    });

    console.log(`\nGrand Total: BDT ${grandTotal}`);
    console.log("-----------------------------\n");
  }

  static companyInfo() {
    console.log("🔧 ABC Traders Ltd. | GSTIN: 1234567890\n");
  }
}

// Usage
Invoice.companyInfo(); // Static method - company info

const invoice = new Invoice("ABCD Co");

invoice.addItem("Pen", 10, 5);
invoice.addItem("Notebook", 2, 50);
invoice.addItem("Eraser", 5, 3);

invoice.printInvoice();
