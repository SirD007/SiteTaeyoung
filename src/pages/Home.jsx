import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Sobre</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}