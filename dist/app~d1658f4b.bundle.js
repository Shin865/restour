(()=>{"use strict";var n,A={249:(n,A,e)=>{e.d(A,{A:()=>o});var t=e(354),i=e.n(t),a=e(314),r=e.n(a)()(i());r.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500);"]),r.push([n.id,'* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: "Roboto", sans-serif;\n  font-size: 12px;\n  color: #424242;\n}\n\n.header {\n  min-height: 80px;\n  transition: min-height 0.3s;\n  padding: 10px;\n  width: 100%;\n  text-align: center;\n  position: sticky;\n  top: 0;\n\n  background-color: #363737;\n  display: flex;\n  align-items: center;\n}\n\n.header a {\n  text-decoration: none;\n  padding: 0.5rem 1.5rem;\n  border-radius: 99px;\n  font-size: 20px;\n  font-weight: 500;\n  color: white;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  display: flex;\n  margin-right: 1%;\n}\n.header button {\n  padding: 0.5rem 1.5rem;\n  border-radius: 99px;\n  font-size: 20px;\n\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  display: flex;\n}\n\n.header_title a:hover {\n  border: 3px solid #f2f2f2;\n  background-color: transparent;\n\n  color: white;\n}\n\n.nav {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.nav li {\n  list-style-type: none;\n}\n\n.nav .nav_item {\n  box-sizing: border-box;\n  display: inline-block;\n  text-align: center;\n  line-height: 25px;\n  text-transform: uppercase;\n}\n\n.nav li a {\n  padding: 1rem 1.5rem;\n  border-radius: 99px;\n  width: 100%;\n  text-decoration: none;\n  font-weight: 500;\n\n  transition: all 0.2s ease-in-out;\n}\n\n.nav li:hover a {\n  border: 3px solid #f2f2f2;\n  background-color: transparent;\n\n  color: white;\n}\n\n.hero {\n  min-height: 380px;\n}\n\n.hero img {\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n  object-position: center center;\n}\n\n.hero-inner {\n  color: #fff;\n  width: 100%;\n  height: 50%;\n  padding: 0 16px;\n  margin-top: 50px;\n  position: absolute;\n  top: 20%;\n  z-index: 1;\n}\n\n.hero-title {\n  font-size: 48px;\n  font-weight: 700;\n  text-align: center;\n  font-family: cursive;\n}\n\n.hero-tagline {\n  font-size: 24px;\n  text-align: center;\n  font-family: \'Open Sans\', sans-serif;\n}\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.content {\n  padding: 32px;\n}\n\n.boarding {\n  background-color: #f7f7f7;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  padding: 60px;\n}\n\n.headline_figure {\n  width: 100%;\n}\n\n.headline_figure img {\n  width: 100%;\n  max-height: 90%;\n}\n\n.headline_figure figcaption {\n  text-align: center;\n  color: #666666;\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 8px;\n}\n\n.headline_content {\n  width: 100%;\n  padding: 16px 0;\n}\n\n.headline_title {\n  font-size: 24px;\n  font-weight: 500;\n}\n\n.headline_description {\n  font-size: 12px;\n  margin-top: 12px;\n}\n\n.headline_button {\n  font-family: "Roboto", sans-serif;\n  text-transform: uppercase;\n  margin-top: 24px;\n  cursor: pointer;\n  padding: 1rem 1.5rem;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  background-color: #363737;\n  transition: opacity 0.3s;\n}\n\n.headline_button:hover {\n  opacity: 0.8;\n}\n\n.heading {\n  width: 100%;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.heading_title {\n  font-size: 24px;\n  font-weight: 500;\n}\n\n.restaurant-item {\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.restaurant-item_header {\n  position: relative;\n}\n\n.restaurant-item .restaurant-item_header .restaurant-item_thumbnail {\n  width: 100%;\n  height: 250px;\n}\n\n.restaurant-item .restaurant-item_header .restaurant-item_rating {\n  position: absolute;\n  padding: 10px;\n  bottom: 20px;\n  left: 0;\n  display: inline-block;\n  background-color: black;\n  color: white;\n}\n\n.restaurant-item .restaurant-item_content {\n  padding: 16px;\n  background-color: #f7f7f7;\n}\n\n.restaurant-item .restaurant-item_content h3 a {\n  padding: 1rem 1rem;\n  color: #363737;\n  text-decoration: none;\n}\n\n.restaurant-item .restaurant-item_content h3 a:hover {\n  color: #db0000;\n}\n\n.restaurant-item .restaurant-item_content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n}\n\n.restaurant_thumbnail {\n  width: 100%;\n}\n\n.restaurant_thumbnail img {\n  width: 100%;\n}\n\n.restaurant_info {\n  padding: 16px;\n  text-align: left;\n}\n\nfooter {\n  padding: 2rem;\n  color: #fff;\n  position: absolute;\n  width: 100%;\n  background-color: #363737;\n  text-align: center;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: #bf1722;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.input_section {\n  background-color: #f7f7f7;\n  align-items: center;\n  box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  padding: 20px;\n  margin-top: 10px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\n.input_section > form > button {\n  background-color: #363737;\n  color: white;\n  border: 0;\n  border-radius: 5px;\n  display: block;\n  width: 100%;\n  padding: 1rem 1rem;\n  cursor: pointer;\n  margin-top: 10px;\n}\n\n.input_section > form > .input > input {\n  display: block;\n  width: 100%;\n  padding: 1rem 1rem;\n  border-radius: 5px;\n  margin-bottom: 20px;\n}\n\n.input_section > form > .input > textarea {\n  display: block;\n  width: 100%;\n  height: 100px;\n  padding: 8px;\n  border-radius: 5px;\n}\n\n.input_section > form > .input > label {\n  font-size: 1rem;\n  margin-bottom: 10px;\n  color: #363737;\n  font-weight: bold;\n}\n\n.list {\n  background-color: #f7f7f7;\n  align-items: center;\n  box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-top: 10px;\n  padding: 30px;\n  margin-top: 10px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n',"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:['@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: "Roboto", sans-serif;\n  font-size: 12px;\n  color: #424242;\n}\n\n.header {\n  min-height: 80px;\n  transition: min-height 0.3s;\n  padding: 10px;\n  width: 100%;\n  text-align: center;\n  position: sticky;\n  top: 0;\n\n  background-color: #363737;\n  display: flex;\n  align-items: center;\n}\n\n.header a {\n  text-decoration: none;\n  padding: 0.5rem 1.5rem;\n  border-radius: 99px;\n  font-size: 20px;\n  font-weight: 500;\n  color: white;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  display: flex;\n  margin-right: 1%;\n}\n.header button {\n  padding: 0.5rem 1.5rem;\n  border-radius: 99px;\n  font-size: 20px;\n\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  display: flex;\n}\n\n.header_title a:hover {\n  border: 3px solid #f2f2f2;\n  background-color: transparent;\n\n  color: white;\n}\n\n.nav {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.nav li {\n  list-style-type: none;\n}\n\n.nav .nav_item {\n  box-sizing: border-box;\n  display: inline-block;\n  text-align: center;\n  line-height: 25px;\n  text-transform: uppercase;\n}\n\n.nav li a {\n  padding: 1rem 1.5rem;\n  border-radius: 99px;\n  width: 100%;\n  text-decoration: none;\n  font-weight: 500;\n\n  transition: all 0.2s ease-in-out;\n}\n\n.nav li:hover a {\n  border: 3px solid #f2f2f2;\n  background-color: transparent;\n\n  color: white;\n}\n\n.hero {\n  min-height: 380px;\n}\n\n.hero img {\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n  object-position: center center;\n}\n\n.hero-inner {\n  color: #fff;\n  width: 100%;\n  height: 50%;\n  padding: 0 16px;\n  margin-top: 50px;\n  position: absolute;\n  top: 20%;\n  z-index: 1;\n}\n\n.hero-title {\n  font-size: 48px;\n  font-weight: 700;\n  text-align: center;\n  font-family: cursive;\n}\n\n.hero-tagline {\n  font-size: 24px;\n  text-align: center;\n  font-family: \'Open Sans\', sans-serif;\n}\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.content {\n  padding: 32px;\n}\n\n.boarding {\n  background-color: #f7f7f7;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  padding: 60px;\n}\n\n.headline_figure {\n  width: 100%;\n}\n\n.headline_figure img {\n  width: 100%;\n  max-height: 90%;\n}\n\n.headline_figure figcaption {\n  text-align: center;\n  color: #666666;\n  font-size: 13px;\n  font-weight: 400;\n  margin-top: 8px;\n}\n\n.headline_content {\n  width: 100%;\n  padding: 16px 0;\n}\n\n.headline_title {\n  font-size: 24px;\n  font-weight: 500;\n}\n\n.headline_description {\n  font-size: 12px;\n  margin-top: 12px;\n}\n\n.headline_button {\n  font-family: "Roboto", sans-serif;\n  text-transform: uppercase;\n  margin-top: 24px;\n  cursor: pointer;\n  padding: 1rem 1.5rem;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  background-color: #363737;\n  transition: opacity 0.3s;\n}\n\n.headline_button:hover {\n  opacity: 0.8;\n}\n\n.heading {\n  width: 100%;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.heading_title {\n  font-size: 24px;\n  font-weight: 500;\n}\n\n.restaurant-item {\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.restaurant-item_header {\n  position: relative;\n}\n\n.restaurant-item .restaurant-item_header .restaurant-item_thumbnail {\n  width: 100%;\n  height: 250px;\n}\n\n.restaurant-item .restaurant-item_header .restaurant-item_rating {\n  position: absolute;\n  padding: 10px;\n  bottom: 20px;\n  left: 0;\n  display: inline-block;\n  background-color: black;\n  color: white;\n}\n\n.restaurant-item .restaurant-item_content {\n  padding: 16px;\n  background-color: #f7f7f7;\n}\n\n.restaurant-item .restaurant-item_content h3 a {\n  padding: 1rem 1rem;\n  color: #363737;\n  text-decoration: none;\n}\n\n.restaurant-item .restaurant-item_content h3 a:hover {\n  color: #db0000;\n}\n\n.restaurant-item .restaurant-item_content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n}\n\n.restaurant_thumbnail {\n  width: 100%;\n}\n\n.restaurant_thumbnail img {\n  width: 100%;\n}\n\n.restaurant_info {\n  padding: 16px;\n  text-align: left;\n}\n\nfooter {\n  padding: 2rem;\n  color: #fff;\n  position: absolute;\n  width: 100%;\n  background-color: #363737;\n  text-align: center;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: #bf1722;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n  z-index: 1000;\n}\n\n.input_section {\n  background-color: #f7f7f7;\n  align-items: center;\n  box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  padding: 20px;\n  margin-top: 10px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\n.input_section > form > button {\n  background-color: #363737;\n  color: white;\n  border: 0;\n  border-radius: 5px;\n  display: block;\n  width: 100%;\n  padding: 1rem 1rem;\n  cursor: pointer;\n  margin-top: 10px;\n}\n\n.input_section > form > .input > input {\n  display: block;\n  width: 100%;\n  padding: 1rem 1rem;\n  border-radius: 5px;\n  margin-bottom: 20px;\n}\n\n.input_section > form > .input > textarea {\n  display: block;\n  width: 100%;\n  height: 100px;\n  padding: 8px;\n  border-radius: 5px;\n}\n\n.input_section > form > .input > label {\n  font-size: 1rem;\n  margin-bottom: 10px;\n  color: #363737;\n  font-weight: bold;\n}\n\n.list {\n  background-color: #f7f7f7;\n  align-items: center;\n  box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-top: 10px;\n  padding: 30px;\n  margin-top: 10px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n'],sourceRoot:""}]);const o=r},936:(n,A,e)=>{e.d(A,{A:()=>o});var t=e(354),i=e.n(t),a=e(314),r=e.n(a)()(i());r.push([n.id,".restaurant {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  margin-top: 10px;\n  padding: 30px;\n}\n\n@media screen and (max-width: 650px) {\n  .header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n\n  .header_title,\n  .nav_list {\n    padding: 10px;\n  }\n\n  .hero-title,\n  .hero-tagline {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  #drawer {\n    padding: 0.5rem 0.5rem;\n    position: absolute;\n    margin-top: 123px;\n    left: 0;\n\n    -webkit-transform: translate(-300px, 0);\n    transform: translate(-300px, 0);\n    transition: transform 0.3s ease;\n    background-color: #363737;\n  }\n\n  #drawer.open {\n    transform: translate(0, 0);\n  }\n\n  #drawer a {\n    text-decoration: none;\n    font-size: 20px;\n    color: white;\n  }\n\n  .nav ul {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  .nav .nav_item {\n    display: list-item;\n    margin-bottom: 10px;\n    text-align: left;\n    padding: 1rem 1rem;\n  }\n}\n\n@media screen and (min-width: 650.1px) {\n  .nav ul {\n    padding-left: 0;\n    display: flex;\n    margin-right: 1%;\n  }\n  #menu {\n    display: none;\n  }\n  .header_menu {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 455px) {\n  .headline_content {\n    padding: 16px 16px;\n  }\n\n  .headline_title {\n    font-size: 28px;\n  }\n\n  .headline_description {\n    font-size: 16px;\n  }\n}\n\n@media screen and (min-width: 500px) {\n  .header_menu {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 650px) {\n  .headline_content {\n    margin: 0 auto;\n    max-width: 650px;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  .headline {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .headline_content {\n    padding: 16px 32px;\n  }\n}\n","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,4DAA4D;EAC5D,SAAS;EACT,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;EACpB;;EAEA;;IAEE,aAAa;EACf;;EAEA;;IAEE,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,OAAO;;IAEP,uCAAuC;IACvC,+BAA+B;IAC/B,+BAA+B;IAC/B,yBAAyB;EAC3B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,qBAAqB;IACrB,eAAe;IACf,YAAY;EACd;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;EACX;;EAEA;IACE,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,eAAe;IACf,aAAa;IACb,gBAAgB;EAClB;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,cAAc;IACd,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,aAAa;IACb,8BAA8B;EAChC;;EAEA;IACE,kBAAkB;EACpB;AACF",sourcesContent:[".restaurant {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  margin-top: 10px;\n  padding: 30px;\n}\n\n@media screen and (max-width: 650px) {\n  .header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }\n\n  .header_title,\n  .nav_list {\n    padding: 10px;\n  }\n\n  .hero-title,\n  .hero-tagline {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  #drawer {\n    padding: 0.5rem 0.5rem;\n    position: absolute;\n    margin-top: 123px;\n    left: 0;\n\n    -webkit-transform: translate(-300px, 0);\n    transform: translate(-300px, 0);\n    transition: transform 0.3s ease;\n    background-color: #363737;\n  }\n\n  #drawer.open {\n    transform: translate(0, 0);\n  }\n\n  #drawer a {\n    text-decoration: none;\n    font-size: 20px;\n    color: white;\n  }\n\n  .nav ul {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  .nav .nav_item {\n    display: list-item;\n    margin-bottom: 10px;\n    text-align: left;\n    padding: 1rem 1rem;\n  }\n}\n\n@media screen and (min-width: 650.1px) {\n  .nav ul {\n    padding-left: 0;\n    display: flex;\n    margin-right: 1%;\n  }\n  #menu {\n    display: none;\n  }\n  .header_menu {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 455px) {\n  .headline_content {\n    padding: 16px 16px;\n  }\n\n  .headline_title {\n    font-size: 28px;\n  }\n\n  .headline_description {\n    font-size: 16px;\n  }\n}\n\n@media screen and (min-width: 500px) {\n  .header_menu {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 650px) {\n  .headline_content {\n    margin: 0 auto;\n    max-width: 650px;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  .headline {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .headline_content {\n    padding: 16px 32px;\n  }\n}\n"],sourceRoot:""}]);const o=r},810:(n,A,e)=>{var t=e(72),i=e.n(t),a=e(825),r=e.n(a),o=e(659),d=e.n(o),p=e(56),l=e.n(p),s=e(540),E=e.n(s),B=e(113),C=e.n(B),g=e(249),x={};x.styleTagTransform=C(),x.setAttributes=l(),x.insert=d().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=E(),i()(g.A,x),g.A&&g.A.locals&&g.A.locals},47:(n,A,e)=>{var t=e(72),i=e.n(t),a=e(825),r=e.n(a),o=e(659),d=e.n(o),p=e(56),l=e.n(p),s=e(540),E=e.n(s),B=e(113),C=e.n(B),g=e(936),x={};x.styleTagTransform=C(),x.setAttributes=l(),x.insert=d().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=E(),i()(g.A,x),g.A&&g.A.locals&&g.A.locals}},e={};function t(n){var i=e[n];if(void 0!==i)return i.exports;var a=e[n]={id:n,exports:{}};return A[n](a,a.exports,t),a.exports}t.m=A,n=[],t.O=(A,e,i,a)=>{if(!e){var r=1/0;for(l=0;l<n.length;l++){for(var[e,i,a]=n[l],o=!0,d=0;d<e.length;d++)(!1&a||r>=a)&&Object.keys(t.O).every((n=>t.O[n](e[d])))?e.splice(d--,1):(o=!1,a<r&&(r=a));if(o){n.splice(l--,1);var p=i();void 0!==p&&(A=p)}}return A}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[e,i,a]},t.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return t.d(A,{a:A}),A},t.d=(n,A)=>{for(var e in A)t.o(A,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:A[e]})},t.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n={580:0};t.O.j=A=>0===n[A];var A=(A,e)=>{var i,a,[r,o,d]=e,p=0;if(r.some((A=>0!==n[A]))){for(i in o)t.o(o,i)&&(t.m[i]=o[i]);if(d)var l=d(t)}for(A&&A(e);p<r.length;p++)a=r[p],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(l)},e=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];e.forEach(A.bind(null,0)),e.push=A.bind(null,e.push.bind(e))})(),t.nc=void 0;var i=t.O(void 0,[39,608,738,74,720],(()=>t(956)));i=t.O(i)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map