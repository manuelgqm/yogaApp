import { Provider } from 'preact-redux'
import store from './store';
import App from './components/app';
import './style';
// import { addAsana, removeAsana } from './actions'

// console.log(store.getState())

// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// store.dispatch(addAsana('Saludo al Sol'))
// store.dispatch(addAsana('La estrella'))
// store.dispatch(addAsana('Perro con hocico al suelo'))
// store.dispatch(addAsana('Gato enfadado'))
// store.dispatch(removeAsana(1))

// unsubscribe()

export default () => (
	<div id="outer">
		<Provider store={store}>
			<App />
		</Provider>
	</div>
)