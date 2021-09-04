import React, {useState} from 'react';
import {Badge} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import {vines} from '../data/Vines'
import * as Icon from 'react-bootstrap-icons';

export default function Inventory() {
    // State variable to keep track of all the expanded rows
    // By default, nothing expanded. Hence initialized with empty array.
    const [expandedRows, setExpandedRows] = useState([]);

    // State variable to keep track which row is currently expanded.
    const [expandState, setExpandState] = useState({});


    const handleEpandRow = (event, vineId) => {
        const currentExpandedRows = expandedRows;
        const isRowExpanded = currentExpandedRows.includes(vineId);

        let obj = {};
        isRowExpanded ? (obj[vineId] = false) : (obj[vineId] = true);
        setExpandState(obj);

        // If the row is expanded, we are here to hide it. Hence remove
        // it from the state variable. Otherwise add to it.
        const newExpandedRows = isRowExpanded ? currentExpandedRows.filter(id => id !== vineId) : currentExpandedRows.concat(vineId);

        setExpandedRows(newExpandedRows);
    }


    const tableHeaders=[{title:"Product",type:"checkbox"},{title:"Rating"},{title:"Vintage"},{title:"Qty"},{title:"Volume"},
    {title:"Cost"},{title:"Price"},{title:""}]


    return (
        <div>
        <Container fluid className="inventory">
            <Row sm="12">
                <Col>
                    <Table responsive>
                
                        <thead>
                        
                            <tr>
                                {
                                 tableHeaders.map(tableHeader=>  
                                 {  
                                     if(tableHeader.type!==undefined) 
                                     return (<th><input type={tableHeader.type}/></th>)

                                return(<th className="column-style">{tableHeader.title}</th>)
                                 }
                                 )}
                              </tr>
                        </thead>
                        <tbody> {
                            vines.map((vine) => <>
                                <tr key={
                                    vine.id
                                }>
                                    <td>
                                        <input type="checkbox"/>
                                    </td>
                                    <td>
                                    <div style={{display:"flex"}}>
                                    <img height="60px" alt={vine.product} src={vine.img}/>
                                     <div style={{display:"flex",flexDirection:"column",marginLeft:"20px"}}>
                                     <div className="header-style">{
                                        vine.product
                                    }</div>
                                     <div className="font-style">
                                    {vine.region}
                                    </div>
                                    </div>
                                    </div>
                                     </td>
                                    <td> {
                                        vine.avgRating
                                    } </td>
                                    <td className="font-style"> {
                                        vine.vintage
                                    } </td>
                                    <td className="font-style"> {
                                        vine.qty
                                    } </td>
                                    <td className="font-style"> {
                                        vine.volume
                                    } </td>
                                    <td className="font-style"> {
                                        vine.cost
                                    } </td>
                                    <td className="header-style"> {
                                        vine.price
                                    } </td>
                                    <td>
                                        <div
                                            onClick={
                                                event => handleEpandRow(event, vine.id)
                                        }>
                                            {
                                            expandState[vine.id] ? <Icon.ChevronUp/> : <Icon.ChevronDown/>
                                        } </div>
                                    </td>
                                </tr>
                                <> {
                                    expandedRows.includes(vine.id) ? <tr>
                                        <td colspan="6">
                                            <div>
                                                <p  className="row-style">
                                                    <b>{
                                                        vine.product
                                                    }</b>
                                                </p>
                                                
                                                <span className="row-style">
                                                    <b>Region:</b>
                                                </span>
                                                <span className="font-type" style={{fontSize:"14px"}}>
                                                   { vine.region}
                                                </span>
                                                
                                                <span className="row-style" style={{marginLeft:"30px"}}>
                                                    <b>Vintage:</b>
                                                    {
                                                    vine.vintage
                                                }</span>
                                            </div>
                                            <hr/>
                                            <div className="items">
                                            <div>
                                                <p className="rating-style">Rating</p>
                                                <div className="ratings">
                                                    {
                                                    Object.keys(vine.rating).map(key => {
                                                        return (
                                                            <div className="rating">
                                                                <div className="row-style"><b>{key}</b></div>
                                                                <div>
                                                                <Badge bg="ratingBadge" className="text-dark" >
                                                                    {
                                                                    vine.rating[key]
                                                                }</Badge>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                } </div>
                                            </div>
                                            <div>
                                                <p className="rating-style">Stocks</p>
                                                <div className="stocks">
                                                    {
                                                    Object.keys(vine.stocks).map(key => {
                                                        return (
                                                            <div className="stock">
                                                                <div className="row-style"><b>{key}</b></div>
                                                                <Badge  bg="stockBadge" className="text-danger">
                                                                    {
                                                                    vine.stocks[key]
                                                                }</Badge>
                                                            </div>
                                                        )
                                                    })
                                                } </div>
                                            </div>
                                            </div>
                                        </td>
                                    </tr> : null
                                } </>
                            </>)
                        } </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
