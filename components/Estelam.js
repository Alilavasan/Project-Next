import Link from 'next/link';
import React from 'react';
import  { useState } from "react";
import { Form, Input,Button} from 'reactstrap';
import axios from "axios";




 const Estelam =() => {

const [data, setData] = useState([]);

// axios
// .get("")
// .then((res) => {
//   setData(res.data);
// })
// .catch((err) => console.log(err, "is error!"));





    return (
        
        <>
        <div className="container">
            <div className="inquiry-box">
                <div className="row text-center mb_20">
                    <div className="header-title" >
                        <h5 className="wv-heading--title">
                            استعلام مزایده
                        </h5>
                        <h6 className="wv-heading--subtitle">
                            کدرهگیری, شماره فاکتور را وارد کنید
                        </h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mx-auto">
                        <div className="myform form ">
                            <Form action="" method="post" name="login">
                                <div className="form-group">
                                    <Input type="text" name="code" className="form-control my-input" id="code"  ng-model="model.refrenceId" placeholder="چهار کاراکتر آخر کد رهگیری" />
                                </div>
                                <div className="form-group">
                                    <Input type="number" name="number" className="form-control my-input" id="number" ng-model="model.voucherId" placeholder="شماره فاکتور" />
                                </div>
                                <div className="form-group">
                                    <Input type="text" name="date" id="date" className="form-control my-input" ng-model="model.date" placeholder="تاریخ فاکتور (0000/00/00)"  />
                                </div>
                                <div className="text-center ">
                                    {/* <!-- <a href="#"  class=" btn btn-block send-button tx-tfm" data-toggle="modal" data-target="#factor-modal">استعلام</a> --> */}
                                    <Button type="button" className="btn btn-block send-button" ng-click="data" size="lg" block>
                                        استعلام
                                    </Button>
                                </div>
                                <Link href="#">
                                <a href="#" className=" btn btn-block info-button tx-tfm" data-toggle="modal" data-target="#factor-guid">راهنما</a>
                                </Link>
                                </Form>
                        </div>
                        
                    </div>
                    
                    
                </div>
                
            </div>
            </div>
        
<style jsx>
    {
        `
        .header-title{
            width:100%;

        }

        `
    }
</style>
      
    </>
    

    )
 }
export default Estelam;