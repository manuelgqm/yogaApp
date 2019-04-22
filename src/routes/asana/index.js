import { h, Component } from 'preact';
import AsanasList from '../../components/asanas-list'
import style from './style';
import { addAsana, removeAsana } from '../../actions'
import store from '../../store'

export default class Asana extends Component {
  state = {
    id: 0,
    name: ''
  }

	triggerAddAsana = e => {
    e.preventDefault()
    store.dispatch(addAsana(this.state.name))
    this.setState({ name: '' })
  } 

  setName = e => {
    this.setState({ name: e.target.value })
  }

	render({}, { name }) {
		return (
			<div class={style.profile}>
        <form onSubmit={this.triggerAddAsana}>
          <h1>Nueva Asana</h1>
          <div>
            <label>Nombre: </label><input value={name} onInput={this.setName}></input>
            <AsanasList asanas={store.getState().asanas}></AsanasList>
          </div>
          <button type="submit">Guardar</button>
        </form>
			</div>
		);
	}
}
