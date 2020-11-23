import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { historyOrder } from '../../features/OrderHistory/action'
import { Button, LoadingBox, MessageBox } from '../../components'
import moment from 'moment'
import { Table, TableHeader, TableData } from './OrderHistoryElements'

const OrderHistory = (props) => {
  const dispatch = useDispatch()
  const orderHistory = useSelector((state) => state.orderHistory)
  const { loading, error, orders } = orderHistory

  useEffect(() => {
    dispatch(historyOrder())
  }, [dispatch])

  const detailOrderHandler = (id) => {
    props.history.push(`/order/${id}`)
  }
  return (
    <main>
      <h1>Order History</h1>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant='danger'>error</MessageBox>
      ) : (
        <Table>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>DATE</TableHeader>
              <TableHeader>TOTAL</TableHeader>
              <TableHeader>PAID</TableHeader>
              <TableHeader>DELIVERED</TableHeader>
              <TableHeader>ACTION</TableHeader>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <TableData>{order._id}</TableData>
                <TableData>{moment(order.createdAt).calendar()}</TableData>
                <TableData>${order.totalPrice}</TableData>
                <TableData>
                  {order.isPaid ? `${moment(order.paidAt).calendar()}` : 'No'}
                </TableData>
                <TableData>
                  {order.isDelivered
                    ? `${moment(order.deliveredAt).calendar()}`
                    : 'No'}
                </TableData>
                <TableData>
                  <Button onClick={() => detailOrderHandler(order._id)}>
                    Detail
                  </Button>
                </TableData>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </main>
  )
}

export default OrderHistory
