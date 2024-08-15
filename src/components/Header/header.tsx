import { Link } from "react-router-dom";
import { Button } from "@/components/ui";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { FEATURES } from "@/data/features.ts";

interface HeaderLink {
  name: string;
  to: string;
}

export const Header = () => {
  const links: HeaderLink[] = [];

  FEATURES.history && links.push({ name: "History", to: "/history" });
  FEATURES.randomizer &&
    links.push({
      name: "Randomizer",
      to: "/random",
    });

  return (
    <div className="sticky z-[2] bg-background shadow-sm top-0 flex py-3 px-4 border-b">
      <div className="flex justify-between items-center w-full">
        <Link to="/" className="font-semibold text-lg">
          Intquest
        </Link>

        <div className="flex gap-6 text-base items-center">
          <div className="flex gap-4">
            {links.length > 0 &&
              links.map((link) => (
                <Link key={link.name} to={link.to}>
                  {link.name}
                </Link>
              ))}
          </div>
          {FEATURES.premium && (
            <Button asChild>
              <Link to="/pro" className="flex gap-2">
                Купить Pro
                <Icon icon="gravity-ui:star" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
