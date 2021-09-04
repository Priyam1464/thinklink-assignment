import Card from 'react-bootstrap/Card'


export default function OrderItem({order, index, children}) {
    return (
        <Card className="shadow-sm"
            style={
                index !== 0 ? {
                    width: '18rem',
                    marginLeft: '8px',
                    borderTop: "2px solid " + order.border,
                    borderRadius: "4px",
                    position: "relative"
                } : {
                    width: '18rem',
                    borderTop: "2px solid " + order.border,
                    position: "relative"
                }
        }>
            <Card.Body>
                <div style={
                    {
                        display: "flex",
                        flexDirection: "column"
                    }
                }>
                    <div style={
                        {display: "flex"}
                    }>
                        <p className="font-type">
                            {
                            order.title
                        }</p>
                        {
                        children[index]
                    } </div>
                    <p id="orderCount">
                        <b>{
                            order.count
                        }</b>
                    </p>
                </div>
            </Card.Body>
        </Card>
    )
}
