
const createTable = function (file) {
    if (!file) {
        file = {originName:`originName`,children:[{originName:`children1`,length:99998}]}
    }
    console.log(file)
    // title
    var h5 = document.createElement("h5")
    document.getElementsByTagName('body')[0].appendChild(h5);
    h5.innerHTML = file.originName;

    var table = document.createElement("table"), row, cellA, cellB, temp;
    document.getElementsByTagName('body')[0].appendChild(table);


    // title
    temp = document.createElement("caption");
    temp.innerHTML = file.originName;
    table.appendChild(temp);
    // 先插入表头
    row = document.createElement("tr");
    cellA = document.createElement("td");
    cellB = document.createElement("td");
    cellA.innerHTML = `名称`;
    cellB.innerHTML = `大小`;
    table.appendChild(row);
    row.appendChild(cellA);
    row.appendChild(cellB);

    // 先插入目录
    row = document.createElement("tr");
    cellA = document.createElement("td");
    cellB = document.createElement("td");
    cellA.innerHTML = file.originName;
    cellB.innerHTML = file.length;
    table.appendChild(row);
    row.appendChild(cellA);
    row.appendChild(cellB);


    // var data = '{"Name":"John Doe","Email":"john@doe.com","Gender":"male","Colors":["red","green","blue"],"Pet":{"Name":"Roger Doe","Species":"Canis lupus familiaris"}}';
    for (let key in file.children) {
        // (C2) ROWS & CELLS
        row = document.createElement("tr");
        cellA = document.createElement("td");
        cellB = document.createElement("td");

        // // (C3) KEY & VALUE
        // cellA.innerHTML = key;
        // // COLORS FIELD
        // if (key == "Colors") {
        //     cellB.innerHTML = file.children[key].join(", ");
        // }
        // // PET FIELD
        // else if (key == "Pet") {
        //     cellB.innerHTML = `<div>Name: ${file.children[key]['Name']}</div><div>Species: ${file.children[key]['Species']}</div>`;
        // }
        // // OTHER FIELDS
        // else {
        //     cellB.innerHTML = file.children[key];
        // }
        cellA.innerHTML = file.children[key].originName;
        cellB.innerHTML = `${file.children[key].length}`;


        // (C4) ATTACH ROW & CELLS
        table.appendChild(row);
        row.appendChild(cellA);
        row.appendChild(cellB);
    }
}