import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Profissão</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Marcio</td>
                        <td>Dev Front-end</td>
                    </tr>
                    <tr>
                        <td>Jorge</td>
                        <td>Engenheiro de Software</td>
                    </tr>
                    <tr>
                        <td>João</td>
                        <td>Pedreiro</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table