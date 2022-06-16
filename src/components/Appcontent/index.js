import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppContent() {
  return (
    <div id="AppContent">
      <div id="wrapHomePage">
        <div id="fullpage">
          <div className="section">
            <div className="section-content">
              <h1 className="section-content-header">
                Giải pháp đơn giản để tổ chức giải đấu thể thao
              </h1>
              {/* <div className="section-content-action">
                <Button variant="info">
                  <Link to="/league/create-tournament">Tạo giải đấu</Link>
                </Button>
                <Button variant="info">
                  <Link to="/league">Tìm giải đấu</Link>
                </Button>
                <Button variant="info">
                  <Link to="/competitor/create">Tạo đội</Link>
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
