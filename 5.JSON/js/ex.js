/*JSON to Object*/


var response =
    `{
        "name": "Ion",
        "age": 56,
        "salary": 10242.53,
        "languages": [
            "English",
            "Russian",
            "Romanian"
        ],
        "marks": {
            "Web 1": 5.32,
            "POO 2": 9.99
        },
        "isStudent": true
    }`;

var obj = JSON.parse(response);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age + ", " + obj.salary + ", " +
    obj.languages;

/*Object to JSON*/

const carObject = {
    brand: "Merceder",
    model: "G class",
    parameters: {
        width: 1500,
        length: 4000
    }
};

//TODO передалать под JSON выше
function studentTemplate(response) {
    return `
    <div class="student">
     <h2 class="student-name">${response.name}</h2> 
     <p><strong>Age:</strong> ${response.age}</p>
     <p><strong>Salary:</strong> ${response.salary}</p>
    `;
}


document.getElementById("app").innerHTML = `
<h1 class="app-title-students">Student (${response.length} results)<h1>
`;

const carJSON = JSON.stringify(carObject);
console.log(carJSON);