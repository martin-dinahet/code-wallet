import React from "react";
import { Link } from "react-router-dom";
import { PrettyButton } from "./ui/pretty-button";
import { ThemeToggleButton } from "./theme-toggle-button";
import { CodeXml, Info, Plus } from "lucide-react";

type Props = {};

export const Header: React.FC<Props> = ({ ...props }) => {
  return (
    <>
      <header
        className="sticky top-0 bg-background text-foreground flex justify-between items-center px-3 py-3"
        {...props}
      >
        <PrettyButton variant="ghost">
          <Link to="/" className="text-xl font-semibold">
            Code Wallet
          </Link>
        </PrettyButton>
        <ul className="flex gap-2">
          <li>
            <PrettyButton variant="primary">
              <Link to="/snippet-form/?new=true" className="flex gap-2">
                New Snippet
              </Link>
            </PrettyButton>
          </li>
          <li>
            <PrettyButton variant="primary">
              <Link to="/snippets" className="flex gap-2">
                Snippets
              </Link>
            </PrettyButton>
          </li>
          <li>
            <ThemeToggleButton />
          </li>
          <li>
            <PrettyButton variant="ghost">
              <Link to="/info">
                <Info />
              </Link>
            </PrettyButton>
          </li>
        </ul>
      </header>
    </>
  );
};
