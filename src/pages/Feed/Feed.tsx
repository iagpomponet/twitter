import SideMenu from "../../component/SideMenu/SideMenu";
import Tweet from "../../component/Tweet/Tweet";

import * as css from "./Feed.styles"

const Feed = () => {
    // TODO: Feed should only be visible to logged in users otherwise redirect to login page
    // TODO: Tweets component 
    // TODO: Left menu component 

    return <css.PageContainer>
        <SideMenu />
        <css.Feed>
            <css.FeedTitle>
                Página Inicial
            </css.FeedTitle>
            <Tweet profilePic="https://pbs.twimg.com/profile_images/1601759428780359682/DGNEbrW0_400x400.jpg" user="@iagopomponet" name="iago" message="Existe alguma explicação técnica do pq o Corinthians é o único clube que coloca a torcida adversária em um dos melhores lugares do estadio? Ou é só burrice mesmo?" likes={2} retweets={5} />
            <Tweet profilePic="https://pbs.twimg.com/profile_images/1601759428780359682/DGNEbrW0_400x400.jpg" user="@iagopomponet" name="iago" message="Existe alguma explicação técnica do pq o Corinthians é o único clube que coloca a torcida adversária em um dos melhores lugares do estadio? Ou é só burrice mesmo?" likes={2} retweets={5} />
            <Tweet profilePic="https://pbs.twimg.com/profile_images/1601759428780359682/DGNEbrW0_400x400.jpg" user="@iagopomponet" name="iago" message="Existe alguma explicação técnica do pq o Corinthians é o único clube que coloca a torcida adversária em um dos melhores lugares do estadio? Ou é só burrice mesmo?" likes={2} retweets={5} />
        </css.Feed>
    </css.PageContainer>
};

export default Feed;