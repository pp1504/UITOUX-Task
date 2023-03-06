import "./Header.css"
import logo from '../../assets/logo.png'
import CarImg from "../../assets/svg/car.svg";
import HeartImg from "../../assets/svg/heart.svg";
import PersonImg from "../../assets/svg/person.svg";
import CartImg from "../../assets/svg/cart.svg";
import SearchImg from "../../assets/svg/search.svg"





function Header() {
    return (
        <>
          <header className="site__mobile-header">
                  <div className="mobile-header">
                     <div className="container">
                        <div className="mobile-header__body">
                           <button className="mobile-header__menu-button" type="button">
                              <svg width="18px" height="14px">
                                 <path d="M-0,8L-0,6L18,6L18,8L-0,8ZM-0,-0L18,-0L18,2L-0,2L-0,-0ZM14,14L-0,14L-0,12L14,12L14,14Z"></path>
                              </svg>
                           </button>
                           <a className="mobile-header__logo" href="">
                              <div>
                                 <img src={logo} alt="Logo" style={{ "height": "30px", "width": "100px" }} className="mobile-header__logo-part-one" />
                              </div>
                           </a>
                           <div className="mobile-header__search mobile-search">
                              <form className="mobile-search__body">
                                 <input type="text" className="mobile-search__input" placeholder="Enter keyword or part number" name="title" />
                                 <button type="button" className="mobile-search__vehicle-picker" aria-label="Select Vehicle">
                                    <img src={CarImg} alt="car" />
                                    <span className="mobile-search__vehicle-picker-label">Vehicle</span>
                                 </button>
                                 <button type="submit" className="mobile-search__button mobile-search__button--search">
                                 <img src={SearchImg} alt="search" />
                                 </button>
                                 <button type="button" className="mobile-search__button mobile-search__button--close">
                                    <svg width="20" height="20">
                                       <path d="M16.7,16.7L16.7,16.7c-0.4,0.4-1,0.4-1.4,0L10,11.4l-5.3,5.3c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L8.6,10L3.3,4.7
                                       c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L10,8.6l5.3-5.3c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L11.4,10l5.3,5.3
                                       C17.1,15.7,17.1,16.3,16.7,16.7z"></path>
                                    </svg>
                                 </button>
                                 <div className="mobile-search__field"></div>
                              </form>
                           </div>
                           <div className="mobile-header__indicators">
                              <div className="mobile-indicator mobile-indicator--search d-md-none">
                                 <button type="button" className="mobile-indicator__button">
                                    <span className="mobile-indicator__icon">
                                       <svg width="20" height="20">
                                          <path d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
                                          c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
                                          c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"></path>
                                       </svg>
                                    </span>
                                 </button>
                              </div>
                              <div className="mobile-indicator d-none d-md-block">
                                 <a href="account-login.html" className="mobile-indicator__button">
                                    <span className="mobile-indicator__icon">
                                    <img src={PersonImg} alt="search"  width="25" height="25"/>
                                    </span>
                                 </a>
                              </div>
                              <div className="mobile-indicator d-none d-md-block">
                                 <a href="wishlist.html" className="mobile-indicator__button">
                                    <span className="mobile-indicator__icon">
                                    <img src={HeartImg} alt="search"  width="25" height="25"/>
                                    <span className="mobile-indicator__counter" style={{backgroundColor:"#71edfb"}}>0</span>
                                    </span>
                                 </a>
                              </div>
                              <div className="mobile-indicator">
                                 <a href="cart.html" className="mobile-indicator__button">
                                    <span className="mobile-indicator__icon">
                                    <img src={CartImg} alt="search"  width="25" height="25"/>
                                       <span className="mobile-indicator__counter" style={{backgroundColor:"#71edfb"}}>7</span>
                                    </span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </header>
      
               <header className="site__header">
                  <div className="header">
                     <div className="header__megamenu-area megamenu-area">
                     </div>
                     <div className="header__topbar-classic-bg"></div>
                     <div className="header__topbar-classic">
                        <div className="topbar topbar--classic">
                           <div className="topbar__item-text"><a className="topbar__link" href="about-us.html" style={{textDecoration:'none'}}>About Us</a></div>
                           <div className="topbar__item-text"><a className="topbar__link" href="contact-us-v1.html" style={{textDecoration:'none'}}>Contacts</a></div>
                           <div className="topbar__item-text"><a className="topbar__link" href="" style={{textDecoration:'none'}}>Store Location</a></div>
                           <div className="topbar__item-text"><a className="topbar__link" href="track-order.html" style={{textDecoration:'none'}}>Track Order</a></div>
                           <div className="topbar__item-text"><a className="topbar__link" href="blog-classic-right-sidebar.html" style={{textDecoration:'none'}}>Blog</a></div>
                           <div className="topbar__item-spring"></div>
                           <div className="topbar__item-button"><a href="" className="topbar__button" style={{textDecoration:'none'}}><span className="topbar__button-label" >Compare:</span> <span className="topbar__button-title">5</span></a></div>
                           <div className="topbar__item-button topbar__menu">
                              <button className="topbar__button topbar__button--has-arrow topbar__menu-button" type="button">
                                 <span className="topbar__button-label">Currency:</span> <span className="topbar__button-title">RS</span>
                                 <span className="topbar__button-arrow">
                                    <svg width="7px" height="5px">
                                       <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                    </svg>
                                 </span>
                              </button>
                             
                           </div>
                           <div className="topbar__menu">
                              <button className="topbar__button topbar__button--has-arrow topbar__menu-button" type="button">
                                 <span className="topbar__button-label" style={{textDecoration:'none'}}>Language:</span> <span className="topbar__button-title">EN</span>
                                 <span className="topbar__button-arrow">
                                    <svg width="7px" height="5px">
                                       <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                    </svg>
                                 </span>
                              </button>
                          
                           </div>
                        </div>
                     </div>
                     <div className="header__navbar">
                        <div className="header__navbar-departments">
                           <div className="departments">
                              <button className="departments__button" type="button">
                                 <span className="departments__button-icon">
                                    <svg width="16px" height="12px">
                                       <path d="M0,7L0,5L16,5L16,7L0,7ZM0,0L16,0L16,2L0,2L0,0ZM12,12L0,12L0,10L12,10L12,12Z"></path>
                                    </svg>
                                 </span>
                                 <span className="departments__button-title">Shop By Category</span>
                                 <span className="departments__button-arrow">
                                    <svg width="9px" height="6px">
                                       <path d="M0.2,0.4c0.4-0.4,1-0.5,1.4-0.1l2.9,3l2.9-3c0.4-0.4,1.1-0.4,1.4,0.1c0.3,0.4,0.3,0.9-0.1,1.3L4.5,6L0.3,1.6C-0.1,1.3-0.1,0.7,0.2,0.4z"></path>
                                    </svg>
                                 </span>
                              </button>
                              <div className="departments__menu">
                                 <div className="departments__arrow"></div>
                                 <div className="departments__body">
                                   
                                    <div className="departments__menu-container"></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="header__navbar-menu">
                           <div className="main-menu">
                              <ul className="main-menu__list">
                                 <li className="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                                    <a href="#" className="main-menu__link" style={{textDecoration:'none'}}>
                                       Home
                                       <svg width="7px" height="5px">
                                          <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                       </svg>
                                    </a>
                                  
                                 </li>
                                 <li className="main-menu__item main-menu__item--submenu--megamenu main-menu__item--has-submenu">
                                    <a href="index.html" className="main-menu__link" style={{textDecoration:'none'}}>
                                       Megamenu
                                       <svg width="7px" height="5px">
                                          <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                       </svg>
                                    </a>
                      
                                 </li>
                                 <li className="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                                    <a href="shop-grid-4-columns-sidebar.html" className="main-menu__link" style={{textDecoration:'none'}}>
                                       Shop
                                       <svg width="7px" height="5px">
                                          <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                       </svg>
                                    </a>
                  
                                 </li>
                                 <li className="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                                    <a href="blog-classic-right-sidebar.html" className="main-menu__link" style={{textDecoration:'none'}}>
                                       Blog
                                       <svg width="7px" height="5px">
                                          <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                       </svg>
                                    </a>
                          
                                 </li>
                                 <li className="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                                    <a href="account-login.html" className="main-menu__link" style={{textDecoration:'none'}}>
                                       Account
                                       <svg width="7px" height="5px">
                                          <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                       </svg>
                                    </a>
                            
                                 </li>
                                 <li className="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                                    <a href="about-us.html" className="main-menu__link" style={{textDecoration:'none'}}>
                                       Pages
                                       <svg width="7px" height="5px">
                                          <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z"></path>
                                       </svg>
                                    </a>
                                    
                                 </li>
                                 <li className="main-menu__item"><a  className="main-menu__link" target="_blank" style={{textDecoration:'none'}}>Buy Theme</a></li>
                              </ul>
                           </div>
                        </div>
                        <div className="header__navbar-phone phone">
                           <a href="" className="phone__body" style={{textDecoration:'none'}}>
                              <div className="phone__title" >Call Us:</div>
                              <div className="phone__number" >089252 97807</div>
                           </a>
                        </div>
                     </div>
                     <div className="header__logo">
                        <a href="index.html" className="logo">
                           <div className="logo__slogan">Auto parts for Cars, trucks and motorcycles</div>
                           <div className="logo__image">
      
                              <img src={logo} alt='logo'  width="150" height={"60"}/>
      
                           </div>
                        </a>
                     </div>
                     <div className="header__search">
                        <div className="search">
                           <form action="" className="search__body">
                              <div className="search__shadow"></div>
                              <input className="search__input" type="text" placeholder="Enter Keyword or Part Number" />  
                              <button className="search__button search__button--start" type="button" style={{marginLeft:"0"}}>
                                 <span className="search__button-icon">
                                   <img src={CarImg} alt="search" />
                                 </span>
                                 <span className="search__button-title">Select Vehicle</span>
                              </button>
                              <button className="search__button search__button--end" type="submit">
                                 <span className="search__button-icon">
                                    <svg width="20" height="20">
                                       <path d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
                                       c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
                                       c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"></path>
                                    </svg>
                                 </span>
                              </button>
                             
                              <div className="search__dropdown search__dropdown--suggestions suggestions">
                                 <div className="suggestions__group">
                                    <div className="suggestions__group-title">Products</div>
                                    <div className="suggestions__group-content">
                                       <a className="suggestions__item suggestions__product" href="">
                                          <div className="suggestions__product-image image image--type--product">
                                             <div className="image__body">
                                                {/* <img className="image__tag" src={product1} alt="" /> */}
      
                                             </div>
                                          </div>
                                          <div className="suggestions__product-info">
                                             <div className="suggestions__product-name">Brandix Brake Kit BDX-750Z370-S</div>
                                             <div className="suggestions__product-rating">
                                                <div className="suggestions__product-rating-stars">
                                                   <div className="rating">
                                                      <div className="rating__body">
                                                         <div className="rating__star rating__star--active"></div>
                                                         <div className="rating__star rating__star--active"></div>
                                                         <div className="rating__star rating__star--active"></div>
                                                         <div className="rating__star rating__star--active"></div>
                                                         <div className="rating__star rating__star--active"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="suggestions__product-rating-label">5 on 22 reviews</div>
                                             </div>
                                          </div>
                                          <div className="suggestions__product-price">$224.00</div>
                                       </a>
                                       <a className="suggestions__item suggestions__product" href="">
                                          <div className="suggestions__product-image image image--type--product">
                                             <div className="image__body">
                                                {/* <img className="image__tag" src="images/products/product-3-40x40.jpg" alt=""> */}
      
                                             </div>
                                          </div>
                                          <div className="suggestions__product-info">
                                             <div className="suggestions__product-name">Left Headlight Of Brandix Z54</div>
                                             <div className="suggestions__product-rating">
                                                <div className="suggestions__product-rating-stars">
                                                   <div className="rating">
                                                      <div className="rating__body">
                                                         <div className="rating__star rating__star--active"></div>
                                                         <div className="rating__star rating__star--active"></div>
                                                         <div className="rating__star rating__star--active"></div>
                                                         <div className="rating__star"></div>
                                                         <div className="rating__star"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="suggestions__product-rating-label">3 on 14 reviews</div>
                                             </div>
                                          </div>
                                          <div className="suggestions__product-price">$349.00</div>
                                       </a>
                                       <a className="suggestions__item suggestions__product" href="">
                                          <div className="suggestions__product-image image image--type--product">
                                             <div className="image__body">
                                                {/* <img className="image__tag" src="images/products/product-4-40x40.jpg" alt=""> */}
      
                                             </div>
                                          </div>
                                          <div className="suggestions__product-info">
                                             <div className="suggestions__product-name">Glossy Gray 19" Aluminium Wheel AR-19</div>
                                             <div className="suggestions__product-rating">
                                                <div className="suggestions__product-rating-stars">
                                                   <div className="rating">
                                                      <div className="rating__body">
                                                         <div className="rating__star rating__star--active"></div>
                                                         <div className="rating__star rating__star--active"></div>
                                                         <div className="rating__star rating__star--active"></div>
                                                         <div className="rating__star rating__star--active"></div>
                                                         <div className="rating__star"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="suggestions__product-rating-label">4 on 26 reviews</div>
                                             </div>
                                          </div>
                                          <div className="suggestions__product-price">$589.00</div>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="suggestions__group">
                                    <div className="suggestions__group-title">Categories</div>
                                    <div className="suggestions__group-content"><a className="suggestions__item suggestions__category" href="">Headlights &amp; Lighting</a> <a className="suggestions__item suggestions__category" href="">Fuel System &amp; Filters</a> <a className="suggestions__item suggestions__category" href="">Body Parts &amp; Mirrors</a> <a className="suggestions__item suggestions__category" href="">Interior Accessories</a></div>
                                 </div>
                              </div>
                              <div className="search__dropdown search__dropdown--vehicle-picker vehicle-picker">
                                 <div className="search__dropdown-arrow"></div>
                                 <div className="vehicle-picker__panel vehicle-picker__panel--list vehicle-picker__panel--active" data-panel="list">
                                    <div className="vehicle-picker__panel-body">
                                       <div className="vehicle-picker__text">Select a vehicle to find exact fit parts</div>
                                       <div className="vehicles-list">
                                          <div className="vehicles-list__body">
                                             <label className="vehicles-list__item">
                                                <span className="vehicles-list__item-radio input-radio"><span className="input-radio__body">
                                                   {/* <input className="input-radio__input" name="header-vehicle" type="radio">  */}
                                                   <span className="input-radio__circle"></span> </span></span><span className="vehicles-list__item-info"><span className="vehicles-list__item-name">2011 Ford Focus S</span> <span className="vehicles-list__item-details">Engine 2.0L 1742DA L4 FI Turbo</span> </span>
                                                <button type="button" className="vehicles-list__item-remove">
                                                   <svg width="16" height="16">
                                                      <path d="M2,4V2h3V1h6v1h3v2H2z M13,13c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V5h10V13z"></path>
                                                   </svg>
                                                </button>
                                             </label>
                                             <label className="vehicles-list__item">
                                                <span className="vehicles-list__item-radio input-radio"><span className="input-radio__body">
                                                   {/* <input className="input-radio__input" name="header-vehicle" type="radio">  */}
                                                   <span className="input-radio__circle"></span> </span></span><span className="vehicles-list__item-info"><span className="vehicles-list__item-name">2019 Audi Q7 Premium</span> <span className="vehicles-list__item-details">Engine 3.0L 5626CC L6 QK</span> </span>
                                                <button type="button" className="vehicles-list__item-remove">
                                                   <svg width="16" height="16">
                                                      <path d="M2,4V2h3V1h6v1h3v2H2z M13,13c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V5h10V13z"></path>
                                                   </svg>
                                                </button>
                                             </label>
                                          </div>
                                       </div>
                                       <div className="vehicle-picker__actions"><button type="button" className="btn btn-primary btn-sm" data-to-panel="form">Add A Vehicle</button></div>
                                    </div>
                                 </div>
                                 <div className="vehicle-picker__panel vehicle-picker__panel--form" data-panel="form">
                                    <div className="vehicle-picker__panel-body">
                                       <div className="vehicle-form vehicle-form--layout--search">
                                          <div className="vehicle-form__item vehicle-form__item--select">
                                             <select className="form-control form-control-select2 select2-hidden-accessible" aria-label="Year" data-select2-id="1" tabindex="-1" aria-hidden="true">
                                                <option value="none" data-select2-id="3">Select Year</option>
                                                <option>2010</option>
                                                <option>2011</option>
                                                <option>2012</option>
                                                <option>2013</option>
                                                <option>2014</option>
                                                <option>2015</option>
                                                <option>2016</option>
                                                <option>2017</option>
                                                <option>2018</option>
                                                <option>2019</option>
                                                <option>2020</option>
                                             </select>
                                             <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2"><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-8z7n-container"><span className="select2-selection__rendered" id="select2-8z7n-container" role="textbox" aria-readonly="true" title="Select Year">Select Year</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                          </div>
                                          <div className="vehicle-form__item vehicle-form__item--select">
                                             <select className="form-control form-control-select2 select2-hidden-accessible" aria-label="Brand" disabled="" data-select2-id="4" tabindex="-1" aria-hidden="true">
                                                <option value="none" data-select2-id="6">Select Brand</option>
                                                <option>Audi</option>
                                                <option>BMW</option>
                                                <option>Ferrari</option>
                                                <option>Ford</option>
                                                <option>KIA</option>
                                                <option>Nissan</option>
                                                <option>Tesla</option>
                                                <option>Toyota</option>
                                             </select>
                                             <span className="select2 select2-container select2-container--default select2-container--disabled" dir="ltr" data-select2-id="5"><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="true" aria-labelledby="select2-34k4-container"><span className="select2-selection__rendered" id="select2-34k4-container" role="textbox" aria-readonly="true" title="Select Brand">Select Brand</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                          </div>
                                          <div className="vehicle-form__item vehicle-form__item--select">
                                             <select className="form-control form-control-select2 select2-hidden-accessible" aria-label="Model" disabled="" data-select2-id="7" tabindex="-1" aria-hidden="true">
                                                <option value="none" data-select2-id="9">Select Model</option>
                                                <option>Explorer</option>
                                                <option>Focus S</option>
                                                <option>Fusion SE</option>
                                                <option>Mustang</option>
                                             </select>
                                             <span className="select2 select2-container select2-container--default select2-container--disabled" dir="ltr" data-select2-id="8"><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="true" aria-labelledby="select2-m2ww-container"><span className="select2-selection__rendered" id="select2-m2ww-container" role="textbox" aria-readonly="true" title="Select Model">Select Model</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                          </div>
                                          <div className="vehicle-form__item vehicle-form__item--select">
                                             <select className="form-control form-control-select2 select2-hidden-accessible" aria-label="Engine" disabled="" data-select2-id="10" tabindex="-1" aria-hidden="true">
                                                <option value="none" data-select2-id="12">Select Engine</option>
                                                <option>Gas 1.6L 125 hp AT/L4</option>
                                                <option>Diesel 2.5L 200 hp AT/L5</option>
                                                <option>Diesel 3.0L 250 hp MT/L5</option>
                                             </select>
                                             <span className="select2 select2-container select2-container--default select2-container--disabled" dir="ltr" data-select2-id="11"><span className="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="true" aria-labelledby="select2-1vow-container"><span class="select2-selection__rendered" id="select2-1vow-container" role="textbox" aria-readonly="true" title="Select Engine">Select Engine</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                          </div>
                                          <div className="vehicle-form__divider">Or</div>
                                          <div className="vehicle-form__item">
                                             {/* <input type="text" class="form-control" placeholder="Enter VIN number" aria-label="VIN number"> */}
      
                                          </div>
                                       </div>
                                       <div className="vehicle-picker__actions">
                                          <div className="search__car-selector-link"><a href="" data-to-panel="list">Back to vehicles list</a></div>
                                          <button type="button" className="btn btn-primary btn-sm" disabled="disabled">Add A Vehicle</button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                     <div className="header__indicators">
                        <div className="indicator">
                           <a href="wishlist.html" className="indicator__button">
                              <span className="indicator__icon">
                                 <img src={HeartImg} />
                                 <span className="indicator__counter" >0</span>
                              </span>
                           </a>
                        </div>
                        <div className="indicator indicator--trigger--click">
                           <a href="account-login.html" className="indicator__button" style={{textDecoration:'none'}}>
                              <span className="indicator__icon">
                                 <img src={PersonImg} />
                              </span>
                              <span className="indicator__title" style={{textDecoration:'none'}}>Hello, Log In</span> <span className="indicator__value">My Account</span>
                           </a>
                           
                        </div>
                        <div className="indicator indicator--trigger--click">
                           <a href="cart.html" className="indicator__button" style={{textDecoration:'none'}}>
                              <span className="indicator__icon" >
                                 <img src={CartImg} />
                                 <span className="indicator__counter" style={{backgroundColor:'#52eaf0'}}>7</span>
                              </span>
                              <span className="indicator__title">Shopping Cart</span> <span className="indicator__value">$1468.60</span>
                           </a>
                          
                          
                        </div>
                     </div>
                  </div>
               </header>
      
               
        </>
    )
}

export default Header;