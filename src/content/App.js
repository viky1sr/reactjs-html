import React,{Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../style/styles.css';


class App extends Component{
    render(){
        return(
           <div className="wr">
               <div className="header">
                   <div className="nav-bar">
                       <div className="logo">
                           <img className="img-f" src={require('../logo/babastudio-logo.png')}/>
                       </div>
                       <div className="menu">
                           <ul>
                           <li><a>Home</a></li>
                           <li><a>Blogs</a></li>
                           <li><a>Galery</a></li>
                           <li><a>Contat</a></li>
                           </ul>
                       </div>
                   </div>
               </div>
               {/* end header */}
               <div className="slide">
                   <div className="slide-content">
                       <img className="img-slide" src={require('../images/banner-desktop.jpg')} />
                   </div>
               </div>

               {/* slider */}
               <h2 className="title">Prestasi Murid Baba Studio</h2>
               <div className="content">
               <div className="content-gambar">
                   <div className="images">
                       <img className="img-s" src={require('../images/21cineplex.jpg')} />
                       <div className="content-img">
                           <h2 className="font-img">www.21cineplex.go.id</h2>
                       </div>
                   </div>
                   <div className="images">
                       <img className="img-s" src={require('../images/bpn.jpg')} />
                       <div className="content-img">
                           <h2 className="font-img">www.bpn.go.id</h2>
                       </div>
                   </div>
                   <div className="images">
                       <img className="img-s" src={require('../images/republika.jpg')} />
                       <div className="content-img">
                           <h2 className="font-img">www.republic.go.id</h2>
                       </div>
                    </div>
                   </div>
               </div>
               {/* end gambar */}
               <div className="content-gambar">
                   <h2 className="title"> Tempat kursus Baba Studio</h2>
                   <div className="content-ytb">
                       <iframe width="560" height="315"  src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media"></iframe>
                   </div>
                   <div className="content-map">
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.204219677206!2d106.98943791419366!3d-6.236791262809252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c25c7c28707%3A0xcfd31c6ab3a9a3d9!2sGelanggang%20Olahraga%20Kota%20Bekasi!5e0!3m2!1sid!2sid!4v1574310116400!5m2!1sid!2sid" width="550" height="300" frameBorder="0" allowFullScreen=""></iframe>
                   </div>
               </div>


           </div>
        )
    }
}

export default App;

