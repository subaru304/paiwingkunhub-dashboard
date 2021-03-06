const columnDefs = [
  {
    headerName: 'รหัส',
    field: 'id',
    filter: true,
    width: 150,
    sort: 'asc'
  },
  {
    headerName: 'อีเมล',
    field: 'username',
    filter: true
  },
  {
    headerName: 'ชื่อ',
    field: 'first_name',
    filter: true
  },
  {
    headerName: 'นามสกุล',
    field: 'last_name',
    filter: true
  },
  {
    headerName: 'ที่อยู่',
    field: 'address',
    filter: true
  },
  {
    headerName: 'เบอร์โทรศัพท์',
    field: 'phone',
    filter: true
  },
  {
    headerName: 'ประเภท',
    field: 'role',
    filter: true,
    cellRendererFramework: 'CellRendererRoles'
  },
  {
    headerName: 'ยืนยันอีเมล',
    field: 'is_verified',
    filter: false,
    cellRendererFramework: 'CellRendererStatus'
  },
  {
    headerName: 'จัดการ',
    field: 'id',
    width: 400,
    filter: false,
    cellRendererFramework: 'CellRendererActions'
  }
]

module.exports = columnDefs
