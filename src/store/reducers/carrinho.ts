import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

interface CarrinhoSliceState {
  itens: Produto[]
}

interface AdicionarAction {
  type: string
  payload: Produto
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state: CarrinhoSliceState, action: PayloadAction<Produto>) => {
      const produtos: Produto = action.payload

      if (state.itens.find((Produto: Produto) => Produto.id === produtos.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produtos)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
export type { CarrinhoSliceState, AdicionarAction }
