import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { FiMenu, FiHome, FiCalendar, FiSettings, FiLogOut, FiTool } from 'react-icons/fi';

import logo from '/logo.png';
import categoriaImage from '/categoria.png';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard">
      <aside className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <FiMenu />
        </button>
        <div className={`logo ${isSidebarOpen ? 'logo-open' : 'logo-closed'}`}>
          <Link to="/dashboard" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav>
          <ul className="sidebar-menu">
            <li>
              <Link to="/dashboard" className="sidebar-link">
                {!isSidebarOpen ? <FiHome className="sidebar-icon" /> : <FiHome className="sidebar-icon-large" />}
                {!isSidebarOpen && <span> Início</span>}
              </Link>
            </li>
            <li>
              <Link to="/agendamentos" className="sidebar-link">
                {!isSidebarOpen ? <FiCalendar className="sidebar-icon" /> : <FiCalendar className="sidebar-icon-large" />}
                {!isSidebarOpen && <span>Agendamentos</span>}
              </Link>
            </li>
            <li>
              <Link to="/configuracao" className="sidebar-link">
                {!isSidebarOpen ? <FiSettings className="sidebar-icon" /> : <FiSettings className="sidebar-icon-large" />}
                {!isSidebarOpen && <span>Barbearia</span>}
              </Link>
            </li>
            <h1>ㅤ</h1>
            <h1>ㅤ</h1>
            <h1>ㅤ</h1>
            <h1>ㅤ</h1>
            <h1>ㅤ</h1>
            <h8>ㅤ</h8>
            <li>
              <Link to="/" className="sidebar-link">
                {!isSidebarOpen ? <FiLogOut className="sidebar-icon" /> : <FiLogOut className="sidebar-icon-large" />}
                {!isSidebarOpen && <span>Sair</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={`content ${isSidebarOpen ? 'content-open' : ''}`}>
        <h1 className="dashboard-title">Início</h1>
        <div className="container2">
          <div className="row">
            <div className="col-md-3">
              <div className="info-card bg-dark">
                <h3>Total de Agendamentos</h3>
                <p>213</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-card bg-dark">
                <h3>Conversas do WhatsApp</h3>
                <p>13</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-card bg-dark">
                <h3>Conversas do Facebook</h3>
                <p>45</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-card bg-dark">
                <h3>Conversas do Telegram</h3>
                <p>30</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="info-card bg-dark">
                <h3>Últimos Agendamentos</h3>
                <table className="table table-dark">
                  <thead>
                    <tr>
                      <th>Nome do Cliente</th>
                      <th>Data</th>
                      <th>Serviço</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Vinicius Soares</td>
                      <td>10/05/2023</td>
                      <td>corte de Cabelo e barba</td>
                    </tr>
                    <tr>
                      <td>Gabriel Pedrosa</td>
                      <td>08/05/2023</td>
                      <td>Corte de Cabelo</td>
                    </tr>
                    <tr>
                      <td>Victor Santos</td>
                      <td>05/05/2023</td>
                      <td>barba</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="info-card bg-dark">
                <h5>Top Produtos ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤJulho 2023</h5>
                <table className="table table-dark">
                  <thead>
                    <tr>
                      <th>Cod</th>
                      <th>Produto</th>
                      <th>Agendamentos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>73</td>
                      <td>Corte de cabelo</td>
                      <td>87</td>
                    </tr>
                    <tr>
                      <td>43</td>
                      <td>Cabelo e bara</td>
                      <td>45</td>
                    </tr>
                    <tr>
                      <td>103</td>
                      <td>Barba</td>
                      <td>24</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>Penteado</td>
                      <td>09</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-card bg-dark">
                <h5>ㅤㅤㅤㅤㅤㅤㅤVendas por Categoria</h5>
                <img src={categoriaImage} alt="Categoria" className="categoria-image" />
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Dashboard;
