import React from 'react'
import FormGroup from '../components/form-group'
import Card from '../components/card'

class RegisterUsuario extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        repeat_password: ''
    }

    registerUsuario = () => {
        console.log(this.state)

    }

    render() {
        return (
            <Card title="Cadastro de Usuário">
                <p className="campoObrigatorio" style={{ color: 'red' }}>Preencha todos os campos para cadastrar seu acesso</p>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup htmlFor="inputName" label="Nome: *">
                                <input type="text"
                                    className="form-control"
                                    name="name"
                                    onChange={e => this.setState({ name: e.target.value })}
                                    id="inputName"
                                    placeholder="Digite seu nome" />
                            </FormGroup>
                            <FormGroup htmlFor="inputEmail" label="Email: *">
                                <input type="text"
                                    className="form-control"
                                    name="email"
                                    onChange={e => this.setState({ email: e.target.value })}
                                    id="inputEmail"
                                    placeholder="Digite seu email" />
                            </FormGroup>
                            <FormGroup htmlFor="inputPassword" label="Senha: *">
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    onChange={e => this.setState({ password: e.target.value })}
                                    id="inputPassword"
                                    placeholder="Digite sua senha" />
                            </FormGroup>
                            <FormGroup htmlFor="inputRepeatPassword" label="Repetir senha: *">
                                <input type="password"
                                    className="form-control"
                                    name="repeat_password"
                                    onChange={e => this.setState({ repeat_password: e.target.value })}
                                    id="inputRepeatPassword"
                                    placeholder="Repita a senha" />
                            </FormGroup>
                            <button type="button"
                                className="btn btn-success mr-3 mt-3"
                                onClick={this.registerUsuario}>Salvar</button>
                                 <button type="button" onClick={this.cancelar} className="btn btn-danger mt-3"><i className="pi pi-times"></i> Cancelar </button>
                        </div>

                    </div>
                </div>
            </Card>
        );
    }
}

export default RegisterUsuario