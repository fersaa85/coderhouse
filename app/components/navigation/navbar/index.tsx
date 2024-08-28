import React from "react";
import Link from "next/link";
import styles from './styles.module.css'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <> 
      <div className={`w-full h-20 sticky top-0 border-0 border-solid border-b-2 border-sky-500 ${styles.bgWhite}`}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6">
              <li>
                <Link href="pages/about">
                  <p>About Us</p>
                </Link>
                <FontAwesomeIcon icon={faShoppingCart}   size="10x"/>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
                <i className="fa-solid fa-question-circle"></i>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;