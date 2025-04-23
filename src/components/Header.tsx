
import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Trophy, GamepadIcon, Home, Award } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#1A1F2C] to-[#6E59A5] shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Trophy className="h-8 w-8 text-[#FEC6A1]" />
          <span className="text-white font-bold text-xl">КиберСтавки</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={cn(
                "flex items-center px-4 py-2 text-white hover:text-[#D6BCFA] transition-colors"
              )}>
                <Home className="mr-1 h-4 w-4" />
                Главная
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/cybersport" className={cn(
                "flex items-center px-4 py-2 text-white hover:text-[#D6BCFA] transition-colors"
              )}>
                <GamepadIcon className="mr-1 h-4 w-4" />
                Киберспорт
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/tournaments" className={cn(
                "flex items-center px-4 py-2 text-white hover:text-[#D6BCFA] transition-colors"
              )}>
                <Award className="mr-1 h-4 w-4" />
                Турниры
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-[#D6BCFA]">
                Дисциплины
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2 p-4">
                  <li className="hover:bg-sidebar-accent rounded-md p-2 transition-colors">
                    <Link to="/cybersport/dota2" className="text-sm text-foreground hover:text-[#9b87f5]">Dota 2</Link>
                  </li>
                  <li className="hover:bg-sidebar-accent rounded-md p-2 transition-colors">
                    <Link to="/cybersport/csgo" className="text-sm text-foreground hover:text-[#9b87f5]">CS:GO</Link>
                  </li>
                  <li className="hover:bg-sidebar-accent rounded-md p-2 transition-colors">
                    <Link to="/cybersport/lol" className="text-sm text-foreground hover:text-[#9b87f5]">League of Legends</Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
