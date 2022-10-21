import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect, useState } from 'react';

function ResponsiveBreakpointsExample() {


    const [useeer, setuserrs] = useState([]);
    const [all, setAll] = useState([]);
    const [data, setData] = useState([]);
    const getalldet = () => {
        let arr2 = []
        let arr1 = ["Application ", "Develoments ", "Testing"];
        axios.get(`http://localhost:5000/jopUser`).then((result) => {
            let data = result.data.result
            for (let index = 0; index < arr1.length; index++) {
                arr2.push(data.filter((ele) => {
                    return ele.gropjob == arr1[index]
                }))
            }
            setData(data)

            const emails = arr2.map((element) => {
                return element.map((ele) => {
                    return ele.email
                })
            })
            const users = emails.map((ele) => {
                return ele.filter((item, index) => ele.indexOf(item) === index);
            });
            // console.log(users);
            // console.log(arr2);
            setuserrs(users)
            // console.log(users);

        }).catch((err) => {
            console.log(err);
        })
    }


    const getall = () => {

        axios.get(`http://localhost:5000/grop`).then((result) => {
            let allit = result.data.result
            // console.log(result.data.result);
            setAll(allit)
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getalldet(); getall()
    }, [])

    return (<Table striped>

        {useeer && data && all && all.map((element, index) => {
            return (<Table  key={index}>
                <thead>
                    <th>Name</th>
                    <th>Assignees</th>
                    <th>Actual Cost</th>
                    <th>Total Budget</th>
                    <th>Budget val...</th>
                </thead>
                <tbody>
                    <td>{element.grop}</td>
                    <td>{useeer[index].map((elem, ind) => {
                        return <tr key={ind}>
                            <b>{elem}</b>
                        </tr>
                    })}</td>
                    <td>{element.acc}</td>
                    <td>{element.totle}</td>
                    <td>{element.budget}</td>

                    {element.jops.map((ele, ind) => {
                        return <tr key={ind}>
                            <td>{ele.grop}</td>
                            {data.map((elem, ind) => {
                                return <tr key={ind}>
                                    {ele.grop === elem.grop && <td>{elem.email}</td>}
                                </tr>
                            })}
                            <td>{ele.ActualCostsub}</td>
                            <td>{ele.TotalBudgetsub}</td>
                            <td>{ele.TotalBudgetsub - ele.ActualCostsub}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
            )
        })}
    </Table>);
}

export default ResponsiveBreakpointsExample;