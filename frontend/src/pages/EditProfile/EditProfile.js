import './EditProfile.css'

const EditProfile = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div id='edit-profile'>
        <h2>Edite seus dados:</h2>
        <p className='subtitle'> Adicione uma imagem de perfil e conte mais sobre você...</p>

        {/* preview da imagem */}
        <form onSubmit={handleSubmit}>
                <input type="text" name="" placeholder='Nome' id="" />
                <input type="text" name="" placeholder='E-mail' id="" disabled />
                <label>
                    <span>Imagem do perfil:</span>
                    <input type="file" />
                </label>
                <label>
                    <span>Bio:</span>
                    <input type="text" name="" placeholder='Descrição de perfil' id="" />
                </label>
                <label>
                    <span>Quer alterar sua senha?</span>
                    <input type="password" name="" placeholder='Digite uma nova senha' id="" />
                </label>

                <input type="submit" value="Atualizar"  />
        </form>

    </div>
  )
}

export default EditProfile