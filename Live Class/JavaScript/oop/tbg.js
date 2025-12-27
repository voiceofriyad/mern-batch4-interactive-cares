class TailWindButtonGenerator {
  static createButton(color, text, size) {
    // console.log(`Color: ${color}, Text: ${text}, Size: ${size}`);
    const button = `
    <button class="bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-${size} px-${size} rounded">
    ${text}
    </button>
    `;
    return button;
  }
}

// const tbg = new TailWindButtonGenerator();
// tbg.createButton("blue", "Click Me", "4");

// TailWindButtonGenerator.createButton("blue", "Click Me", "4");
