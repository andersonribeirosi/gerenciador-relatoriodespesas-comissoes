import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'

class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

    entrar = () => {
        console.log('Email: ' + this.state.email);
        console.log('Senha: ' + this.state.password);
    }

    cadastrar = () => {
        this.props.history.push('/cadastro-usuario');
    }

    render() {
        return (
            <form >

                <div className="form-group row">
                    <div className="col-md-6" style={{ position: 'relative', margin: 'auto' }}>
                        <div className="bs-docs-section">
                            <Card title="Login">
                                <p className="mb-3 campoObrigatorio" style={{ color: 'red' }}>Preencha os dados de acesso ou cadastre-se</p>
                                <div className="form-group row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>
                                                <FormGroup label="Email: *" htmlFor="inputEmail">
                                                    <input type="email"
                                                        value={this.state.email}
                                                        onChange={e => this.setState({ email: e.target.value })}
                                                        id="inputEmail"
                                                        placeholder="Digite seu email"
                                                        className="form-control" />
                                                </FormGroup>
                                                <FormGroup label="Senha: *" htmlFor="inputPassword">
                                                    <input type="password"
                                                        value={this.state.password}
                                                        onChange={e => this.setState({ password: e.target.value })}
                                                        id="inputPassword"
                                                        placeholder="Digite seu email"
                                                        className="form-control" />
                                                </FormGroup>
                                                <button type="button" className="btn btn-success mr-3 mt-3" onClick={this.entrar}>Entrar</button>
                                                <button type="button" className="btn btn-danger mt-3" onClick={this.cadastrar}>Cadastrar</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>

            </form>
        )
    }
}

export default Login