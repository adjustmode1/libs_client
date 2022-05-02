import React from 'react'
import { Button, Table } from 'react-bootstrap'

const Changepass = () => {
  return (
    <div className="row infor--block infor__body">
    <Table>
        <tbody>
            <tr>
                <td>Mật Khẩu Cũ</td>
                <td><input type="password" name="" id="" className="infor__body--input" placeholder="nhập mã số" /></td>
            </tr>
            <tr>
                <td>Mật Khẩu Mới</td>
                <td><input type="password" name="" id="" className="infor__body--input" placeholder="nhập mã số" /></td>
            </tr>
            <tr className="table_control">
            <td></td>
            <td>
                <Button variant="btn-outline-success">Lưu</Button>
                <Button Variant="btn btn-outline-danger">Hủy Bỏ</Button>
            </td>
        </tr>
        </tbody>
    </Table>
</div>
  )
}

export default Changepass