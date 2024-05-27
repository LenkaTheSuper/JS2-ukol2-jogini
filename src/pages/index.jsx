import { render } from '@czechitas/render';
import { Header } from '../components/Header/Header';
import { Intro } from '../components/Intro/Intro';
import { Pose } from '../components/Pose/Pose';
import '../global.css';
import './index.css';
import yoga from "../img/yoga-pose.jpg"

const texts = {
    title: 'Jogíni',
    heading: 'Vítejte mezi Jogíny',
    text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
           něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
           Postupně se seznámíte se základními principy jógy, jak přístupovat k
           sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
           svoje tělo, pocity a emoce.`,
    src: 'img/yoga-pose.jpg'
}

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Header title={texts.title}></Header>
    <Intro heading={texts.heading} text={texts.text}></Intro>
    <Pose obrazek={yoga}></Pose>
  </div>
);