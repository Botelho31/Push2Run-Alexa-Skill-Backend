Lista do Que Fazer:

Usuario:
    Get - /usuario - Pegar Todos
    Get - /usuario/<ID> - Pegar Um
    Post - /usuario/altera - Alterar
    Get - /usuario/esqueci/<email> - Mndar email com nova senha
    Get - /usuario/imagem/<ID> - Pegar Imagem Usuario
Cliente:
    Get - /cliente - Pegar Todos
    Post - /cliente - Criar Um
    Get - /cliente/<ID> - Pegar Um
    Get - /cliente/<email>/senha/<senha> - Fazer Login
Paciente:
    Get - /paciente/cpf/<CPF> - Pegar pelo CPF
    Post - /paciente
Modelo Implante:
    Get - /modeloImplante - Pegar Todos
Log:
    Post - /log - Cadastrar Log
Anuncios:
    Get - /anuncio/i18n/<localizacao> - Pegar anuncios pela localização
    Get - /anuncio/imagem/{id} - Pegar imagem do anuncio
Aparelho:
    Post - /aparelho - Criar Um
    Delete - /aparelho/<ID> - Deletar Um
Serviço:
    Get - /servico/categoria/{idCategoriaServico}/i18n/{localizacao} - Pegar serviços pelo ID de categoria e localização
    Get - /servico/imagem/<ID> - Pegar imagem de serviço
    Get - /servico/imagemCapa/<ID> - Pegar imagem da capa de serviço
Categoria:
    Get - /categoria/i18n/{localizacao} - Pegar Categorias Pela localização
    Get - /categoria/imagem/{ID} - Pegar imagem da categoria
Compra:
    Post - /compra - Realizar Compra
    Get - /compra/cliente/{idCliente} - Pegar compras do cliente especifico
    Get - /compra/equipe/{idEquipe} - Pegar compras da equipe especifico

