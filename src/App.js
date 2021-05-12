import React from "react";
import './App.css';
import axios from "axios";
import TWTable from "@twister19/twtable";

function App() {
  // const buttonClicked = (row) => {

  //     const clicked = (empId) =>{
  //         console.log("empId",empId);
  //     }

  //     return(<a className="buttonLink" onClick={(event=>clicked(row))}>Test{row.empId}</a>);
  // };

  const getdata = async(twtrequest) =>{

    //console.log("twtrequest",twtrequest);
    var data = await axios.post("https://salty-coast-95908.herokuapp.com/api/employee/info",twtrequest);

    //console.log("data",data.data.empdata);

    var test12 = {
      data: data.data.empdata,
      recordCount: data.data.recordCount
    }

    //console.log("test12",test12);
    return(test12);
  }

  const headers = [{column: "employee_id",displayname: "ID", display: true},
                    {column: "first_name",displayname: "First Name", display: true},
                    {column: "last_name",displayname: "Last Name", display: true},
                    {column: "email",displayname: "Email", display: true},
                    {column: "phone_number", displayname: "Phone Number", display:true},
                    {column: "salary",displayname: "Salary", display: true}];
                    
  // const headers = [{column: "name",displayname: "Name", display: true},
  //                   {column: "job",displayname: "Job", display: true},
  //                   {column: "department",displayname: "Depertment", display: true},
  //                   {column: "team",displayname: "Team Strenth", display: true},
  //                   {column: "empId", display:false},
  //                   {button: true,  displayname:"Button1", display:true, column:buttonClicked}];

  //   const data = [{name:"Ashish", job:"SoftWare Engineer", department:"MB", team:3, empId:1}, 
  //                   {name:"Nishant",job:"Business",department:"Data2C", team:4, empId:2},
  //                   {name:"Mukesh",job:"Banker",department:"Data2C", team:5, empId:3},
  //                   {name:"Shashi",job:"Home Maker",department:"Data2C", team:7, empId:4},
  //                   {name:"Kanika",job:"Business",department:"Data2C", team:9, empId:5}];

  return (
    <div className="container">
        <TWTable headers={headers} data={getdata} filter={true} pagination={true} pageSize={5} heading="Demo Table" serversidePagination={true}/>
    </div>
  );
}

export default App;
