import { Component } from 'react';
// import { useState } from 'react'
import './app.css';
// import '../app-info/app-info';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
// import EmployersAddForm from '../employers-add-form/employers-add-form';
import EmployersAddForm from '../employers-add-form/employers-add-form';

function App() {
  const data = [
    { name: 'John C.', salary: 800, id: 1 },
    { name: 'Alex M.', salary: 3000, id: 2 },
    { name: 'Carl W.', salary: 5000, id: 3 },
    { name: 'Carl Sagan', salary: 100, id: 4 }
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployersList data={data} />
      <EmployersAddForm />
    </div>
  )
}

class WhoAmI extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        <h1>My name is {name}, surname - {surname}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
}
export default App



