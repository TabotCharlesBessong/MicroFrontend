import {mount as Mountain} from 'products/ProductsIndex';
import 'cart/CartShow';
import mount from '../../cart/src/bootstrap';

console.log('Container!');

Mountain(document.querySelector("#my-products"))
mount(document.querySelector("#my-cart"))