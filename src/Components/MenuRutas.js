import React, { Component } from 'react';

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex' }}>
                    <li style={{ marginRight: '20px' }}>
                        <a href="/">Home</a>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <a href="/cine">Cine</a>
                    </li>
                    <li>
                        <a href="/musica">Música</a>
                    </li>
                </ul>
            </div>
        );
    }
}
