import React from 'react'
import Card from '../components/card'

class Login extends React.Component {
    render() {
        return (
            <form>
                <div className="container-fluid">
                    <div className="form-group row">
                        <div className="col-md-6" style={{ position: 'relative', margin: 'auto' }}>
                            <div className="bs-docs-section">
                                <Card title="Login">
                                    <p className="mb-3" style={{ color: 'red' }}>Informe os dados de acesso</p>
                                    <div className="form-group row">
                                        <div className="col-lg-12">
                                            <div className="bs-component">
                                                <fieldset>
                                                    <div className="form-group">
                                                        <label for="inputEmail">Email</label>
                                                        <input type="email"
                                                            id="inputEmail"
                                                            placeholder="Digite seu email"
                                                            className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="inputSenha">Senha</label>
                                                        <input type="password"
                                                            id="inputSenha"
                                                            placeholder="Digite sua senha"
                                                            className="form-control" />
                                                    </div>
                                                    <button type="button" className="btn btn-success mr-3 mt-3">Entrar</button>
                                                    <button type="button" className="btn btn-warning mt-3">Cadastrar</button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        )
    }
}

export default Login;