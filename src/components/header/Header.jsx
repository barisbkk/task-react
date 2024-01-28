import { useState, useEffect } from "react";
import "./header.scss";
import cities from "../../helper/data";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [showList, setShowList] = useState(false);

  const handleChange = (e) => {
    let searchText = e.target.value;
    setSearchText(searchText);
    setShowList(true);
  };

  const handleClick = (item) => {
    setSearchText(item);
    setShowList(false);
  };

  const handlePageClick = (e) => {
    // Tıklanan element öneri listesi veya searchbar değilse, öneri listesini kapat
    if (
      !e.target.classList.contains("lists") &&
      !e.target.classList.contains("search-input")
    ) {
      setShowList(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handlePageClick);

    return () => {
      document.removeEventListener("click", handlePageClick);
    };
  }, []);

  return (
    <header>
      <div className="background">
        <h1>Size Nasıl Yardımcı Olabiliriz?</h1>
        <input
          type="text"
          value={searchText}
          placeholder="Lütfen Anahtar Kelime Giriniz. Ör: email problemi"
          onChange={handleChange}
        />
        {showList && (
          <ul className="lists">
            {cities
              .filter((u) =>
                u.toLowerCase().startsWith(searchText.toLowerCase())
              )
              .map((item) => (
                <li key={item} onClick={() => handleClick(item)}>
                  {item}
                </li>
              ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
