import './styles.css';

import Header from './componentes/Header';
import Section from './componentes/Section';
import ListItem from './componentes/ListItem';


const gamesListData = [
  {
    href: "https://www.twitch.tv/directory/game/Fortnite",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/33214-144x192.jpg",
    alt:"Imagem do jogo Fortnite",
  },

  {
    href: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt:"Imagem do jogo Minecraft",
  },

  {
    url: "https://www.twitch.tv/directory/game/Grand%20Theft%20Auto%20V",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-144x192.jpg",
    alt: "Imagem do jogo Grand Theft Auto V",
  },

  {  
    href: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt:"Imagem do jogo Valorant",
  },
  
  {
    href: "https://www.twitch.tv/directory/game/Counter-Strike%3A%20Global%20Offensive",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-144x192.jpg",
    alt:"Imagem do jogo Counter-Strike: Global Offensive",
  },

];

const channelListData = [
  {  
    href: "https://www.twitch.tv/maykbrito",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt:"Imagem de Mayk Brito",
  },

  {
    href: "https://www.twitch.tv/alanzoka",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-70x70.png",
    alt:"Imagem de Alanzoka",
  },

  {
    href: "https://www.twitch.tv/cellbit",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-70x70.png",
    alt:"Imagemd de Cellbit",
  },

];

const socialListData = [
  {
    url: "https://github.com/PhillDylan",
    imageUrl: "/assets/github.svg",
    alt: "GitHub do Phillip Dylan",
  },

  {
    url: "https://www.instagram.com/dylan.pdcs/",
    imageUrl: "/assets/instagram.svg",
    alt: "Instagram do Phillip Dylan",
  },

];

export default function App() {
  return (
    <div className='app'>
      <Header />

      <main>
        <Section 
          title="Meus jogos"
          subtitle="Os games que mais gosto de jogar!"
          className="games-list"
        >
          {
            gamesListData.map(function(item){
              return (
                <ListItem 
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>

        <Section 
          title="Canais e Streamers"
          subtitle="Os Streamers que eu mais assisto!"
          className="channel-list"
        >
        
          {
            channelListData.map(function(item){
              return(
                <ListItem 
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>
        
        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >

          {
            socialListData.map(function(item){
              return(
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }

        </Section>

      </main>

    </div>
  );
}
