import React from "react";
import Navbar from "./Navbar";
import '../Style/Service.css'
import Footer from "./Footer";
import Service_list from "./Service_list";
import Service_View from "./Service_view";


function Service(){
    return (
        <>
        <Navbar />
           <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="Service_list">
              {Service_list.map((menuItem, key) => {
                return (
                  <Service_View
                    key={key}
                    name={menuItem.name}
                    price={menuItem.price}
                    image={menuItem.Image}
                  />
                );
              })}
              <Footer/>
            </div>
          </div>
          </>
        );
      }

export default Service