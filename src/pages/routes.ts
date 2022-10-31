import Closet, { ClosetIcon } from './Closet';
import Home, { HomeIcon } from './Home/Home';
import Outfits, { OutfitsIcon } from './Outfits';
import Search, { SearchIcon } from './Search';

export enum BottomTabPages {
  Home = 'Home',
  Search = 'Search',
  Outfits = 'Outfits',
  Closet = 'Closet',
}

const ROUTES = {
  [BottomTabPages.Home]: {
    component: Home,
    icon: HomeIcon,
  },
  [BottomTabPages.Search]: {
    component: Search,
    icon: SearchIcon,
  },
  [BottomTabPages.Outfits]: {
    component: Outfits,
    icon: OutfitsIcon,
  },
  [BottomTabPages.Closet]: {
    component: Closet,
    icon: ClosetIcon,
  },
};

export default ROUTES;
