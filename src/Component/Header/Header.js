
import React from 'react';
import { NavLink,useLocation } from 'react-router-dom';
import Logo from '../../Assets/Image/logo.png'
import './Header.css'

const Header = () => {
    const {pathname} = useLocation()
    return (
        <nav style={pathname.includes('blog')? {display:'none'}:{display:'flex'}} >
            <div className="logo_container">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="link_container">
                <NavLink className={({isActive}) =>(isActive?'active_link':'link')}to ='/'>Home</NavLink>
                <NavLink className={({isActive}) =>(isActive?'active_link':'link')}to ='/videos'>Video</NavLink>
                <NavLink className={({isActive}) =>(isActive?'active_link':'link')}to ='/login'>Login</NavLink>
              
            </div>
        </nav>
    );
};

export default Header;






































// import React from 'react';
// import Logo from '../../Assets/Image/logo.png'
// import { NavLink } from 'react-router-dom';
// import './Header.css'

// const Header = () => {
//     return (
//        <nav>
//            <div className="logo_container">
//                 <img src={Logo} alt="logo" />
//            </div>
//             <div className="link_container">
//                 <NavLink className={({isActive}) =>(isActive? 'active_link':'link')} to ='/home'>Home</NavLink>

//                 <NavLink className={({isActive})=>(isActive? 'active_link':'link')} to ='/videos'>Videos</NavLink>

//                 <NavLink className={({isActive}) =>(isActive? 'active_link':'link')} to ='/login'>Login</NavLink>
             
              
//             </div>
//        </nav>
//     );
// };

// export default Header;