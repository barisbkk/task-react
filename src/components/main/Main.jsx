import "./main.scss";

const Main = () => {
  return (
    <main>
      <div className="badges">
        <div className="badge badge1">
          <i className="fa-solid fa-clipboard-check"> </i>
          <p>İstek Bildir</p>
        </div>
        <div className="badge badge2">
          <i className="fa-solid fa-circle-exclamation"></i>
          <p>Sorun Bildir</p>
        </div>
        <div className="badge badge3">
          <i className="fa-solid fa-book"></i>
          <p>Tüm Kayıtlarım</p>
        </div>
      </div>
      <div className="announcements">
        <h3>Duyurular</h3>
        <p>Buraya duyurular gelecek buraya duyurular gelecek</p>
        <p>Buraya duyurular gelecek</p>
      </div>
    </main>
  );
};

export default Main;
