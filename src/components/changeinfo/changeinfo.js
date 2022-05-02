import React from 'react'
import { Table } from 'react-bootstrap'

const Changeinfo = () => {
  return (
        <div className="row infor--block infor__body">
            <Table striped>
                <tbody>
                    <tr>
                        <td>Mã Số Sinh Viên</td>
                        <td><input type="text" name="" id="" className="infor__body--input" placeholder="nhập mã số" /></td>
                    </tr>
                    <tr>
                        <td>Họ Và Tên</td>
                        <td><input type="text" name="" id="" className="infor__body--input" placeholder="nhập mã số"/></td>
                    </tr>
                    <tr>
                    <td>Giới tính</td>
                    <td>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="sex"/>Nam
                            </label>
                            </div>
                            <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="sex"/>Nữ
                            </label>
                            </div>
                    </td>
                    </tr>
                    <tr>
                    <td>Email</td>
                    <td><input type="text" name="" id="" className="infor__body--input" placeholder="nhập mã số"/></td>
                    </tr>
                    <tr>
                    <td>Số Điện Thoại</td>
                    <td><input type="text" name="" id="" className="infor__body--input" placeholder="nhập"/></td>
                    </tr>
                    <tr className="table_control">
                        <td></td>
                        <td>
                            <button className="btn btn-outline-success">Lưu</button>
                            <button className="btn btn-outline-danger">Hủy Bỏ</button>
                        </td>
                    </tr>
                </tbody>
                </Table>
        </div> 
  )
}

export default Changeinfo