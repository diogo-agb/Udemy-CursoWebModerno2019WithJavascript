
/*Componente criado apenas para ilustrar como seria o controle de 
estado do nosso componente sem usar o Redux
para ativar basta modificar a rota para usar esse componente
*/

import React, { Component } from 'react';
import Content from '../common/template/content';
import ContentHeader from '../common/template/contentHeader';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';
import axios from 'axios';

const BASE_URL = 'http://localhost:3003/api';

export default class Dashboard2 extends Component {

    constructor(props) {
        super(props)
        this.state = { credit: 0, debit: 0 }
    };

    //Essa função é chamada sempre que o componente é renderizado
    componentWillMount() {
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then(resp => this.setState(resp.data))
    };

    render() {
        const { credit, debt } = this.state
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 2.0 sem Redux" />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debt}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${credit - debt}`} text='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
};

