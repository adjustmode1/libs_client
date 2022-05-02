import React from 'react'
import { Button, Table } from 'react-bootstrap';

const Showinfo = () => {
  return (
    <div className="row infor--block infor__body">
        <Table striped>
            <tbody>
                <tr className="table_control">
                    <td></td>
                    <td><button className="btn btn-outline-primary">Cập Nhật</button></td>
                </tr>
                <tr>
                    <td>Mã Số Sinh Viên</td>
                    <td>B1809239</td>
                </tr>
                <tr>
                    <td>Họ Và Tên</td>
                    <td>Nguyễn A</td>
                </tr>
                <tr>
                <td>Giới tính</td>
                <td>Nam</td>
                </tr>
                <tr>
                <td>Email</td>
                <td>Adjustmoe@gmail.com</td>
                </tr>
                <tr>
                <td>Số Điện Thoại</td>
                <td>024768555</td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default Showinfo