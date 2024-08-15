import React from "react";
import { Container, Table } from "react-bootstrap";

function Education() {
  return (
    <>
    <Container className="my-5" style={{textAlign:"center"}}>
      <h1><i class="fa-solid fa-graduation-cap me-2"></i>Education</h1><hr/>
      <Table striped bordered hover className="mt-4 ms-1 me-1">
        <thead >
          <tr >
              <th style={{backgroundColor:"rgb(176, 31, 176)", color:"white"}}>Passing Year</th>
              <th style={{backgroundColor:"rgb(176, 31, 176)", color:"white"}}>Course Name</th>
              <th style={{backgroundColor:"rgb(176, 31, 176)", color:"white"}}>Institute Name</th>
              <th style={{backgroundColor:"rgb(176, 31, 176)", color:"white"}}>Grade</th>
          </tr>
        </thead>
        <tbody>
        <tr>
              <td>2023-2025</td>
              <td>Msc. (CA & IT)</td>
              <td>DCS-HNGU, PATAN.</td>
              <td>Pursuing</td>
            </tr>
            <tr>
              <td>2020-2023</td>
              <td>Bsc. (CA & IT)</td>
              <td>DCS-HNGU, PATAN.</td>
              <td>CGPA : 7.06</td>
            </tr>
            <tr>
              <td>MARCH-2020</td>
              <td>HSC</td>
              <td>ASHISH VIDHYALAYA, PATAN.</td>
              <td>PERCENTAGE : 74.86%</td>
            </tr>
        </tbody>
      </Table>
    </Container>
    </>
  );
}

export default Education;
