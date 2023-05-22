import Item from "./Item";
import { PAGES, PLATFORMS, COMPANY, SUPPORT } from "./menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 py-16">
      <Item Links={PAGES} title="PAGES" />
      <Item Links={PLATFORMS} title="PLATFORMS" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;