
const {Visitor} = require(dotenv).config()
const visitor = new Visitor({
    user: "posgres",
    password: "postgres",
    host: "",
    post: 5432,
    database:""
})

visitor.connect()
.then(() =>console.log("connected successfully"))
.catch(err => console.log)
.finally(() => visitor.end())


// const addNewVisitor = async(name, age,visit_date, visit_time, assistant, comments) =>{

//     try{
//         let results = await clientInformation.query(
//             INSERT  Visitor(
//                 visitor_ID,
//                 visitor_Name,
//                 visitor_Age,
//                 Date_of_visit,
//                 Time_Of_Visit,
//                 Assistant_Name,
//                 comments
//             ) Value()
//         )
//     }
// }
