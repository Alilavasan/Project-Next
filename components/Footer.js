import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo2 from '../public/images/img/logo2.png';
import aira from '../public/images/img/aira.jpeg';
import namad from '../public/images/img/namad.png';
import passenger from '../public/images/img/passenger-rights.png';
import cao from '../public/images/img/cao.svg';



const Footer =() => {
    return (
        
        <>
<div className="footer_area h_footer_dark h_footer_dark_two">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="f_widget dark_widget company_widget text-right">
                            <Link href="/index.html">
                            <a href="index.html" className="f-logo">
                                <Image src={logo2} alt="logo" width="200px" height="54px" />
                         </a>
                            </Link>
                            <p>تمامی حقوق این وب سایت متعلق به شرکت پروازکاران آسمان گستر می باشد</p>
                            <div className="f_social_icon">
                                <Link href="https://t.me/seateto_marketplace" className="ti-telegram">
                                <a href="https://t.me/seateto_marketplace" className="ti-telegram" target='_blank'><i className="fab fa-telegram-plane"></i></a>
                                </Link>
                                <Link href="https://wa.me/989360331957" className="ti-whatsapp">
                                <a href="https://wa.me/989360331957" className="ti-whatsapp" target='_blank'><i className="fab fa-whatsapp"></i></a>
                                </Link>
                                <Link href="https://instagram.com/seateto.ir" className="ti-instagram">
                                <a href="https://instagram.com/seateto.ir" className="ti-instagram" target='_blank'></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="f_widget dark_widget about-widget  text-right">
                            <h3 className="f-title f_500 t_color f_size_18 mb_40">دسترسی سریع</h3>
                            <ul className="list-unstyled f_list">
                                <li>
                                    <Link href="/inquiry.html">
                                    <a href="inquiry.html">استعلام معامله</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/rule.html">
                                    <a href="rule.html">قوانین و مقررات </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact.html">
                                    <a href="contact.html">تماس با پشتیبانی</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://trade.seateto.ir/register-agency">
                                    <a href="https://trade.seateto.ir/register-agency">پیش ثبت نام آژانس ها</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://trade.seateto.ir">
                                    <a href="https://trade.seateto.ir">ورود به بازار معاملات</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="f_widget dark_widget about-widget pr_20 text-right">
                            <h3 className="f-title f_500 t_color f_size_18 mb_40">لینک های پرکاربرد</h3>
                            <ul className="list-unstyled f_list">
                                <li>
                                    <Link href="https://www.mrud.ir/">
                                    <a href="https://www.mrud.ir/">وزارت راه و شهرسازی</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.cao.ir/">
                                    <a href="https://www.cao.ir/">سازمان هواپیمایی کشوری</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://cppo.mimt.gov.ir/">
                                    <a href="https://cppo.mimt.gov.ir/">سازمان حمایت از حقوق مصرف کنندگان</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                    <a href="#">شرکت پروازکاران</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="f_widget dark_widget about-widget text-right">
                            <ul className="footer-icon row">

                                <li>
                                    <Link href='http://aira.ir'>
                                    <a href='http://aira.ir' target='_blank'>
                                        <Image src={aira} alt=""  width="77px" height="82"/>
                                    </a>
                                    </Link>
                                </li>
                                 {/* <li>
                                    <img id='nbqejxlzesgtnbqergvjesgt' style='cursor:pointer' onclick='window.open("https://logo.samandehi.ir/Verify.aspx?id=210230&p=uiwkrfthobpduiwkxlaoobpd", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")'
                                        alt='logo-samandehi' src='https://logo.samandehi.ir/logo.aspx?id=210230&p=odrfnbpdlymaodrfqftilyma' />
                                </li>
                                <li>
                                    <img onclick='window.open("https://trustseal.enamad.ir/?id=189844&amp;Code=uoVDot067V9KHbhVRuV1", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")' referrerpolicy="origin" src="img/enamad.png"
                                        alt="img/enamad.png" style="cursor:pointer" id="uoVDot067V9KHbhVRuV1">
                                </li> */}
                                <li>
                                    <Image src={namad} alt=""  width="77px" height="82"/>
                                </li>
                                <li>
                                    <Link href='https://www.cao.ir/paxrights'>
                                    <a href='https://www.cao.ir/paxrights' target='_blank'>
                                        <Image src={passenger} alt="" width="77px" height="82"/>
                                    </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://www.cao.ir'>
                                    <a href='https://www.cao.ir' target='_blank'>
                                        <Image src={cao} alt="" width="77px" height="82"/>
                                    </a>
                                    </Link>
                                </li>
                            </ul>



                        </div>
                    </div>

                </div>
            </div>
        </div>

        </>
    )
}


export default Footer;