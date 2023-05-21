import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Configuracao.css';

const Configuracao = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({
    name: '',
    cnpj: '',
    address: {
      street: '',
      city: '',
      country: ''
    },
    active: true
  });
  const [error, setError] = useState('');
  const [editingCnpj, setEditingCnpj] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCompany(prevCompany => ({
      ...prevCompany,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setNewCompany(prevCompany => ({
      ...prevCompany,
      address: {
        ...prevCompany.address,
        [name]: value
      }
    }));
  };

  const handleActiveChange = (e) => {
    const { checked } = e.target;
    setNewCompany(prevCompany => ({
      ...prevCompany,
      active: checked
    }));
  };

  const handleAddCompany = () => {
    const existingCompany = companies.find(company => company.cnpj === newCompany.cnpj);
    if (existingCompany) {
      setError('O CNPJ já está cadastrado.');
      return;
    }

    setCompanies(prevCompanies => [...prevCompanies, newCompany]);
    setNewCompany({
      name: '',
      cnpj: '',
      address: {
        street: '',
        city: '',
        country: ''
      },
      active: true
    });
    setError('');
  };

  const handleEditCompany = (cnpj) => {
    setEditingCnpj(cnpj);
    const companyToEdit = companies.find(company => company.cnpj === cnpj);
    setNewCompany(companyToEdit);
  };

  const handleUpdateCompany = () => {
    const updatedCompanies = companies.map(company => {
      if (company.cnpj === editingCnpj) {
        return newCompany;
      }
      return company;
    });

    setCompanies(updatedCompanies);
    setNewCompany({
      name: '',
      cnpj: '',
      address: {
        street: '',
        city: '',
        country: ''
      },
      active: true
    });
    setEditingCnpj('');
  };

  const handleDeleteCompany = (cnpj) => {
    const updatedCompanies = companies.filter(company => company.cnpj !== cnpj);
    setCompanies(updatedCompanies);
  };


  return (
    <div className="configuracao">
      <div className="navbar fixed-top">
        <div className="logo2">
          <Link to="/dashboard" className="logo">
            <img src="/logoA.png" alt="Logo" />
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/dashboard">Início</Link>
          <Link to="/agendamentos">Agendamento</Link>
          <Link to="/configuracao">Barbearia</Link>
          <a href="/">Sair</a>
        </div>
      </div>
      <div className="container mt-4">
      <div className="content" style={{ marginTop: '20px' }}></div>
      <div className="Font"><h1>Lista de Barbearias</h1></div>
      <button onClick={() => setEditingCnpj('')}>Cadastrar Nova Barbearia</button>
      {editingCnpj ? (
        <div>
          <h2>Editar Barbearia</h2>
          <input
            type="text"
            name="name"
            value={newCompany.name}
            placeholder="Nome da Empresa"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="cnpj"
            value={newCompany.cnpj}
            placeholder="CNPJ"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="street"
            value={newCompany.address.street}
            placeholder="Rua"
            onChange={handleAddressChange}
          />
          <input
            type="text"
            name="city"
            value={newCompany.address.city}
            placeholder="Cidade"
            onChange={handleAddressChange}
          />
          <input
            type="text"
            name="country"
            value={newCompany.address.country}
            placeholder="País"
            onChange={handleAddressChange}
          />
          <label>
            <input
              type="checkbox"
              name="active"
              checked={newCompany.active}
              onChange={handleActiveChange}
            />
            Ativa
          </label>
          <button onClick={handleUpdateCompany}>Atualizar</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            name="name"
            value={newCompany.name}
            placeholder="Nome da Barbearia"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="cnpj"
            value={newCompany.cnpj}
            placeholder="CNPJ"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="street"
            value={newCompany.address.street}
            placeholder="Estado"
            onChange={handleAddressChange}
          />
          <input
            type="text"
            name="city"
            value={newCompany.address.city}
            placeholder="Cidade"
            onChange={handleAddressChange}
          />
          <input
            type="text"
            name="country"
            value={newCompany.address.country}
            placeholder="País"
            onChange={handleAddressChange}
          />
          <label>
            <input
              type="checkbox"
              name="active"
              checked={newCompany.active}
              onChange={handleActiveChange}
            />
            Ativa
          </label>
          <button onClick={handleAddCompany}>Adicionar</button>
          {error && <p>{error}</p>}
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Barbearia</th>
            <th>CNPJ</th>
            <th>Cidade</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(company => (
            <tr key={company.cnpj}>
              <td>{company.name}</td>
              <td>{company.cnpj}</td>
              <td>{company.address.city}</td>
              <td>{company.active ? 'Ativa' : 'Inativa'}</td>
              <td>
                <button onClick={() => handleEditCompany(company.cnpj)}>Editar</button>
                <button onClick={() => handleDeleteCompany(company.cnpj)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Configuracao;
