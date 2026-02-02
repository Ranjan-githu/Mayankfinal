import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import axios from '../utils/axios';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        const { data } = await axios.get('/api/orders/myorders', config);
        setOrders(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div className="fade-in" style={styles.container}>
      <div style={styles.row}>
        <div style={styles.col}>
          <h2>User Profile</h2>
          <br />
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
        </div>

        <div style={styles.col2}>
          <h2>My Orders</h2>
          {loading ? <p>Loading orders...</p> : orders.length === 0 ? <p>No orders found.</p> : (
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>DATE</th>
                  <th style={styles.th}>TOTAL</th>
                  <th style={styles.th}>PAID</th>
                  <th style={styles.th}>DELIVERED</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order._id}>
                    <td style={styles.td}>{order._id.substring(0, 10)}...</td>
                    <td style={styles.td}>{order.createdAt.substring(0, 10)}</td>
                    <td style={styles.td}>₹{order.totalPrice}</td>
                    <td style={styles.td}>{order.isPaid ? 'Yes' : 'No'}</td>
                    <td style={styles.td}>{order.isDelivered ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '4rem 10%', minHeight: '80vh' },
  row: { display: 'flex', flexWrap: 'wrap', gap: '3rem' },
  col: { flex: 1, minWidth: '250px' },
  col2: { flex: 3, minWidth: '400px' },
  table: { width: '100%', borderCollapse: 'collapse', marginTop: '1rem', backgroundColor: 'white', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' },
  th: { textAlign: 'left', padding: '12px', backgroundColor: '#eee', borderBottom: '1px solid #ddd' },
  td: { padding: '12px', borderBottom: '1px solid #eee' }
};

export default Profile;
