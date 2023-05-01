import React, { useState } from "react";
import DataTable from "react-data-table-component";

export default function DataTable1() {
  const customStyles = {
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
  const columnsTable1 = [
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
  const dataTable1 = [
    {
      id: "EOjGsahggf",
      no_ktp: "130101050129845",
      fullname: "Jon Heri Soft",
      gender: "Laki-Laki",
      date_of_birth: "1991-01-01",
      address: "Depok",
      phone_number: "08137877132",
      created_at: "2023-04-26 22:13:01",
      updated_at: "2023-04-26 22:13:10",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
    {
      id: "KxHBaWQ3yR",
      no_ktp: "1245923457879877",
      fullname: "Rahem Cesy A",
      gender: "Perempuan",
      date_of_birth: "1997-06-17",
      address: "Jakarta Barat",
      phone_number: "088327873245",
      created_at: "2023-03-28 02:46:58",
      updated_at: "2023-03-29 17:36:49",
    },
  ];
  const [data1, setData1] = useState(dataTable1);
  const handleSearchData1 = (e) => {
    const newData = dataTable1.filter((item) => {
      return item.fullname.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setData1(newData);
  };

  return (
    <div className="container">
      <h1> DataTable1</h1>
      <div className="row">
        <div className="text-end">
          <input
            type="text"
            onChange={handleSearchData1}
            className=""
            placeholder="Cari berdasarkan Nama Lengkap"
          />
        </div>
        <DataTable
          columns={columnsTable1}
          data={data1}
          selectableRows
          customStyles={customStyles}
          pagination
          dense
          fixedHeader
          highlightOnHover
        ></DataTable>
      </div>
    </div>
  );
}
