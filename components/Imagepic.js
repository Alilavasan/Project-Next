import Image from 'next/image';
import LayoutApp from '../components/Layout';
import banner from '../public/images/img/breadcrumb/banner_bg.png';
import Profile from '../public/images/img/img-05.jpg';

const Imagepic =()=>{
    return(

<>

  <LayoutApp> 
  <Image className="breadcrumb_shap" style={{Overflow:"hidden"}} src={banner} alt="pic" width="619px" height="630px"/>
  <div className="container"> 
                <div className="breadcrumb_content text-center">
                    <h1 className="f_p f_700 f_size_30 w_color l_height50 mt_170">استعلام معامله انجام شده در سیتتو </h1>
                </div>   
            </div>
  </LayoutApp>    
  
  <Image className="breadcrumb_area" src={Profile} alt="profile" width="3583px" height="1150px"/>

  <style jsx>{`
                
               
            `}
        </style>    
 
       </>
    )
}
export default Imagepic;