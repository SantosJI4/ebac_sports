import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../store/inex'

const Produtos = () => {
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)
  const { data, error, isLoading } = useGetProdutosQuery()

  const produtoEstaNosFavoritos = (produto: ProdutoType) =>
    favoritos.some((f) => f.id === produto.id)

  if (isLoading) return <h2>carregando...</h2>

  if (error) return <h2>Erro ao carregar produtos</h2>

  return (
    <>
      <S.Produtos>
        {data?.map((produto: ProdutoType) => (
          <Produto
            key={produto.id}
            produto={produto}
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
