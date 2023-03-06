import paymentPng from "../../assets/payments.png";
import freeDelivery from "../../assets/svg/free-delivery.svg";
import paymentSecurity from "../../assets/svg/payment-security.svg";
import tag from "../../assets/svg/tag.svg";
import Hours24 from "../../assets/svg/24-hours.svg";

function Footer() {
    return(
        <>
       <div class="block-space block-space--layout--divider-nl"></div>
                <div class="block-features block block-features--layout--bottom-strip">
                    <div class="container">
                        <ul class="block-features__list">
                            <li class="block-features__item">
                                <div class="block-features__item-icon">
                                    <img src={freeDelivery} />
                                </div>
                                <div class="block-features__item-info">
                                    <div class="block-features__item-title">Free Shipping</div>
                                    <div class="block-features__item-subtitle">For orders from $50</div>
                                </div>
                            </li>
                            <li class="block-features__item">
                                <div class="block-features__item-icon">
                                <img src={Hours24} />
                                </div>
                                <div class="block-features__item-info">
                                    <div class="block-features__item-title">Support 24/7</div>
                                    <div class="block-features__item-subtitle">Call us anytime</div>
                                </div>
                            </li>
                            <li class="block-features__item">
                                <div class="block-features__item-icon">
                                <img src={paymentSecurity} />
                                </div>
                                <div class="block-features__item-info">
                                    <div class="block-features__item-title">100% Safety</div>
                                    <div class="block-features__item-subtitle">Only secure payments</div>
                                </div>
                            </li>
                            <li class="block-features__item">
                                <div class="block-features__item-icon">
                                <img src={tag} />
                                </div>
                                <div class="block-features__item-info">
                                    <div class="block-features__item-title">Hot Offers</div>
                                    <div class="block-features__item-subtitle">Discounts up to 90%</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
         



                <footer class="site__footer">
                <div class="site-footer">
                    <div class="decor site-footer__decor decor--type--bottom">
                        <div class="decor__body">
                            <div class="decor__start"></div>
                            <div class="decor__end"></div>
                            <div class="decor__center"></div>
                        </div>
                    </div>
                    <div class="site-footer__widgets">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 col-xl-4">
                                    <div class="site-footer__widget footer-contacts">
                                        <h5 class="footer-contacts__title">Contact Us</h5>
                                        <div class="footer-contacts__text">Hi, we are always open for cooperation and suggestions,<br/>contact us in one of the ways of below</div>
                                        <address class="footer-contacts__contacts">
                                            <dl>
                                                <dt>Phone Number</dt>
                                                <dd>089252 97807</dd>
                                            </dl>
                                            <dl>
                                                <dt>Email Address</dt>
                                                <dd>careers@uitotxsolution.com</dd>
                                            </dl>
                                            <dl>
                                                <dt>Our Location</dt>
                                                <dd>102,Athipalayam Rd,<br/>Ramakrishnapuram<br/>Chinnavedampatti<br/>Coimbatore,Tamilnadu<br/>641049</dd>
                                            </dl>
                                            <dl>
                                                <dt>Working Hours</dt>
                                                <dd>Mon-Fir 10:00pm-6:00pm</dd>
                                            </dl>
                                        </address>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3 col-xl-2">
                                    <div class="site-footer__widget footer-links">
                                        <h5 class="footer-links__title">Information</h5>
                                        <ul class="footer-links__list">
                                            <li class="footer-links__item">
                                                <a href="" class="footer-links__link" style={{textDecoration:"none"}}>About Us</a>
                                            </li>
                                            <li class="footer-links__item">
                                                <a href="" class="footer-links__link"  style={{textDecoration:"none"}}>Delivery Information</a>
                                            </li>
                                            <li class="footer-links__item">
                                                <a href="" class="footer-links__link"  style={{textDecoration:"none"}}>Privacy Policy</a>
                                            </li>
                                            <li class="footer-links__item">
                                                <a href="" class="footer-links__link"  style={{textDecoration:"none"}}>Brands</a>
                                            </li>
                                            <li class="footer-links__item">
                                                <a href="" class="footer-links__link"  style={{textDecoration:"none"}}>Contact Us</a>
                                            </li>
                                            <li class="footer-links__item">
                                                <a href="" class="footer-links__link"  style={{textDecoration:"none"}}>Returns</a>
                                            </li>
                                            <li class="footer-links__item">
                                                <a href="" class="footer-links__link"  style={{textDecoration:"none"}}>Site Map</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3 col-xl-2">
                                    <div class="site-footer__widget footer-links">
                                        <h5 class="footer-links__title">My Account</h5>
                                        <ul class="footer-links__list">
                                            <li class="footer-links__item">
                                                <a href="" class="footer-links__link"  style={{textDecoration:"none"}}>Store Location</a>
                                            </li>
                                            <li class="footer-links__item">
                                                <a href="" class="footer-links__link"  style={{textDecoration:"none"}}>Order History</a>
                                            </li>
                                            <li class="footer-links__item">
                                                <a href="" class="footer-links__link"  style={{textDecoration:"none"}}>Wish List</a>
                                            </li>
                                            <li class="footer-links__item">
                                                <a href="" class="footer-links__link"  style={{textDecoration:"none"}}>Newsletter</a>
                                            </li>
                                            <li class="footer-links__item">
                                                <a href="" class="footer-links__link"  style={{textDecoration:"none"}}>Specials</a>
                                            </li>
                                            <li class="footer-links__item">
                                                <a href="" class="footer-links__link"  style={{textDecoration:"none"}}>Gift Certificates</a>
                                            </li>
                                            <li class="footer-links__item">
                                                <a href="" class="footer-links__link"  style={{textDecoration:"none"}}>Affiliate</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-xl-4">
                                    <div class="site-footer__widget footer-newsletter">
                                        <h5 class="footer-newsletter__title">Newsletter</h5>
                                        <div class="footer-newsletter__text">Enter your email address below to subscribe to our newsletter and keep up to date with discounts and special offers.</div>
                                        <form action="" class="footer-newsletter__form">
                                            <label class="sr-only" for="footer-newsletter-address">Email Address</label>
                                            <input type="text" class="footer-newsletter__form-input" id="footer-newsletter-address" placeholder="Email Address..." />
                                            <button class="footer-newsletter__form-button" style={{backgroundColor:"#63db8f"}}>Subscribe</button>
                                        </form>
                                        <div class="footer-newsletter__text footer-newsletter__text--social">Follow us on social networks</div>
                                        <div class="footer-newsletter__social-links social-links">
                                            <ul class="social-links__list">
                                                <li class="social-links__item social-links__item--facebook">
                                                    <a  target="_blank"  style={{textDecoration:"none"}}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>
                                                    </a>
                                                </li>
                                                <li class="social-links__item social-links__item--twitter">
                                                    <a  target="_blank"  style={{textDecoration:"none"}}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg>
                                                    </a>
                                                </li>
                                                <li class="social-links__item social-links__item--youtube">
                                                    <a  target="_blank"  style={{textDecoration:"none"}}>
                                                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
</svg>
                                                    </a>
                                                </li>
                                                <li class="social-links__item social-links__item--instagram">
                                                    <a  target="_blank"  style={{textDecoration:"none"}}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>
                                                    </a>
                                                </li>
                                                <li class="social-links__item social-links__item--rss">
                                                    <a  target="_blank"  style={{textDecoration:"none"}}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-rss-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2zm0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2zm.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="site-footer__bottom">
                        <div class="container">
                            <div class="site-footer__bottom-row">
                                <div class="site-footer__copyright">
                                  
                                    Powered by <span style={{color:"#fff"}}>Reactjs/Next.js</span> — Designed by <span  style={{color:"#fff"}}>UITOUX Solutions</span>
                                
                                </div>
                                <div class="site-footer__payments">
                                    <img src={paymentPng} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
      
        </>
    )
}

export default Footer;