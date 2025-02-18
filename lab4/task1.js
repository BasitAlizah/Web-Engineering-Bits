function allDataTypes(){

    var numvar =10;
    var strvar = "Alizah Basit 22k5155"
    var nullvar = null;
    var boolvar = true;
    var objvar = {name: "Alizah Basit", rollno: "22k5155", semester: 6};
    var undefinedvar;
    var arrvar = [1,2,3,4,5,6,7,8,9,0]
    var symbolvar = Symbol("SYMBOL VAR");

    let numlet = 20;
    let strlet = "Alizah Basit 22k5155"
    let nulllet = null;
    let boollet = true;
    let objlet = {name: "Alizah Basit", rollno: "22k5155", semester: 6};
    let undefinedlet;
    let arrlet = [1,2,3,4,5,6,7,8,9,0]
    let symbollet = Symbol("SYMBOL LET");


    const numconst = 20;
    const strconst = "Alizah Basit 22k5155"
    const nullconst = null;
    const boolconst = true;
    const objconst = {name: "Alizah Basit", rollno: "22k5155", semester: 6};
    const arrconst = [1,2,3,4,5,6,7,8,9,0]
    const symbolconst = Symbol("SYMBOL CONST");

    // console.log("numvar: ",numvar ,"type: ", typeof numvar);
    // console.log("strvar: ",strvar ,"type: ", typeof strvar);
    // console.log("nullvar: ",nullvar ,"type: ", typeof nullvar);
    // console.log("boolvar: ",boolvar ,"type: ", typeof boolvar);
    // console.log("objvar: ",objvar ,"type: ", typeof objvar);
    // console.log("undefinedvar: ",undefinedvar ,"type: ", typeof undefinedvar);
    // console.log("arrvar: ",arrvar ,"type: ", typeof arrvar);
    // console.log("symbolvar: ",symbolvar ,"type: ", typeof symbolvar);
    
    // console.log("numlet: ",numlet ,"type: ", typeof numlet);
    // console.log("strlet: ",strlet ,"type: ", typeof strlet);
    // console.log("nulllet: ",nulllet ,"type: ", typeof nulllet);
    // console.log("boollet: ",boollet ,"type: ", typeof boollet);
    // console.log("objlet: ",objlet ,"type: ", typeof objlet);
    // console.log("undefinedlet: ",undefinedlet ,"type: ", typeof undefinedlet);
    // console.log("arrlet: ",arrlet ,"type: ", typeof arrlet);
    // console.log("symbollet: ",symbollet ,"type: ", typeof symbollet);

    // console.log("numconst: ",numconst ,"type: ", typeof numconst);
    // console.log("strconst: ",strconst ,"type: ", typeof strconst);
    // console.log("nullconst: ",nullconst ,"type: ", typeof nullconst);
    // console.log("boolconst: ",boolconst ,"type: ", typeof boolconst);
    // console.log("objconst: ",objconst ,"type: ", typeof objconst);
    // console.log("arrconst: ",arrconst ,"type: ", typeof arrconst);
    // console.log("symbolconst: ",symbolconst ,"type: ", typeof symbolconst);

    function printToDocument(label, value) {
        document.write(`<b>${label}:</b> ${value} <b>Type:</b> ${typeof value} <br>`);
    }

    document.write(`<h3>Var</h3>`);
    printToDocument("numvar", numvar);
    printToDocument("strvar", strvar);
    printToDocument("nullvar", nullvar);
    printToDocument("boolvar", boolvar);
    printToDocument("objvar", JSON.stringify(objvar));
    printToDocument("undefinedvar", undefinedvar);
    printToDocument("arrvar", arrvar.join(", "));
    printToDocument("symbolvar", symbolvar.toString());
    document.write(`<br><br/>`);
    
    document.write(`<h3>Let</h3>`);
    printToDocument("numlet", numlet);
    printToDocument("strlet", strlet);
    printToDocument("nulllet", nulllet);
    printToDocument("boollet", boollet);
    printToDocument("objlet", JSON.stringify(objlet));
    printToDocument("undefinedlet", undefinedlet);
    printToDocument("arrlet", arrlet.join(", "));
    printToDocument("symbollet", symbollet.toString());
    document.write(`<br><br/>`);

    document.write(`<h3>Const</h3>`);
    printToDocument("numconst", numconst);
    printToDocument("strconst", strconst);
    printToDocument("nullconst", nullconst);
    printToDocument("boolconst", boolconst);
    printToDocument("objconst", JSON.stringify(objconst));
    printToDocument("arrconst", arrconst.join(", "));
    printToDocument("symbolconst", symbolconst.toString());
}

allDataTypes();