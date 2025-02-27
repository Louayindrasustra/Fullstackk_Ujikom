import React, { useEffect, useState } from 'react';
import Dashboard from '../template/Dashboard';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import ModalPembeli from '../components/ModalPembeli';

const Admin = () => {
  const [data, setData] = useState([]);
  const [idLogin, setIdlogin] = useState(null);
  const [id, setId] = useState(null);
  const [dataUp, setDataUp] = useState(null);
  const [modalAdd, setModalAdd] = useState(false);

  const token = localStorage.getItem("token");

  const getAllData = async () => {
    try {
      const response = await axios.get("http://localhost:3008/admin/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (token) {
      try {
        setIdlogin(jwtDecode(token));
        getAllData();
      } catch (error) {
        console.error("Invalid token:", error);
      }
    } else {
      console.error("Token not found");
    }
  }, []);

  const getDataById = async () => {
    try {
      const response = await axios.get(`http://localhost:3008/admin/find/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDataUp(response.data.data);
    } catch (error) {
      console.error("Error fetching data by ID:", error);
    }
  };

  useEffect(() => {
    if (id) getDataById();
  }, [id]);

  const updateUser = async () => {
    try {
      const response = await axios.put(`http://localhost:3008/admin/update/${id}`, dataUp, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Response:', response.data);
      window.location.href = '/admin';
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Dashboard page='/admin'>
      {data && (
        <ModalPembeli
          judul='Edit data Pribadi'
          data={dataUp}
          onSub={updateUser}
          setData={setDataUp}
          state={{ modalAdd, setModalAdd }}
        />
      )}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-black">
            <tr>
              <th className="px-6 py-3">Nomor</th>
              <th className="px-6 py-3">Nama</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => (
              <tr key={e.id}>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{i + 1}</th>
                <td className="px-6 py-4">{e.nama}</td>
                <td className="px-6 py-4">{e.email}</td>
                <td className="px-6 py-4 flex gap-2">
                  {e.id === idLogin?.adminId && (
                    <a
                      href="#"
                      onClick={() => {
                        setModalAdd(true);
                        setId(e.id);
                      }}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Edit
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
};

export default Admin;
