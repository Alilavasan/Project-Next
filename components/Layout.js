import Link from 'next/link';
import Image from 'next/image';
// import logo from '../public/images/img/logo-mob.png';
import logos from '../public/images/img/logo.png';

import {
    Navbar,
    Nav,
    Button
  } from "reactstrap";

  const LayoutApp = ({ children }) => {

    return(
      
      <Navbar
      color=""
      light
      expand="md"
      style={{ position: "fixed", width: "100%",zIndex: "999" }}
    >
      
     {children}
     <div className="body_wrapper">
                <div className="header_area navbar_fixed">
            <Nav className="navbar navbar-expand-lg menu_one erp_menu">
                <div className="container">
                    <Button className="navbar-toggler collapsed hide-xs" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="menu_toggle">
                            <span className="hamburger">
                                
                            </span>
                            <span className="hamburger-cross">
                                <span></span>
                                <span></span>
                        </span>
                            </span>
                    </Button>
                    <Link href="https://trade2.seateto.ir/">
                    <a className="er_btn btn_hover er_btn_one" href="https://trade2.seateto.ir/" target="_blank">ورود به پنل معاملات</a>
                    </Link>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-auto menu">
                            <li className="nav-item">
                              <Link href="index.html#section_one">
                                <a href="index.html#section_one" className="item"><span className="text">چرا سیتِتو</span></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="index.html#section_two">
                                <a href="index.html#section_two" className="item"><span className="text">ویژگی ها</span></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="index.html#section_five">
                                <a href="index.html#section_five" className="item"><span className="text">راهنمای پیش ثبت نام</span></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                            <Link href="index.html#section_four">
                                <a href="index.html#section_four" className="item"><span className="text">آموزش سامانه معاملاتی</span></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="index.html#section_faq">
                                <a href="index.html#section_faq" className="item"><span className="text">سوالات متداول</span></a>
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                              <Link href="/rule.html">
                                <a href="rule.html" className="item"><span className="text">قوانین و مقررات</span></a>
                               </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact.html">
                                <a href="contact.html" className="item"><span className="text">تماس با پشتیبانی</span></a>
                                </Link>
                            </li>
                        </ul>

                    </div>
                     {/* <a className="navbar-brand show-xs" href="index.html"><Image src={logo} alt="logo" width="200px" height="54px"/></a> */}
                     <a className="navbar-brand hide-xs show-xs" href="index.html"><Image src={logos} alt="logos" width="150px" height="50px"/></a>

                </div>
            </Nav>
        </div>
        </div>
             {/* <Nav className="mr-auto nav-item">
              <Link href="/index.html#section_two">
              <a href="index.html#section_two" className="item"><span className="text">ویژگی ها</span></a>
              </Link>
            </Nav> */}
                      
</Navbar>



     
    )
  }




  export default LayoutApp;