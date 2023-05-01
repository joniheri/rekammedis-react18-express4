import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

export default function DataTable2() {
  const customStylesTable = {
    headCells: {
      style: {
        fontSize: "20px", // override the row height
      },
    },
    rows: {
      style: {
        fontSize: "17px", // override the row height
      },
    },
  };

  const columnsTablePasien = [
    {
      name: "No",
      selector: (row, index) => index + 1,
      sortable: true,
      style: {
        fontSize: "20px",
      },
    },
    {
      name: "No KTP",
      selector: (row) => row.no_ktp,
      sortable: true,
    },
    {
      name: "Nama Lengkap",
      selector: (row) => row.fullname,
      sortable: true,
    },
    {
      name: "Jenis Kelamin",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "Tanggal Lahir",
      selector: (row) => row.date_of_birth,
      sortable: true,
    },
    {
      name: "Alamat",
      selector: (row) => row.address,
      sortable: true,
    },
  ];

  const [dataPasien, setDataPasien] = useState([]);
  const getDataPasien = async (e) => {
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

  return (
    <div className="container">
      <h1>DataTable2</h1>
      <div className="row">
        <div className="text-end">
          <input type="text" onChange={getDataPasien} />
        </div>
        <DataTable
          columns={columnsTablePasien}
          data={dataPasien}
          customStyles={customStylesTable}
          pagination
          fixedHeader
          highlightOnHover
          dense
        ></DataTable>
      </div>
    </div>
  );
}
