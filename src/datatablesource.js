export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 260,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 260,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B",
    status: "active",
    email: "ngu1213@gamil.com",
    age: 35,
  },
  {
    id: 2,
    username: "Wowy",
    img: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg",
    status: "passive",
    email: "ngu1213@gamil.com",
    age: 43,
  },
  {
    id: 3,
    username: "Karik",
    img: "https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D",
    status: "active",
    email: "nfffd3@gamil.com",
    age: 11,
  },
  {
    id: 4,
    username: "Vu",
    img: "https://images.livemint.com/img/2022/02/26/1140x641/The-Worst-Person-in-the-World_1645849348768_1645849366108.jpg",
    status: "active",
    email: "ngdasd3@gamil.com",
    age: 15,
  },
  {
    id: 5,
    username: "Huy",
    img: "https://images.livemint.com/img/2022/02/26/1140x641/The-Worst-Person-in-the-World_1645849348768_1645849366108.jpg",
    status: "pending",
    email: "ngdas3@gamil.com",
    age: 23,
  },
];
