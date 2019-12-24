export interface DrawerItem {
  icon: React.ReactElement;
  name: string;
  path: string;
  roles?: [];
}

export interface DrawerProps {
  drawerItems: DrawerItem[];
  onMenuClose: () => void;
  open: boolean;
}
