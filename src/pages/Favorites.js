import { useContext } from "react";
import FavoriteContext from "../store/favorites-cotext";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
    const favoritesCtx = useContext(FavoriteContext);

    let content;

    if(favoritesCtx.totalFavorites === 0) {
        content = <p>You got no favorites yet. Start adding some?</p>
    }else {
        content = <MeetupList meetups={ favoritesCtx.favorites} />
    }
    return <section>
        <h1>My favorites</h1>
        {content}
    </section>;
}

export default FavoritesPage;