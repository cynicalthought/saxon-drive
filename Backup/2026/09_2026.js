const invoiceData09_2026_3 = {
  id: "september-view",
  title: "Τιμολόγιο Σεπτεμβρίου 2026",
  people: [
    { key: "charalampos", name: "Charalampos Mavrommatis", pdfFile: "Invoice_September_2026_Charalampos.pdf" },
    { key: "dimompenis", name: "Dimompenis Mavrommatis", pdfFile: "Invoice_September_2026_Dimompenis.pdf" },
    { key: "vangelis", name: "Vangelis Mavrommatis", pdfFile: "Invoice_September_2026_Vangelis.pdf" }
  ],
  categories: [
    {
      name: "Cost of Services Provided",
      items: [
        { item: "Amazon Prime 📦", sum: "£8.99", charalampos: "£4.50", dimompenis: "£0.00", vangelis: "£4.50", notes: "£180.49" },
        { item: "Broadband 🛜", sum: "£78.56", charalampos: "£26.19", dimompenis: "£26.19", vangelis: "£26.19", notes: "Final VM Bill" },
        { item: "Broadband 🛜", sum: "£20.00", charalampos: "£6.67", dimompenis: "£6.67", vangelis: "£6.67", notes: "Community Fiber Direct Debit" },
        { item: "Cleaning 🧼", sum: "£310.14", charalampos: "£155.07", dimompenis: "£0.00", vangelis: "£155.07", notes: "" },
        { item: "Gas & Electricity ⚡", sum: "£168.46", charalampos: "£56.15", dimompenis: "£56.15", vangelis: "£56.15", notes: "" },
        { item: "Netflix 🍿", sum: "£17.99", charalampos: "£9.00", dimompenis: "£0.00", vangelis: "£9.00", notes: "" },
        { item: "TV Licensing 📺", sum: "£15.03", charalampos: "£5.01", dimompenis: "£5.01", vangelis: "£5.01", notes: "" }
      ]
    },
    {
      name: "Other Allowable Property Expenses",
      items: [
        { item: "Mobile 📱", sum: "£9.00", charalampos: "£9.00", dimompenis: "£0.00", vangelis: "£0.00", notes: "" }
      ]
    },
    {
      name: "Repairs & Maintenance",
      items: [
        { item: "Boiler Installments 🔥", sum: "£41.48", charalampos: "£13.83", dimompenis: "£13.83", vangelis: "£13.83", notes: "REMAINING INSTALLMENTS" },
        { item: "Extension Bathroom Flooring", sum: "£280.00", charalampos: "£140.00", dimompenis: "£0.00", vangelis: "£140.00", notes: "Final: 25 Jan 2032" },
        { item: "Saxon Drive Hallway Shelves", sum: "£80.00", charalampos: "£26.67", dimompenis: "£26.67", vangelis: "£26.67", notes: "Payments: 63, Balance: £2,613.24" }
      ]
    },
    {
      name: "Rent, Rates, Insurance, Ground Rent, etc.",
      items: [
        { item: "Council Tax 72A 🧾", sum: "£116.69", charalampos: "£0.00", dimompenis: "£116.69", vangelis: "£0.00", notes: "" },
        { item: "Council Tax 72B 🧾", sum: "£198.53", charalampos: "£99.27", dimompenis: "£0.00", vangelis: "£99.27", notes: "" },
        { item: "Water & Sewage 🚿", sum: "£69.43", charalampos: "£23.14", dimompenis: "£23.14", vangelis: "£23.14", notes: "" }
      ]
    }
  ],
  totals: {
    sum: "£1,414.30",
    charalampos: "£574.48",
    dimompenis: "£246.69",
    vangelis: "£565.48"
  }
};

function renderInvoiceHTML(data) {
  const categoriesHTML = data.categories.map(cat => `
    <tr class="category-row">
      <td colspan="6">${cat.name}</td>
    </tr>
    ${cat.items.map(row => `
      <tr>
        <td data-col="item">${row.item}</td>
        <td data-col="sum" class="num-col">${row.sum}</td>
        <td data-col="charalampos" class="num-col">${row.charalampos}</td>
        <td data-col="dimompenis" class="num-col">${row.dimompenis}</td>
        <td data-col="vangelis" class="num-col">${row.vangelis}</td>
        <td data-col="notes" class="notes-col">${row.notes}</td>
      </tr>
    `).join('')}
  `).join('');

  return `
  <div id="${data.id}" class="invoice-view">
    <div class="invoice-header">
      <h1>${data.title}</h1>
    </div>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th data-col="item">Item</th>
            <th data-col="sum" class="num-col">Σ</th>
            ${data.people.map(p => `
              <th data-col="${p.key}" class="num-col">
                <div class="th-content">
                  <span>${p.name}</span>
                  <button class="download-btn" onclick="downloadPersonPDF('${data.id}', '${p.name.split(' ')[0]}', '${p.pdfFile}')">PDF</button>
                </div>
              </th>
            `).join('')}
            <th data-col="notes">Notes</th>
          </tr>
        </thead>
        <tbody>
          ${categoriesHTML}
          <tr class="total-row">
            <td data-col="item">Σ</td>
            <td data-col="sum" class="num-col">${data.totals.sum}</td>
            <td data-col="charalampos" class="num-col">${data.totals.charalampos}</td>
            <td data-col="dimompenis" class="num-col">${data.totals.dimompenis}</td>
            <td data-col="vangelis" class="num-col">${data.totals.vangelis}</td>
            <td data-col="notes"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  `;
}