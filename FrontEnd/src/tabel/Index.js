import Table from 'react-bootstrap/Table';
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
            console.log(users);
            console.log(arr2);
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

    return (
        <div>

            <>
                {useeer && data && all && all.map((element, index) => {
                    return (<div key={index}>
                        <div >
                            <hr></hr>
                            <div>{element.grop}</div>
                            <div>{element.acc}</div>
                            <div>{element.totle}</div>
                            <div>{element.budget}</div>

                            <div>{useeer[index].map((elem, ind) => {
                                return <div key={ind}>
                                    <b>{elem}</b>
                                </div>
                            })}</div>

                            <div>{element.jops.map((ele, ind) => {
                                return <div key={ind}>
                                    <div>{ele.grop}</div>
                                    <div>{ele.ActualCostsub}</div>
                                    <div>{ele.TotalBudgetsub}</div>
                                    <div>{ele.TotalBudgetsub - ele.ActualCostsub}</div>

                                    <div>{data.map((elem, ind) => {
                                        return <div key={ind}>
                                            {ele.grop === elem.grop && <div>{elem.email}</div>}
                                        </div>
                                    })}</div>
                                </div>
                            })}</div>
                        </div>
                    </div>
                    )
                })}</>
            {/* <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Assignees</th>
                        <th>Actual Cost</th>
                        <th>Total Budget</th>
                        <th>Budget val...</th>
                    </tr>
                </thead>
                {data && data.map((ele, index) => {

                    return (<tbody key={index}>
                        <tr>
                            <td>{ele[0].gropjob}</td>
                            <td>{ele.img}</td>
                            <td>{ele[0].ActualCost}</td>
                            <td>{ele[0].TotalBudget}</td>
                            <td>{ele[0].TotalBudget - ele[0].ActualCost}</td>
                        </tr>
                        <tr>
                            <td style={{ fontSize: "12px" }}>
                                <ul>
                                    { }
                                    <li>{ele[0].grop}</li>
                                    <li>{ele[1].grop}</li>
                                    <li>{ele[2].grop}</li>
                                </ul>
                            </td>

                            <td>
                                <ul>
                                    <li>{ele[index].img}</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>{ele[index].ActualCostsub}</li>

                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>{ele[index].TotalBudgetsub}</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>{ele[index].TotalBudgetsub}-{ele[index].ActualCostsub}</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>)
                })}
            </Table> */}
        </div>
    );
}

export default ResponsiveBreakpointsExample;