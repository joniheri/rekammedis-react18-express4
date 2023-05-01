import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DataPasienFromApi() {
  const [dataPasien, setDataPasien] = useState([]);

  const getDataPasien = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/pasien/getdatas"
      );
      // console.log("Data Pasien: ", response.data.data);
      setDataPasien(response.data.data);
    } catch (error) {
      console.log("Get Data Pasien: ", error);
    }
  };

  useEffect(() => {
    getDataPasien();
  }, []);
  // console.log(dataPasien);

  return (
    <div className="container mt-3">
      <h1>Data Pasien</h1>
      <table
        id="example"
        className="table table-sm table-striped nowrap"
        style={{ width: "100%" }}
      >
        <thead>
          <tr>
            <th>No</th>
            <th>No KTP</th>
            <th>Nama Lengkap</th>
            <th>Jenis Kelamin</th>
            <th>Tanggal lahir</th>
            <th>Alamat</th>
            <th>No Tlp/HP</th>
          </tr>
        </thead>
        <tbody>
          {dataPasien.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.no_ktp}</td>
                <td>{item.gender}</td>
                <td>{item.fullname}</td>
                <td>{item.date_of_birth}</td>
                <td>{item.address}</td>
                <td>{item.phone_number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
