import React from 'react'
import FormGroup from '../components/form-group'
import Card from '../components/card'

class RevenueExpenses extends React.Component {
    state = {
        id: null,
        usuario: null,
        atualizando: false,
        descricao: '',
        empresa: '',
        valor: '',
        mes: '',
        ano: '',
        tipo: '',
        notaFiscal: '',
        status: '',
    }

    cancelar = () => {
        this.props.history.push('/home')
    }

    render() {
        return (
            <Card title={'Cadastro de Comissões'}>
                <div className="row">
                    <div className="col md-6">
                        <FormGroup id="inputEmpresa" label="Empresa: *">
                            <input id="inputEmpresa"
                                name="empresa"
                                value={this.state.empresa}
                                type="text"
                                className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col md-6">
                        <FormGroup id="inputDescricao" label="Descrição: *">
                            <input id="inputDescricao"
                                name="descricao"
                                value={this.state.descricao}
                                type="text"
                                className="form-control" />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                
                    <div className="col md-4">
                        <FormGroup id="inputMes" label="Mês: *">
                            <input id="inputMes"
                                name="mes"
                                value={this.state.mes}
                                type="text"
                                className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col md-4">
                        <FormGroup id="inputAno" label="Ano: *">
                            <input id="inputAno"
                                name="ano"
                                value={this.state.ano}
                                type="date"
                                className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col md-4">
                        <FormGroup id="inputNotaFiscal" label="Nota Fiscal Nº: *">
                            <input id="inputNotaFiscal"
                                name="notaFiscal"
                                value={this.state.notaFiscal}
                                type="text"
                                className="form-control" />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col md-4">
                        <FormGroup id="inputValor" label="Valor: *">
                            <input id="inputValor"
                                name="valor"
                                value={this.state.valor}
                                type="text"
                                className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col md-4">
                        <FormGroup id="inputTipo" label="Tipo: *">
                            <input id="inputTipo"
                                name="tipo"
                                value={this.state.tipo}
                                type="text"
                                className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col md-4">
                        <FormGroup id="inputStatus" label="Status: ">
                            <input id="inputStatus"
                                name="status"
                                value={this.state.status}
                                className="form-control" disabled />
                        </FormGroup>
                    </div>

                </div>
                <div className="row">

                    <button type="button" className="btn btn-success mr-3 mt-2 ml-3"><i className="pi pi-check mr-1"></i> Salvar </button>

                    <button type="button" onClick={this.cancelar} className="btn btn-danger mt-2"><i className="pi pi-times"></i> Cancelar </button>

                </div>
            </Card>
        )
    }
}

export default RevenueExpenses