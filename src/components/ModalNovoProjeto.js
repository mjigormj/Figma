import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react';

/*cons ModalNovoProjeto = () => (
    <Modal tringger={<Button className="ui primary button"> criar projeto</Button>}>
        <Modal.Content>
            <Modal.Description>
                <form className="ui form">
                    <div className="fild">
                        <label>Nome do Projeto</label>
                        <input name="nome" planceholder="nome do projeto" />
                    </div>
                    <div className="fild">
                        <label>Autor</label>
                        <input name="autor" planceholder="nome do autor do projeto" />
                    </div>
                    <div className="fild">
                        <label>Descrição</label>
                        <textarea name="descricao"></textarea>
                    </div>
                    <button type="submit" className="ui button primary">Cadastrar</button>
                </form>
            </Modal.Description>
        </Modal.Content>
    </Modal>
      
) */

class ModalNovoProjeto extends Component {
    constructor(){
        super()
        this.state = {
            nome: '',
            usuario: '',
            descricao: '',
            modalOpen: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleOpen = () => this.setState({ modalOpen: tru })
    handleClose = () => this.setState({ modalOpen: false })

    handleSubmit(e){
        e.preventDefault()
        this.props.adicionarProjeto(this.state)
        this.handleClose()
    }

    render(){
        return(
            <Modal
                trigger={<Button onClick={this.handleOpen} className="ui primary button">criar projeto</Button>}
                open={this.state.modalOpen}
                onClose
        )
    }
}

export default ModalNovoProjeto