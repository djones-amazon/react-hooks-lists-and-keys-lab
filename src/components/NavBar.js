import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const aTags = links.map((link) => {
    const currentHref = '#' + link;

    return (
      <a key={link} href={currentHref}>{link}</a>
    )
  });
  
  
  return (
    <nav>
      {aTags}
    </nav>
  )
}


export default NavBar;
