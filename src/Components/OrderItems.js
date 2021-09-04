import OrderItem from "./OrderItem"
import * as Icon from 'react-bootstrap-icons';

export default function OrderItems() {
    const orders = [
        {
            title: "OpenOrders",
            count: "239",
            border: "#FFEA00"
        }, {
            title: "Orders in transit",
            count: "126",
            border: "blue"
        }
        ,{
            title: "Fulfilled orders",
            count: "1254",
            border: "green"
        },
        {
            title: "Cancelled Orders",
            count: "35",
            border: "red"
        }
    ]
    return (
        <div className="orders">
            {
            orders.map((order,index) => {
                return (
                    <OrderItem index={index} order={order} >
                        <Icon.Basket style={{position:"absolute",right:10}} color={order.border} size={20}/>
                        <Icon.Truck style={{position:"absolute",right:10}} color={order.border} size={20}/>
                        <Icon.Cart style={{position:"absolute",right:10}} color={order.border} size={20}/>
                        <Icon.XOctagon style={{position:"absolute",right:10}} color={order.border} size={20}/>
                </OrderItem>
                )

            })
        } </div>
    )
}
