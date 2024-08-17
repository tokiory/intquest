import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui";
import { capitalize } from "@/utils/capitalize.ts";
import { loadIcons } from "@iconify-icon/react";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { useEffect, useState } from "react";

loadIcons(['gravity-ui:moon', 'gravity-ui:sun', 'gravity-ui:display'])

type Theme = 'light' | 'dark' | 'system';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('system');

  const icon = theme === 'light' ? 'gravity-ui:sun' : (theme === 'dark' ? 'gravity-ui:moon' : 'gravity-ui:display');

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('system')
    }
  };

  useEffect(() => {
    let finalTheme: Exclude<Theme, "system">;

    switch (theme) {
      case 'system': {
        finalTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        break
      }
      case "dark": {
        finalTheme = 'dark';
        break
      }
      case "light": {
        finalTheme = 'light';
      }
    }

    if (finalTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    }, [theme]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button onClick={toggleTheme} size="icon" variant="outline">
            <Icon
              icon={icon}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{capitalize(theme) + " theme"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
